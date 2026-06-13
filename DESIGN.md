# Design

블로그 디자인·스타일링 기준. 구현 시 `tailwind.config.js` 토큰 우선.

## Tokens

- 배경
  - `bg-white-bg`
  - `bg-dark-bg`
  - `bg-blur-white`
  - `bg-blur-black`
  - `bg-content-header-white`
  - `bg-content-header-black`
- 색상
  - `text-gradient-start`
  - `text-gradient-end`
  - `from-gradient-start`
  - `to-gradient-end`
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

## Redesign Notes

- Figma 스타일 개편 TODO: `/Users/ou9999/Documents/My Project/simple-blog/.progress/260613/figma-blog-redesign-todo.md`
- Figma 레퍼런스 탐색 기록: `/Users/ou9999/Documents/My Project/simple-blog/.progress/260613/figma-blog-style.md`
- 구아슈 썸네일 시스템 확정 후 이 문서의 Tokens 보강
