# Code Rule

코드 작성·수정 규칙. 기존 코드 스타일 우선, 새 규칙은 점진 적용.

## 선언·문법

- 가독성 위한 early return 우선
- 함수형 컴포넌트와 유틸은 기존 파일 스타일 유지
- 타입 정의는 주변 코드의 `type`·`interface` 사용 방식 우선
- App Router 라우트 파일은 Next.js 요구 형식 우선

## React·훅

- `useMemo`·`useCallback`은 실제 렌더링 비용이나 참조 안정성 필요 시에만 사용
- `useRef`는 DOM 접근·외부 인스턴스 보관 등 필요한 상황에만 사용
- `useEffect` 추가 시 서버/클라이언트 경계와 cleanup 필요성 확인

## 컴포넌트·JSX

- 불필요한 wrapper 지양
- 가능한 경우 시맨틱 HTML 태그 사용
- 반복 UI는 기존 컴포넌트·유틸 패턴 우선
- 단일 사용 코드에 성급한 추상화 금지

## 스타일링

- Tailwind className 우선
- 조건부 className 조합은 기존 `cn`·`clsx`·`tailwind-merge` 패턴 우선
- inline style은 동적 CSS 값처럼 불가피한 경우만 사용

## 단순함·설계

- 요청 범위를 푸는 최소 코드 우선
- 추측성 기능·옵션 추가 금지
- 불가능한 시나리오를 위한 과한 방어 코드 금지
- 우회 코드보다 구조 수정 우선
