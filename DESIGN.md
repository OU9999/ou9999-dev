# Design

블로그 디자인·스타일링 기준. 구현 시 `tailwind.config.js` 토큰 우선.

## Mode

- 다크모드 단일 운영
- 라이트모드 미지원
- 신규 UI 라이트 대응 className 작성 금지
- 기존 라이트 토큰과 테마 variant 제거
- 브라우저 기본 UI는 `color-scheme: dark` 기준

## Tokens

- 배경
  - `bg-dark-bg`
  - `bg-blur-black`
  - `bg-content-header-black`
- 색상
  - `text-gradient-start`
  - `text-gradient-end`
  - `from-gradient-start`
  - `to-gradient-end`
- 폰트
  - `font-sans`
  - `LINE Seed Sans KR`
- 레이아웃
  - `max-w-138`
  - `max-w-186`
  - `max-w-276`
  - `w-276`
- 보더
  - `border-1`

## Layout

- 모바일 우선
- 본문 최대폭 유지
- 불필요한 wrapper 지양
- 클릭 가능한 UI는 `button` 또는 `a` 우선
- 카드 내부 중첩 카드 지양

## Components

- 조건부 className 조합은 `cn` 사용
- hover·focus 상태는 Tailwind className으로 표현
- inline style 금지
- SVG 고정 색상은 SVG 속성 사용

## Motion

- React 애니메이션 패키지 `motion` 사용
- import 경로 `motion/react` 사용
- 진입, stagger, viewport reveal, overlay 전환에 Motion 사용
- 단순 hover·focus transition은 Tailwind 우선
- 기본 preset: `/Users/ou9999/Documents/My Project/simple-blog/src/constant/motion-preset.ts`
- `prefers-reduced-motion` 대응 시 `useReducedMotion` 우선

## Redesign Notes

- Figma 스타일 개편 TODO: `/Users/ou9999/Documents/My Project/simple-blog/.progress/260613/figma-blog-redesign-todo.md`
- Figma 레퍼런스 탐색 기록: `/Users/ou9999/Documents/My Project/simple-blog/.progress/260613/figma-blog-style.md`
- Figma 비주얼 아이덴티티: `/Users/ou9999/Documents/My Project/simple-blog/.progress/260613/figma-visual-identity.md`
- 구아슈 썸네일 시스템 확정 후 이 문서의 Tokens 보강
