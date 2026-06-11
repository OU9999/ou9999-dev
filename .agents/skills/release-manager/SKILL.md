---
name: release-manager
description: Manage this blog repository's develop-to-release branch workflow and Vercel production deployment. Use when Codex needs to promote changes from develop to release, create or merge release PRs, verify CI and Vercel Production runs, troubleshoot release deploy failures, or reason about the OU9999/ou9999-dev branch strategy.
---

# Release Manager

Use this skill for the `OU9999/ou9999-dev` blog repository release flow.

## Branch Model

- Treat `develop` as the default integration branch.
- Treat `release` as the production deployment branch.
- Treat `main` as legacy. Do not create new PRs against `main` unless the user explicitly asks.
- Do not create `release/*` branches. Git cannot keep a `release` branch and `release/...` branches at the same time.
- Do not commit directly to `release` unless the user explicitly asks for an emergency bypass.

## Merge Policy

- Feature or maintenance PRs into `develop`: use squash merge.
- Release promotion PRs into `release`: use squash merge as one production snapshot commit.
- Keep GitHub repository merge settings squash-only after any temporary setting changes.
- Avoid merge commits. The user specifically wants PR title based commits, not `Merge pull request ...`.
- Use PR titles that can stand alone in history, for example `release: 2026-06-11` or `chore: promote develop to release`.

## Preflight

Run these checks before changing release state:

```bash
git status --short --branch
git fetch origin --prune
git branch -r --no-color | rg 'origin/(develop|release|main|release/)'
gh api repos/OU9999/ou9999-dev --jq '{default_branch, allow_merge_commit, allow_squash_merge, allow_rebase_merge, squash_merge_commit_title, squash_merge_commit_message}'
```

Expected repository settings:

- `default_branch`: `develop`
- `allow_merge_commit`: `false`
- `allow_squash_merge`: `true`
- `allow_rebase_merge`: `false`
- `squash_merge_commit_title`: `PR_TITLE`
- `squash_merge_commit_message`: `BLANK`

## Determine What Will Release

Use tree diff as the source of truth. `release` and `develop` may contain equivalent changes under different commit SHAs because release is a snapshot branch.

```bash
git diff --stat origin/release origin/develop
git diff --name-status origin/release origin/develop
git cherry -v origin/release origin/develop
```

- If `git diff origin/release origin/develop` is empty, say there is nothing new to release.
- Use `git cherry -v` only as supporting context. Lines beginning with `-` are patch-equivalent to release even if commit SHAs differ.
- Do not rely only on `git log origin/release..origin/develop` for release scope.

## Promote Develop To Release

Prefer a PR from `develop` to `release`:

```bash
gh pr create \
  --repo OU9999/ou9999-dev \
  --base release \
  --head develop \
  --title "release: YYYY-MM-DD" \
  --body "$(cat <<'BODY'
## Summary

- Promote develop to release

## Checks

- [ ] CI passed
- [ ] Vercel Production deployment verified after merge
BODY
)"
```

Then wait for required checks:

```bash
gh pr checks <PR_NUMBER> --repo OU9999/ou9999-dev --watch --interval 10
```

Merge only after checks pass:

```bash
gh pr merge <PR_NUMBER> --repo OU9999/ou9999-dev --squash --delete-branch
```

For `develop` as the head branch, `--delete-branch` is safe in practice because GitHub will not delete the protected default branch. If GitHub refuses, rerun without `--delete-branch`.

## Verify Release Deployment

After the release PR is merged, verify both GitHub Actions and Vercel.

```bash
gh run list \
  --repo OU9999/ou9999-dev \
  --branch release \
  --limit 10 \
  --json databaseId,workflowName,status,conclusion,displayTitle,headSha,url
```

Watch the newest `CI` and `Vercel Production` runs for the release commit:

```bash
gh run watch <RUN_ID> --repo OU9999/ou9999-dev --interval 10
```

Confirm the Vercel production target points at `release`:

```bash
npx --yes vercel@latest api /v9/projects/prj_uEUJ14NbLWmVLiqhtd6pDtjKeX4a \
  --scope ou9999s-projects \
  --raw |
  jq '{production: (.targets.production | {id,url,readyState,target,alias,meta:{githubCommitRef:.meta.githubCommitRef,githubCommitSha:.meta.githubCommitSha,githubCommitMessage:.meta.githubCommitMessage}})}'
```

Expected Vercel result:

- `readyState`: `READY`
- `target`: `production`
- `meta.githubCommitRef`: `release`
- aliases include `ou9999-dev.com`

## Vercel Deployment Contract

- `.github/workflows/vercel-production.yml` deploys production only on `release` push.
- `vercel.json` disables Vercel Git Integration automatic deployment with `git.deploymentEnabled=false`.
- GitHub secrets required: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
- GitHub variable required: `VERCEL_DEPLOY_ENABLED=true`.
- Never print or echo `VERCEL_TOKEN`. Use `gh secret list` only to confirm names.

Useful checks:

```bash
gh secret list --repo OU9999/ou9999-dev
gh variable list --repo OU9999/ou9999-dev
```

## Failure Handling

If `Vercel Production` is skipped:

```bash
gh variable set VERCEL_DEPLOY_ENABLED --body true --repo OU9999/ou9999-dev
gh run rerun <RUN_ID> --repo OU9999/ou9999-dev
```

If `vercel pull` fails with a missing token:

- Ask the user for a new Vercel classic personal access token.
- Store it without printing it:

```bash
gh secret set VERCEL_TOKEN --repo OU9999/ou9999-dev
```

If release and develop histories become confusing:

- Compare trees first with `git diff origin/release origin/develop`.
- Use `git cherry -v origin/release origin/develop` to identify patch-equivalent commits.
- Do not force-push `release` to realign history unless the user explicitly approves production branch rewrite.
