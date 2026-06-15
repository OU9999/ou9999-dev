# Code Rule

코드 작성·수정 규칙. Web Code Rules 우선.

## 파일·디렉터리

- 파일 이름 kebab-case
- React 컴포넌트 파일 kebab-case
- 디렉터리 이름 kebab-case
- 컴포넌트 디렉터리 `index.ts` 재export 금지
- 상대 경로 `../..`까지만 허용
- `../../..` 이상 path alias 사용

## TypeScript

- 객체 타입 `interface` 우선
- 함수 선언보다 `const` 화살표 함수 우선
- 함수·이벤트 핸들러 명시적 타입 우선
- inline export 금지
- 파일 끝 named export 사용
- 타입 export는 파일 끝 `export type` 사용
- App Router 예약 export는 Next.js 요구 형태 우선
- `metadata`, `generateMetadata`, `generateStaticParams`, `dynamic`, route handler는 직접 export 허용
- App Router default export는 선언 후 파일 끝 `export default` 사용

## React·훅

- early return 우선
- `useMemo` 사용 금지
- `useCallback` 사용 금지
- React 19.2+와 React Compiler 자동 메모이제이션 전제
- `useEffect` 추가 시 JSDoc 의도 설명 필수
- `useEffect`는 컴포넌트 하단, `return` 직전 배치
- JSX props inline 함수 전달 금지
- 이벤트 핸들러는 컴포넌트 내부 `const handleXxx = () => {}` 선언 후 전달
- 불필요한 wrapper 지양
- 가능한 경우 시맨틱 HTML 태그 사용

## 스타일링

- HTML 요소 스타일링 Tailwind className만 사용
- inline style 금지
- Tailwind className 조합·조건부 전달 시 `cn` 유틸 사용
- template literal 문자열 결합 금지
- 디자인·스타일링 작업 시 `DESIGN.md` 토큰·레이아웃·컴포넌트 규칙 준수

## 단순함·설계

- 요청 범위를 푸는 최소 코드 우선
- 추측성 기능·옵션 추가 금지
- 불가능한 시나리오를 위한 과한 방어 코드 금지
- 우회 코드보다 구조 수정 우선
