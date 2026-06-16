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
git merge-tree origin/release origin/develop > /tmp/release-merge-tree.txt || cat /tmp/release-merge-tree.txt
```

- `git diff origin/release origin/develop` empty → release 대상 없음
- `git cherry -v`의 `-` 항목 → patch-equivalent commit
- `git log origin/release..origin/develop` 단독 판단 금지
- `git merge-tree` conflict → direct `develop -> release` PR 생성 금지
- `mergeStateStatus: DIRTY` → conflict 상태

## Release 승격

사용자가 명시적으로 지시한 경우에만 PR 생성·재오픈·merge 진행.

Release PR 본문은 `$pr` 스킬의 PR 본문 형식과 동일한 구조 사용.

- `## 요약`에 release 대상 변경 단위 요약
- `### ...` 섹션에 승격 범위와 검증 계획 작성
- `## Checks` 같은 별도 체크박스 섹션 사용 금지
- 함수명, 파일 경로 등 세부 코드 명칭 포함 금지

### Direct PR

`git merge-tree origin/release origin/develop`가 conflict 없이 통과할 때만 direct PR 생성.

```bash
gh pr create \
  --repo OU9999/ou9999-dev \
  --base release \
  --head develop \
  --title "release: YYYY-MM-DD" \
  --body "$(cat <<'BODY'
## 요약

- develop 변경사항을 release로 승격
- CI와 Vercel Production 배포 검증 진행

### Release 승격

- develop의 검증된 변경사항을 release 브랜치에 반영함

### 배포 검증

- merge 후 release 브랜치 CI와 Vercel Production 배포 상태를 확인함
BODY
)"
```

생성 후 `mergeStateStatus` 확인:

```bash
gh pr view <PR_NUMBER> --repo OU9999/ou9999-dev --json mergeStateStatus
```

`DIRTY`면 direct PR 유지 금지. 아래 promotion PR 생성 후 direct PR close.

### Promotion PR

`release`가 이전 squash 승격 커밋을 포함해 direct PR이 conflict 나는 경우 사용. 최종 tree는 `origin/develop`과 동일해야 함.

```bash
RELEASE_DATE="$(date +%F)"
PROMOTE_BRANCH="promote-develop-to-release-${RELEASE_DATE}"
PROMOTE_WORKTREE="/tmp/simple-blog-${PROMOTE_BRANCH}"

git worktree add -b "${PROMOTE_BRANCH}" "${PROMOTE_WORKTREE}" origin/release
cd "${PROMOTE_WORKTREE}"
git read-tree --reset -u origin/develop
git diff --quiet origin/develop --
git diff --cached --quiet origin/develop --
git commit -m "$(cat <<'EOF'
release: YYYY-MM-DD
EOF
)"
git push -u origin "${PROMOTE_BRANCH}"
```

Promotion PR 생성:

```bash
gh pr create \
  --repo OU9999/ou9999-dev \
  --base release \
  --head "${PROMOTE_BRANCH}" \
  --title "release: YYYY-MM-DD" \
  --body "$(cat <<'BODY'
## 요약

- develop 변경사항을 release로 승격
- CI와 Vercel Production 배포 검증 진행

### Release 승격

- develop의 검증된 변경사항을 release 브랜치에 반영함

### 배포 검증

- merge 후 release 브랜치 CI와 Vercel Production 배포 상태를 확인함
BODY
)"
```

기존 direct PR이 있으면 replacement PR 생성 후 close:

```bash
gh pr close <DIRECT_PR_NUMBER> \
  --repo OU9999/ou9999-dev \
  --comment "Superseded by #<PROMOTION_PR_NUMBER>."
```

금지:

- `release/*` 브랜치 생성
- `release` 직접 커밋
- `release` force-push
- conflict 해소 목적의 `develop` history 수정

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
