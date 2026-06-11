## 프로젝트 개요

- 개인 블로그 프론트엔드
- Next.js + React + npm 구성
- Production 배포는 Vercel에서 `release` 브랜치 기준으로 수행

## 상시 규칙

- 패키지 매니저는 `npm`만 사용
- Node.js 기준은 `24.x`
- 변경 전후 `git status --short --branch`로 작업 브랜치와 dirty 상태 확인
- 코드 변경 검증은 변경 범위에 맞춰 수행
  - 기본: `npm run lint`
  - 빌드/라우팅/콘텐츠 생성 영향: `npm run build`
  - UI/브라우저 동작 영향: Playwright 또는 실제 브라우저 확인
- `CLAUDE.md`를 새로 만들거나 수정할 경우 `AGENTS.md`와 규칙 drift 금지

## Git / PR

- 기본 통합 브랜치는 `develop`
- Production 브랜치는 `release`
- `main`은 legacy 브랜치로 취급하며 새 PR base로 사용하지 않음
- `release/*` 브랜치 생성 금지
  - Git ref 구조상 `release`와 `release/...`는 동시에 안정적으로 운용할 수 없음
- 일반 작업 PR은 `develop` 대상으로 생성
- PR merge는 squash commit 하나만 남기는 것을 기본으로 함
- 커밋 생성 시 `commit` 스킬 사용
- PR 생성 시 `pr` 스킬 사용
- `develop -> release` 승격과 배포 검증은 `release-manager` 스킬 사용

## 스킬 참조

- 커밋: `.agents/skills/commit/SKILL.md`
- PR 생성: `.agents/skills/pr/SKILL.md`
- release 승격/배포 검증: `.agents/skills/release-manager/SKILL.md`
- 작업 진행 기록: `.agents/skills/progress-log/SKILL.md`
- 브라우저 자동화/검증: `.agents/skills/playwright-cli/SKILL.md`

## Release 운영

- `develop`은 기능 통합 브랜치, `release`는 production snapshot 브랜치로 취급
- release 여부 판단은 commit SHA range보다 tree diff 우선
  - `git diff origin/release origin/develop`
  - `git cherry -v origin/release origin/develop`
- `release` push 후 확인 대상
  - GitHub Actions `CI`
  - GitHub Actions `Vercel Production`
  - Vercel production target의 `githubCommitRef=release`

