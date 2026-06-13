# Design

블로그 디자인·스타일링 기준. 구현 시 `tailwind.config.js` 토큰 우선.

## Mode

- Google Design 컬러 우선
- warm black 배경과 white 텍스트를 기본 표면으로 사용
- 링크·행동 색상은 Google blue 사용
- 강조 색상은 Google yellow를 제한적으로 사용
- 테마 모드 명칭보다 레퍼런스 색상 일치 우선
- 브라우저 기본 UI는 dark color-scheme 기준

## Tokens

- 배경
  - `bg-google-ink`
  - `bg-google-paper`
- 색상
  - `text-google-ink`
  - `text-google-paper`
  - `text-google-blue`
  - `text-google-muted`
  - `text-google-yellow`
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
