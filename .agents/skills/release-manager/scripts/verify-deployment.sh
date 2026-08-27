#!/usr/bin/env bash

set -euo pipefail

readonly RELEASE_REPO="OU9999/ou9999-dev"
readonly VERCEL_PROJECT_ID="prj_uEUJ14NbLWmVLiqhtd6pDtjKeX4a"
readonly VERCEL_SCOPE="ou9999s-projects"

if [[ $# -ne 1 || ! $1 =~ ^[0-9a-f]{40}$ ]]; then
  echo "usage: verify-deployment.sh <40-character-release-sha>" >&2
  exit 2
fi

for RELEASE_COMMAND in gh jq pnpm curl git; do
  if ! command -v "${RELEASE_COMMAND}" >/dev/null 2>&1; then
    echo "required command not found: ${RELEASE_COMMAND}" >&2
    exit 1
  fi
done

RELEASE_ROOT="$(git rev-parse --show-toplevel)"
cd "${RELEASE_ROOT}"

RELEASE_SHA="$1"
REMOTE_RELEASE_SHA="$(gh api "repos/${RELEASE_REPO}/git/ref/heads/release" --jq .object.sha)"

if [[ "${RELEASE_SHA}" != "${REMOTE_RELEASE_SHA}" ]]; then
  echo "release HEAD changed: expected=${RELEASE_SHA} actual=${REMOTE_RELEASE_SHA}" >&2
  exit 1
fi

get_run_id() {
  local workflow_file="$1"

  gh run list \
    --repo "${RELEASE_REPO}" \
    --workflow "${workflow_file}" \
    --branch release \
    --commit "${RELEASE_SHA}" \
    --event push \
    --limit 1 \
    --json databaseId \
    --jq '.[0].databaseId // empty'
}

wait_for_run_id() {
  local workflow_file="$1"
  local run_id=""

  for _ in {1..12}; do
    run_id="$(get_run_id "${workflow_file}")"
    if [[ -n "${run_id}" ]]; then
      printf '%s\n' "${run_id}"
      return 0
    fi
    sleep 5
  done

  return 1
}

if ! CI_RUN_ID="$(wait_for_run_id ci.yml)"; then
  echo "release SHA에 연결된 CI push run 없음" >&2
  exit 1
fi

if ! VERCEL_RUN_ID="$(wait_for_run_id vercel-production.yml)"; then
  echo "release SHA에 연결된 Vercel Production push run 없음" >&2
  exit 1
fi

gh run watch "${CI_RUN_ID}" \
  --repo "${RELEASE_REPO}" \
  --exit-status \
  --interval 10

gh run watch "${VERCEL_RUN_ID}" \
  --repo "${RELEASE_REPO}" \
  --exit-status \
  --interval 10

gh run view "${CI_RUN_ID}" --repo "${RELEASE_REPO}" --json jobs |
  jq -e 'any(.jobs[]; .name == "build" and .status == "completed" and .conclusion == "success")' >/dev/null

gh run view "${VERCEL_RUN_ID}" --repo "${RELEASE_REPO}" --json jobs |
  jq -e 'any(.jobs[]; .name == "deploy" and .status == "completed" and .conclusion == "success")' >/dev/null

PRODUCTION_JSON="$(pnpm exec vercel api "/v9/projects/${VERCEL_PROJECT_ID}" \
  --scope "${VERCEL_SCOPE}" \
  --raw)"

jq -e --arg release_sha "${RELEASE_SHA}" '
  .targets.production |
  .readyState == "READY" and
  .target == "production" and
  .meta.githubCommitRef == "release" and
  .meta.githubCommitSha == $release_sha and
  (.alias | type == "array" and index("ou9999-dev.com") != null)
' <<<"${PRODUCTION_JSON}" >/dev/null

jq '{production: (.targets.production | {id,url,readyState,target,alias,meta:{githubCommitRef:.meta.githubCommitRef,githubCommitSha:.meta.githubCommitSha,githubCommitMessage:.meta.githubCommitMessage}})}' \
  <<<"${PRODUCTION_JSON}"

for RELEASE_PATH in / /about /feed.xml /sitemap.xml; do
  RELEASE_URL="https://ou9999-dev.com${RELEASE_PATH}"
  if ! RELEASE_STATUS="$(curl \
    --silent \
    --show-error \
    --location \
    --fail \
    --max-time 30 \
    --output /dev/null \
    --write-out '%{http_code}' \
    "${RELEASE_URL}")"; then
    echo "production smoke test failed: ${RELEASE_URL}" >&2
    exit 1
  fi

  if [[ "${RELEASE_STATUS}" != "200" ]]; then
    echo "unexpected production status: ${RELEASE_URL} ${RELEASE_STATUS}" >&2
    exit 1
  fi

  printf '%s status=%s\n' "${RELEASE_URL}" "${RELEASE_STATUS}"
done

printf 'verified_release_sha=%s\nci_run_id=%s\nvercel_run_id=%s\n' \
  "${RELEASE_SHA}" "${CI_RUN_ID}" "${VERCEL_RUN_ID}"
