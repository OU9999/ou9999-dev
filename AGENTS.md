## 프로젝트 개요

- 개인 블로그 프론트엔드
- Next.js + React + npm 구성
- Production 배포는 Vercel에서 `release` 브랜치 기준으로 수행

## 상시 규칙

- 패키지 매니저는 `npm`만 사용
- Node.js 기준은 `24.x`
- 코드 변경 검증은 변경 범위에 맞춰 수행
  - 기본: `npm run lint`
  - 빌드/라우팅/콘텐츠 생성 영향: `npm run build`
  - UI/브라우저 동작 영향: Playwright 또는 실제 브라우저 확인
- `CLAUDE.md`를 새로 만들거나 수정할 경우 `AGENTS.md`와 규칙 drift 금지

## Git / PR

- 기본 통합 브랜치는 `develop`
- Production 브랜치는 `release`
- 커밋 생성 시 `commit` 스킬 사용
- PR 생성 시 `pr` 스킬 사용
