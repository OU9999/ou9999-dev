# Git Rule

Git·PR·release 운영 규칙. 사용자 명시 지시 없는 PR 생성·재오픈·merge 금지.

## 브랜치

- 기본 통합 브랜치: `develop`
- Production 브랜치: `release`
- legacy 브랜치: `main`
- 일반 작업 브랜치 base: `develop`
- `release/*` 브랜치 생성 금지

## 커밋

- 커밋 생성 시 `commit` 스킬 사용
- 커밋 메시지 타입은 변경 성격 기준
- 에이전트·스킬·규칙 변경은 `agent` 타입 우선
- 서로 다른 목적의 변경은 커밋 분리

## PR

- PR 생성 시 `pr` 스킬 사용
- PR 생성·재오픈·merge는 사용자 명시 지시 전까지 금지
- 일반 작업 PR base는 `develop`
- merge 방식은 squash commit 1개 기준
- PR title이 히스토리에 남는다는 전제로 작성

## Release

- `develop -> release` 승격과 배포 검증은 `release-manager` 스킬 사용
- release 판단은 tree diff 우선
- release push 후 `CI`와 `Vercel Production` 확인
- Vercel production target의 `githubCommitRef=release` 확인

