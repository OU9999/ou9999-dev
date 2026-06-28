# Design

블로그 디자인·스타일링 기준. 구현 시 `tailwind.config.js` 토큰 우선.

## Mode

- Mineral Wash 컬러 우선
- 거의 검정에 가까운 graphite black 배경과 cool off-white 텍스트를 기본 표면으로 사용
- 링크·행동 색상은 Blue Steel 기반의 저채도 cool gray-blue 계열 사용
- 강조 색상은 Blue Steel silver-blue를 기본으로 사용하고, graphite/oxide 계열은 보조 질감으로만 제한
- 테마 모드 명칭보다 레퍼런스 색상 일치 우선
- 브라우저 기본 UI는 dark color-scheme 기준

## Tokens

- 배경
  - `bg-google-ink`
  - `bg-google-paper`
  - `bg-mineral-canvas`
  - `bg-mineral-frame`
- 색상
  - `text-google-ink`
  - `text-google-paper`
  - `text-google-blue`
  - `text-google-muted`
  - `text-google-yellow`
  - `text-mineral-teal`
  - `text-mineral-blue`
  - `text-mineral-bone`
- 텍스트 그라데이션
  - `bg-mineral-wash`
  - `bg-mineral-lettering`
  - `bg-nacre-moonlit`
  - `bg-clip-text`
  - `text-transparent`
  - Mineral Wash 표면 그라데이션은 거의 단색의 black/graphite 범위로 제한
  - 텍스트 그라데이션은 `bg-mineral-lettering`으로 분리하고 Blue Steel 기준의 silver-blue 명도 차만 사용
  - 붓질 질감은 fixed viewport 배경 레이어 또는 프레임에 낮은 opacity로 제한하고, 텍스트에는 선택된 하이라이트 hover stroke에만 사용
  - 자개 그라데이션은 흰 자개·연분홍·연보라·은청색 비중을 높이고 강한 청록·네온 블루는 제한
  - 자개 토큰은 `/test/jagae`와 실험 보존용이며 기본 블로그 UI에는 Mineral Wash 토큰 우선
- 폰트
  - `font-sans`
  - `Maru Buri`
  - `Cormorant Garamond`
  - 한글·영문 혼용 텍스트는 `Maru Buri` 우선
  - 순수 영문 브랜딩·보조 UI는 `Cormorant Garamond` 제한 사용
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
- 일반 hover·focus 상태는 Tailwind className으로 표현
- 붓칠처럼 그려지는 hover 인터랙션은 `motion/react`로 상태와 stroke 진행을 제어
- inline style 금지
- SVG 고정 색상은 SVG 속성 사용

## Motion

- React 애니메이션 패키지 `motion` 사용
- import 경로 `motion/react` 사용
- 진입, stagger, viewport reveal, overlay 전환에 Motion 사용
- 하이라이트 붓칠 hover는 SVG stroke를 `pathLength`로 그리는 방식 우선
- 하이라이트 붓칠 hover는 텍스트 내부를 덧칠하지 않고 텍스트 주변/뒤쪽 stroke 레이어로 표현
- 사진 reveal은 `clip-path: inset(0% 0% 100%)` → `inset(0%)` 마스크 방식 우선
- 글 상세 대표 이미지는 preload 후 reveal 적용
- 짧은 텍스트 인용문 reveal은 Figma pull quote처럼 데스크톱 `90px/0.95`, 최대 `1032px`, 중앙 정렬 사용
- 텍스트 인용문은 opening quote → 단어 → closing quote 순서로 opacity stagger 적용
- MDX 텍스트 reveal은 서버 wrapper에서 적용 가능 여부를 판정하고 client 컴포넌트에는 문자열만 전달
- 단순 hover·focus transition은 Tailwind 우선
- 기본 preset: `/Users/ou9999/Documents/My Project/simple-blog/src/constant/motion-preset.ts`
- `prefers-reduced-motion` 대응은 SSR hydration mismatch 방지를 위해 마크업 분기 없이 `motion-reduce:!` className 우선

## Redesign Notes

- Figma 스타일 개편 TODO: `/Users/ou9999/Documents/My Project/simple-blog/.progress/260613/figma-blog-redesign-todo.md`
- Figma 레퍼런스 탐색 기록: `/Users/ou9999/Documents/My Project/simple-blog/.progress/260613/figma-blog-style.md`
- Figma 비주얼 아이덴티티: `/Users/ou9999/Documents/My Project/simple-blog/.progress/260613/figma-visual-identity.md`
- `/test/color`의 Mineral Wash와 Blue Steel 하이라이트를 기본 블로그 컬러 방향으로 적용
- `/test/color`의 붓칠 hover는 하이라이트 인터랙션 후보로 보존하고, 전역 적용 전 해당 페이지에서 검증
- `/test/jagae`는 보존용 실험 페이지, `/test/gouache`는 fixed gouache layer 기준 확인 페이지로 유지
