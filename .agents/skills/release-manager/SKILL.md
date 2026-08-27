---
name: release-manager
description: develop를 release로 승격하고 GitHub Actions와 Vercel Production이 동일한 release SHA를 배포했는지 검증. release 점검·실행·배포 실패 복구에 사용
allowed-tools: ["Bash", "Read", "Grep"]
---

# Release Manager

`OU9999/ou9999-dev`의 `develop -> release` 승격과 Vercel Production 검증 전담.

## 권한 경계

- release 실행 명시 전 읽기 전용 점검만 허용
- PR 생성·close·merge, 원격 branch push, GitHub variable·secret 변경은 운영 변경
- 실행 명시 후에도 PR 생성 전 승격 preview와 사용자 승인 필수
- 승인 범위를 벗어난 재시도, force-push, `develop` history 수정 금지
- 실패 시 마지막으로 검증된 production 유지와 원인 보고 우선

## 운영 계약

- 통합 branch `develop`
- Production branch `release`
- legacy branch `main`
- 기능·관리 PR은 `develop`, release 승격 PR은 `release` base
- squash-only merge와 PR title commit history
- `release` 직접 commit·force-push 금지
- Direct PR head인 `develop` 삭제 금지
- Promotion PR branch만 merge 후 삭제
- release 승격 commit·PR은 `AGENTS.md`의 `release-manager` 예외 적용

## 사전 확인

저장소 root에서 Bash로 실행.

```bash
set -euo pipefail

git status --short --branch
git fetch origin --prune
git branch -r --no-color | rg 'origin/(develop|release|main|release/)'
git worktree list

REPO_SETTINGS="$(gh api repos/OU9999/ou9999-dev)"
jq '{default_branch,allow_merge_commit,allow_squash_merge,allow_rebase_merge,squash_merge_commit_title,squash_merge_commit_message}' <<<"${REPO_SETTINGS}"
jq -e '
  .default_branch == "develop" and
  .allow_merge_commit == false and
  .allow_squash_merge == true and
  .allow_rebase_merge == false and
  .squash_merge_commit_title == "PR_TITLE" and
  .squash_merge_commit_message == "BLANK"
' <<<"${REPO_SETTINGS}" >/dev/null

for RELEASE_BRANCH in develop release; do
  gh api "repos/OU9999/ou9999-dev/branches/${RELEASE_BRANCH}/protection" |
    jq -e '
      (.required_status_checks.contexts | index("build")) != null and
      .required_linear_history.enabled == true and
      .allow_force_pushes.enabled == false and
      .allow_deletions.enabled == false
    ' >/dev/null
done

RELEASE_SECRETS="$(gh secret list --repo OU9999/ou9999-dev --json name)"
for RELEASE_SECRET in VERCEL_TOKEN VERCEL_ORG_ID VERCEL_PROJECT_ID; do
  jq -e --arg name "${RELEASE_SECRET}" 'any(.[]; .name == $name)' \
    <<<"${RELEASE_SECRETS}" >/dev/null
done

test "$(gh variable get VERCEL_DEPLOY_ENABLED \
  --repo OU9999/ou9999-dev \
  --json value \
  --jq .value)" = "true"
jq -e '.git.deploymentEnabled == false' vercel.json >/dev/null
jq -e '.devDependencies.vercel | test("^[0-9]+\\.[0-9]+\\.[0-9]+$")' package.json >/dev/null
```

설정 불일치 시 release 중단과 drift 보고.

## 승격 범위 결정

Tree diff 우선. squash 승격으로 같은 변경이 서로 다른 SHA에 존재 가능.

```bash
set -euo pipefail

DEVELOP_SHA="$(git rev-parse origin/develop)"
RELEASE_BEFORE_SHA="$(git rev-parse origin/release)"

git diff --stat "${RELEASE_BEFORE_SHA}" "${DEVELOP_SHA}"
git diff --name-status "${RELEASE_BEFORE_SHA}" "${DEVELOP_SHA}"
git cherry -v "${RELEASE_BEFORE_SHA}" "${DEVELOP_SHA}"
git log --cherry-pick --right-only --no-merges --reverse \
  --format='%h%x09%ad%x09%s' \
  --date=short \
  "${RELEASE_BEFORE_SHA}...${DEVELOP_SHA}"

if git diff --quiet "${RELEASE_BEFORE_SHA}" "${DEVELOP_SHA}"; then
  echo "release 대상 없음"
  exit 0
fi

MERGE_TREE_OUT="$(mktemp /tmp/simple-blog-release-merge-tree.XXXXXX)"
trap 'rm -f -- "${MERGE_TREE_OUT}"' EXIT
DEVELOP_TREE="$(git rev-parse "${DEVELOP_SHA}^{tree}")"

if git merge-tree "${RELEASE_BEFORE_SHA}" "${DEVELOP_SHA}" >"${MERGE_TREE_OUT}"; then
  MERGED_TREE="$(sed -n '1p' "${MERGE_TREE_OUT}")"
  if [[ "${MERGED_TREE}" = "${DEVELOP_TREE}" ]]; then
    RELEASE_MODE="direct"
  else
    RELEASE_MODE="promotion"
  fi
else
  RELEASE_MODE="promotion"
fi

cat "${MERGE_TREE_OUT}"
printf 'develop_sha=%s\nrelease_before_sha=%s\nrelease_mode=%s\n' \
  "${DEVELOP_SHA}" "${RELEASE_BEFORE_SHA}" "${RELEASE_MODE}"
```

- `git diff` empty → PR 없이 종료
- `git cherry -v`의 `-` → patch-equivalent commit
- `git log --cherry-pick --right-only` → PR 본문 분석 대상 유효 commit
- `git log origin/release..origin/develop` 단독 판정 금지
- merge 결과 tree와 `DEVELOP_TREE` 불일치 → Promotion PR
- `merge-tree=conflict` 또는 GitHub `mergeStateStatus=DIRTY` → Promotion PR

## 승인 preview

PR 생성 전 사용자에게 다음 항목 공유 후 승인 수집.

- `DEVELOP_SHA`와 기존 `release` SHA
- Direct 또는 Promotion 방식
- tree diff 기준 승격 변경 단위
- PR title과 body
- 생성·merge할 branch와 배포 검증 계획

승인 전 PR 생성, promotion commit, push 금지.

PR title은 `release: YYYY-MM-DD`.

### PR 본문 작성

유효 commit 이력과 tree diff를 교차 확인해 실제 Production 변경사항 작성.

- `git cherry -v`의 `+`와 `git log --cherry-pick --right-only` 결과만 본문 후보로 사용
- `git cherry -v`의 `-`는 이미 release에 반영된 patch-equivalent이므로 제외
- 사용자에게 보이는 기능, UI, 콘텐츠와 Production 동작 변화 중심으로 그룹화
- 각 그룹에 근거가 되는 PR 번호 또는 short SHA를 `관련 commit`으로 표기
- 패키지·빌드·배포 변경은 Production 동작이나 안정성에 미치는 영향이 있을 때만 포함
- 에이전트 하네스, 스킬, commit·PR convention, 내부 규칙과 관리 문서는 기본 제외
- 내부 변경을 사용자가 명시적으로 요청하거나 Production 동작에 직접 영향이 있을 때만 포함
- `develop 변경사항 승격` 같은 범용 설명만으로 요약·변경사항 구성 금지
- 유효 commit 수를 적을 경우 본문에서 제외한 내부 commit이 있음을 함께 구분

본문 작성 후 다음 품질 조건 확인:

- 모든 변경사항 항목이 유효 commit 또는 tree diff로 입증 가능
- patch-equivalent나 현재 tree에 없는 기능 언급 없음
- 사용자 관점의 실제 변경 없이 배포 절차만 반복하는 섹션 없음
- preview 본문과 PR 생성 본문 완전 일치

Preview에 표시할 실제 본문을 `RELEASE_PR_BODY`에 저장. 아래 placeholder를 PR에 그대로 사용 금지:

```bash
RELEASE_PR_BODY="$(cat <<'BODY'
<유효 commit 이력과 tree diff에서 작성한 실제 PR 본문>
BODY
)"
```

## Direct PR

`RELEASE_MODE=direct`에서만 생성.

```bash
set -euo pipefail

RELEASE_DATE="$(date +%F)"
DIRECT_PR_URL="$(gh pr create \
  --repo OU9999/ou9999-dev \
  --base release \
  --head develop \
  --title "release: ${RELEASE_DATE}" \
  --body "${RELEASE_PR_BODY}")"
DIRECT_PR_NUMBER="${DIRECT_PR_URL##*/}"

DIRECT_PR_JSON="$(gh pr view "${DIRECT_PR_NUMBER}" \
  --repo OU9999/ou9999-dev \
  --json headRefOid,mergeStateStatus,url)"
jq . <<<"${DIRECT_PR_JSON}"

test "$(jq -r .headRefOid <<<"${DIRECT_PR_JSON}")" = "${DEVELOP_SHA}"
APPROVED_HEAD_SHA="${DEVELOP_SHA}"
```

head SHA 불일치 시 PR close 후 최신 범위로 preview부터 재시작. `DIRTY`면 Direct PR close 후 Promotion 방식으로 preview와 승인 재수집.

## Promotion PR

`origin/release` 기반 임시 branch의 tree를 승인된 `DEVELOP_SHA`와 정확히 일치시킨 뒤 생성.

```bash
set -euo pipefail

RELEASE_DATE="$(date +%F)"
PROMOTE_STAMP="$(date +%Y%m%d%H%M%S)"
PROMOTE_BRANCH="promote-develop-to-release-${RELEASE_DATE}-${PROMOTE_STAMP}"
PROMOTE_WORKTREE="/tmp/simple-blog-${PROMOTE_BRANCH}"
PROMOTE_STATE="/tmp/simple-blog-release-promotion-${PROMOTE_STAMP}.env"

git worktree add -b "${PROMOTE_BRANCH}" "${PROMOTE_WORKTREE}" "${RELEASE_BEFORE_SHA}"
cd "${PROMOTE_WORKTREE}"
git read-tree --reset -u "${DEVELOP_SHA}"

git diff --quiet "${DEVELOP_SHA}" --
git diff --cached --quiet "${DEVELOP_SHA}" --
test "$(git write-tree)" = "$(git rev-parse "${DEVELOP_SHA}^{tree}")"

git commit -m "release: ${RELEASE_DATE}"
PROMOTE_SHA="$(git rev-parse HEAD)"
test "$(git rev-parse "${PROMOTE_SHA}^{tree}")" = "$(git rev-parse "${DEVELOP_SHA}^{tree}")"
git push -u origin "${PROMOTE_BRANCH}"

{
  printf 'PROMOTE_BRANCH=%q\n' "${PROMOTE_BRANCH}"
  printf 'PROMOTE_WORKTREE=%q\n' "${PROMOTE_WORKTREE}"
  printf 'PROMOTE_STATE=%q\n' "${PROMOTE_STATE}"
  printf 'PROMOTE_SHA=%q\n' "${PROMOTE_SHA}"
} >"${PROMOTE_STATE}"

PROMOTION_PR_URL="$(gh pr create \
  --repo OU9999/ou9999-dev \
  --base release \
  --head "${PROMOTE_BRANCH}" \
  --title "release: ${RELEASE_DATE}" \
  --body "${RELEASE_PR_BODY}")"
PROMOTION_PR_NUMBER="${PROMOTION_PR_URL##*/}"
PROMOTION_PR_SHA="$(gh pr view "${PROMOTION_PR_NUMBER}" \
  --repo OU9999/ou9999-dev \
  --json headRefOid \
  --jq .headRefOid)"
test "${PROMOTION_PR_SHA}" = "${PROMOTE_SHA}"
APPROVED_HEAD_SHA="${PROMOTE_SHA}"

printf 'PROMOTION_PR_NUMBER=%q\n' "${PROMOTION_PR_NUMBER}" >>"${PROMOTE_STATE}"
printf 'promotion_state=%s\n' "${PROMOTE_STATE}"
```

Promotion PR `headRefOid`와 `PROMOTE_SHA` 불일치 시 merge 금지.

## Check와 merge

```bash
set -euo pipefail

PR_HEAD_SHA="$(gh pr view "${PR_NUMBER}" \
  --repo OU9999/ou9999-dev \
  --json headRefOid \
  --jq .headRefOid)"
test "${PR_HEAD_SHA}" = "${APPROVED_HEAD_SHA}"
test "$(gh api repos/OU9999/ou9999-dev/git/ref/heads/release --jq .object.sha)" = "${RELEASE_BEFORE_SHA}"

gh pr checks "${PR_NUMBER}" \
  --repo OU9999/ou9999-dev \
  --watch \
  --fail-fast \
  --interval 10

test "$(gh api repos/OU9999/ou9999-dev/git/ref/heads/release --jq .object.sha)" = "${RELEASE_BEFORE_SHA}"
```

Direct PR merge:

```bash
gh pr merge "${PR_NUMBER}" \
  --repo OU9999/ou9999-dev \
  --squash \
  --match-head-commit "${PR_HEAD_SHA}"
```

Promotion PR merge:

```bash
gh pr merge "${PR_NUMBER}" \
  --repo OU9999/ou9999-dev \
  --squash \
  --delete-branch \
  --match-head-commit "${PR_HEAD_SHA}"
```

merge 후 tree 검증:

```bash
set -euo pipefail

RELEASE_SHA="$(gh api repos/OU9999/ou9999-dev/git/ref/heads/release --jq .object.sha)"
RELEASE_TREE="$(gh api "repos/OU9999/ou9999-dev/git/commits/${RELEASE_SHA}" --jq .tree.sha)"
EXPECTED_TREE="$(gh api "repos/OU9999/ou9999-dev/git/commits/${PR_HEAD_SHA}" --jq .tree.sha)"
test "${RELEASE_TREE}" = "${EXPECTED_TREE}"
```

Promotion worktree는 merge와 tree 검증 성공 후에만 정리.

```bash
cd "/Users/ou9999/Documents/My Project/simple-blog"
git worktree remove "${PROMOTE_WORKTREE}"
git branch -D "${PROMOTE_BRANCH}"
rm -f -- "${PROMOTE_STATE}"
```

## Production 검증

merge 후 검증 스크립트 실행:

```bash
bash .agents/skills/release-manager/scripts/verify-deployment.sh "${RELEASE_SHA}"
```

성공 조건:

- remote `release` HEAD와 입력 SHA 일치
- 같은 SHA의 push event `CI` run 성공과 `build` job 성공
- 같은 SHA의 push event `Vercel Production` run 성공과 `deploy` job 성공
- Vercel production `READY`
- production target과 `release` metadata
- `meta.githubCommitSha`와 release SHA 일치
- `ou9999-dev.com` alias 포함
- `/`, `/about`, `/feed.xml`, `/sitemap.xml` HTTP 200

workflow run 대기에는 반드시 `gh run watch --exit-status` 사용. run conclusion만으로 deploy 성공 판정 금지.

## Vercel 계약

- `.github/workflows/vercel-production.yml`의 `release` ref gate
- `VERCEL_DEPLOY_ENABLED=true` 명시 gate
- lockfile에 고정된 Vercel CLI 사용
- `vercel.json`의 Git Integration 자동 배포 비활성화
- GitHub secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
- `VERCEL_TOKEN` 출력 금지

## 실패 처리

- CI 또는 deploy 실패 → 해당 run log 확인 후 중단
- deploy job skip·누락 → 성공 처리 금지
- production SHA 불일치 → 이전 배포가 READY여도 실패
- `VERCEL_DEPLOY_ENABLED` 비활성 → 사용자 승인 후에만 `true` 설정과 동일 run 재실행
- token 오류 → 사용자에게 새 Vercel token 요청 후 출력 없이 secret 저장
- release history 혼동 → tree diff와 patch-equivalent 확인, force-push 금지
