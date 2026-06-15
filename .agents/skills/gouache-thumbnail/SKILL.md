---
name: gouache-thumbnail
description: simple-blog 대표 썸네일을 imagegen으로 구아슈 아트 스타일로 생성하고, DESIGN.md의 Blue Steel 하이라이트 팔레트와 현재 16:9 이미지 계약에 맞춰 WebP/OpenGraph 산출물로 변환할 때 사용
---

# Gouache Thumbnail

개인 블로그 대표 썸네일을 구아슈 아트 스타일로 생성·교체하는 절차.

## 기준

- 실제 이미지 생성은 `$imagegen` 스킬 우선
- 한 썸네일당 `image_gen` 1회 이상 개별 호출
- 생성 원본: 4K landscape, 16:9, `3840x2160`
- 변환 흐름: 4K 원본 1개 생성 후 스크립트로 산출물 2개 파생
- 블로그 표시 산출물: `/Users/ou9999/Documents/My Project/simple-blog/public/imgs/header/<thumbnail>.webp`
- 블로그 표시 산출물 해상도: `3840x2160` WebP
- OpenGraph 전용 산출물: `/Users/ou9999/Documents/My Project/simple-blog/public/imgs/openGraph/<thumbnail>.png`
- OpenGraph 전용 산출물 해상도: `1200x630` PNG
- blur placeholder 갱신: `pnpm generate`

## 색상

`DESIGN.md`의 Blue Steel 하이라이트만 강조색으로 사용.

- `#F8FBFB`
- `#D4E5EC`
- `#A2ADB3`
- `#E5EEF1`
- `#FFFFFF`

허용:

- 배경·그림자용 neutral graphite black
- 종이 질감과 저채도 명암

금지:

- saturated blue
- teal / neon cyan
- purple
- yellow / gold
- beige / cream
- orange / brown
- 임의 브랜드 컬러

## 비율

- 홈 카드와 글 상세 대표 이미지는 `aspect-[16/9]`
- 홈 카드와 글 상세 대표 이미지는 `/imgs/header/<thumbnail>.webp` 사용
- 대표 이미지는 `object-cover`로 표시하며 4K WebP 원본을 사용
- OpenGraph만 현재 코드에서 `/imgs/openGraph/<thumbnail>.png` 1200x630 참조
- MDX 본문 이미지는 고정 썸네일 계약이 아니므로 요청 시 별도 처리

## 프롬프트

아래 고정 블록을 모든 썸네일 프롬프트에 포함.

```text
Gouache art blog thumbnail, 4K landscape, 16:9, 3840x2160. Matte opaque gouache paint on textured paper, visible brush strokes, dry-brush edges, layered pigment, hand-painted composition, not photorealistic, not a 3D render.

Use only the blog DESIGN.md Blue Steel highlight palette for highlight and accent light: #F8FBFB, #D4E5EC, #A2ADB3, #E5EEF1, #FFFFFF. Keep background and shadows in neutral graphite black only. Do not introduce saturated blue, teal, neon cyan, purple, yellow, gold, beige, cream, orange, brown, or unrelated brand colors.

No text, no letters, no code snippets, no UI screenshots, no logos, no watermark.
```

가변 블록:

```text
Subject: <글 제목과 설명에서 도출한 하나의 장면 또는 오브젝트>
Composition: wide 16:9 cover image, central subject with enough safe margin for object-cover cropping, strong readable silhouette, no tiny details that disappear at card size.
Mood: quiet technical editorial, mineral wash blog aesthetic, restrained and cohesive.
```

## 작업 순서

1. 대상 글의 `thumbnail` 키와 교체 범위 확인
   - 같은 키를 공유하는 글 확인
   - `next`처럼 여러 글이 공유하는 키는 글별 고유 키 생성 여부 확인
2. `DESIGN.md`에서 하이라이트 기준 재확인
   - `bg-mineral-lettering`
   - Blue Steel silver-blue 계열
3. 현재 이미지 계약 확인
   - 블로그 표시용 대표 이미지: 16:9, 4K WebP
   - OpenGraph 전용 이미지: 1200x630 PNG
4. `$imagegen` 스킬로 이미지 생성
   - built-in `image_gen` 기본 사용
   - 프로젝트 산출물이므로 최종 이미지를 워크스페이스로 이동
   - 예시 임시 위치: `tmp/gouache-thumbnails/<thumbnail>-source.png`
5. 생성물 검사
   - 구아슈 아트 질감
   - 16:9 구성
   - 4K급 해상도
   - Blue Steel 하이라이트 외 강조색 없음
   - 텍스트·로고·워터마크 없음
6. 변환 스크립트 실행

```bash
node .agents/skills/gouache-thumbnail/scripts/convert-thumbnail.mjs \
  --input tmp/gouache-thumbnails/<thumbnail>-source.png \
  --key <thumbnail>
```

7. placeholder 갱신

```bash
pnpm generate
```

8. 검증
   - `file public/imgs/header/<thumbnail>.webp`
   - `file public/imgs/openGraph/<thumbnail>.png`
   - `pnpm lint`
   - UI 표시 영향이 있으면 Playwright 스크린샷

## 변환 스크립트

`scripts/convert-thumbnail.mjs` 사용.

- 입력 이미지를 center cover crop
- 블로그 표시용 header WebP: 3840x2160
- OpenGraph 전용 PNG: 1200x630
- 파일명 키: lowercase kebab-case
- current code가 OpenGraph도 WebP를 참조하도록 변경된 경우에만 `--skip-og` 사용

## 주의

- 기존 파일 덮어쓰기는 사용자가 교체를 명시한 경우에만 수행
- 교체 전후 `thumbnail` 키 공유 여부를 먼저 보고
- 색상 추가보다 장면·형태·붓질로 글 주제 차별화
- 생성 이미지에 텍스트를 넣지 말고, 글 제목은 HTML 텍스트가 담당
