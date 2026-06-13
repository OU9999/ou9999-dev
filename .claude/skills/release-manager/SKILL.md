---
description: "release 승격과 Vercel production 배포 검증"
allowed-tools: ["Bash", "Read", "Grep"]
---

# Release Manager

`OU9999/ou9999-dev` 블로그 저장소의 `develop -> release` 승격과 Vercel production 배포 검증 절차.

## 브랜치 모델

- 기본 통합 브랜치: `develop`
- Production 배포 브랜치: `release`
- legacy 브랜치: `main`
- 새 PR base로 `main` 사용 금지
- `release/*` 브랜치 생성 금지
- `release` 직접 커밋 금지

## Merge 정책

- 기능·관리 작업 PR → `develop` squash merge
- release 승격 PR → `release` squash merge
- merge commit 금지
- PR title 기반 commit history 유지
- repository merge 설정은 squash-only 상태 유지

## 사전 확인

```bash
git status --short --branch
git fetch origin --prune
git branch -r --no-color | rg 'origin/(develop|release|main|release/)'
gh api repos/OU9999/ou9999-dev --jq '{default_branch, allow_merge_commit, allow_squash_merge, allow_rebase_merge, squash_merge_commit_title, squash_merge_commit_message}'
```

기대 설정:

- `default_branch`: `develop`
- `allow_merge_commit`: `false`
- `allow_squash_merge`: `true`
- `allow_rebase_merge`: `false`
- `squash_merge_commit_title`: `PR_TITLE`
- `squash_merge_commit_message`: `BLANK`

## Release 범위 확인

Tree diff 우선. `release`와 `develop`은 동일 변경이 서로 다른 SHA로 존재할 수 있음.

```bash
git diff --stat origin/release origin/develop
git diff --name-status origin/release origin/develop
git cherry -v origin/release origin/develop
```

- `git diff origin/release origin/develop` empty → release 대상 없음
- `git cherry -v`의 `-` 항목 → patch-equivalent commit
- `git log origin/release..origin/develop` 단독 판단 금지

## Release 승격

사용자가 명시적으로 지시한 경우에만 PR 생성·재오픈·merge 진행.

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

필수 체크 대기:

```bash
gh pr checks <PR_NUMBER> --repo OU9999/ou9999-dev --watch --interval 10
```

체크 통과 후 squash merge:

```bash
gh pr merge <PR_NUMBER> --repo OU9999/ou9999-dev --squash --delete-branch
```

`develop` head branch 삭제를 GitHub가 거부하면 `--delete-branch` 없이 재실행.

## 배포 검증

```bash
gh run list \
  --repo OU9999/ou9999-dev \
  --branch release \
  --limit 10 \
  --json databaseId,workflowName,status,conclusion,displayTitle,headSha,url
```

`CI`와 `Vercel Production` 최신 run 확인:

```bash
gh run watch <RUN_ID> --repo OU9999/ou9999-dev --interval 10
```

Vercel production target 확인:

```bash
npx --yes vercel@latest api /v9/projects/prj_uEUJ14NbLWmVLiqhtd6pDtjKeX4a \
  --scope ou9999s-projects \
  --raw |
  jq '{production: (.targets.production | {id,url,readyState,target,alias,meta:{githubCommitRef:.meta.githubCommitRef,githubCommitSha:.meta.githubCommitSha,githubCommitMessage:.meta.githubCommitMessage}})}'
```

기대 결과:

- `readyState`: `READY`
- `target`: `production`
- `meta.githubCommitRef`: `release`
- alias에 `ou9999-dev.com` 포함

## Vercel 계약

- `.github/workflows/vercel-production.yml`: `release` push에서만 production deploy
- `vercel.json`: Vercel Git Integration 자동 배포 비활성화
- GitHub secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
- GitHub variable: `VERCEL_DEPLOY_ENABLED=true`
- `VERCEL_TOKEN` 출력 금지

확인 명령:

```bash
gh secret list --repo OU9999/ou9999-dev
gh variable list --repo OU9999/ou9999-dev
```

## 실패 처리

`Vercel Production` skip:

```bash
gh variable set VERCEL_DEPLOY_ENABLED --body true --repo OU9999/ou9999-dev
gh run rerun <RUN_ID> --repo OU9999/ou9999-dev
```

`vercel pull` missing token:

- 사용자에게 새 Vercel classic personal access token 요청
- 토큰 출력 없이 secret 저장

```bash
gh secret set VERCEL_TOKEN --repo OU9999/ou9999-dev
```

히스토리 혼동:

- `git diff origin/release origin/develop` 우선 확인
- `git cherry -v origin/release origin/develop`로 patch-equivalent 확인
- 사용자 명시 승인 없는 `release` force-push 금지

