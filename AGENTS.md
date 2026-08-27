## 프로젝트 개요

- 개인 블로그 프론트엔드
- Next.js + React + pnpm 구성
- Production 배포는 Vercel에서 `release` 브랜치 기준으로 수행

## 상시 규칙

- 패키지 매니저는 `pnpm`만 사용
- 작업 진행·검증 → `blog-rules/work-rule/work-rule.md` 참조
- 코드 작성·수정 → `blog-rules/code-rule/code-rule.md` 참조
- 문서·스킬·규칙 작성 → `blog-rules/docs-rule/docs-rule.md` 참조
- Git
  - 일반 커밋 시 `commit` 스킬 사용
  - 일반 PR 생성 시 `pr` 스킬 사용
  - release 승격 커밋·PR·merge·배포 시 `release-manager` 스킬 사용
- 에이전트 원본
  - 프로젝트 규칙: `AGENTS.md`
  - 프로젝트 스킬: `.agents/skills/`
  - `CLAUDE.md`와 `.claude/skills`는 원본 대상 symlink로만 유지
