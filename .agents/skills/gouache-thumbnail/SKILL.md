---
name: gouache-thumbnail
description: simple-blog 대표 썸네일과 MDX 본문 이미지를 imagegen으로 생성·교체할 때 사용. Blue Steel 팔레트, 이목구비 없는 인물 실루엣, 직접 재현을 피한 간접·추상 장면, 16:9 WebP/OpenGraph 변환과 검증 적용.
---

# Gouache Editorial Images

개인 블로그의 대표 썸네일과 본문 이미지를 한 가지 구아슈 에디토리얼 언어로 생성·교체.

## 핵심 원칙

- 실제 이미지 생성은 `$imagegen` 우선
- 이미지마다 `image_gen` 개별 호출
- 본문 문장의 삽화보다 독립적인 두 번째 의미 층 구성
- 구체적 사건 재현보다 감정·관계·거리·상황의 흔적 표현
- 인물보다 공간·사물·빛·그림자·여백 우선
- 모든 인물의 이목구비 표현 금지

## 시각적 거리

본문을 그대로 스토리보드로 옮기지 말고, 장면의 이전·사이·이후 또는 남겨진 흔적을 선택.

- 한 이미지에 본문의 구체적 단서 하나만 유지
- 나머지 의미는 여백, 거리, 반사, 그림자, 가려진 구도, 비어 있는 자리로 변환
- 인물의 행동·장소·결과가 동시에 보이는 1:1 재현 금지
- 인물 없이 전달 가능한 경우 빈 공간이나 사물만 사용
- 글을 읽지 않아도 사건 전체를 바로 설명하는 장면은 탈락
- 글을 읽은 뒤 감정이나 상황이 다시 떠오르는 장면은 허용

### 장면 번역 예시

| 본문 상황 | 금지: 직접 재현 | 허용: 간접 인용 |
| --- | --- | --- |
| 발표 | 발표자와 청중의 얼굴, 노트북을 한 화면에 재현 | 빈 투사광, 화면 가장자리의 노트북, 프레임 밖 인물의 머리 실루엣 |
| 발표 연습 | 인물이 녹음기를 켜고 말하는 모습 | 책상 위 녹음기와 닫힌 화면, 종이 위로 드리운 머리카락 그림자 |
| 평가받는 두려움 | 긴장한 표정과 바라보는 얼굴들 | 비어 있는 중앙과 그쪽으로 기울어진 의자 그림자 |
| 연결감 | 발표자와 청중의 눈맞춤 | 서로 겹치는 그림자, 같은 방향을 향한 두 개의 빈 의자 |

## 인물 표현

인물 사용이 불가피할 때 아래 순서로 선택.

1. 프레임 밖 인물의 흔적
2. 그림자 또는 반사
3. 뒷모습
4. 잘린 실루엣

얼굴 영역에 허용되는 표현:

- 턱선의 바깥 윤곽
- 머리 길이와 머리 스타일의 실루엣

금지:

- 눈, 눈썹, 코, 입, 귀
- 속눈썹, 광대, 피부 결, 표정
- 얼굴 내부의 명암으로 암시한 이목구비
- 정면·반측면 인물화
- 배경 인물이나 작은 군중의 이목구비

옆모습이 필요한 경우에도 코와 입의 돌출 형태를 그리지 않고 턱선과 머리 윤곽만 유지. 한 사람이라도 이목구비가 식별되면 결과물 폐기 후 재생성.

## 본문 이미지 구성

- 장문 한 편당 2~3장을 출발점으로 검토하되 수량을 목표로 삼지 않기
- 각 이미지에 서로 다른 역할 부여: 분위기, 전환, 잔상
- 같은 인물 행동과 같은 구도 반복 금지
- 인접 문장을 그대로 설명하는 위치보다 의미 단락이 끝난 뒤 배치
- 이미지 사이에 충분한 텍스트 호흡 확보
- 대체 텍스트는 화면에 실제로 보이는 내용만 기술

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

## 이미지 계약

### 대표 썸네일

- 생성 원본: 4K landscape, 16:9, `3840x2160`
- 표시 산출물: `public/imgs/header/<thumbnail>.webp`, `3840x2160` WebP
- OpenGraph: `public/imgs/openGraph/<thumbnail>.png`, `1200x630` PNG
- 홈 카드와 글 상세 화면: `aspect-[16/9]`, `object-cover`

### 본문 이미지

- 생성·변환 비율: 16:9
- 표시 산출물: `public/imgs/post/<slug>/<key>.webp`, `1600x900` WebP
- MDX 크기: `width="1600"`, `height="900"`

## 프롬프트

아래 고정 블록을 모든 대표·본문 이미지 프롬프트에 포함.

```text
Indirect gouache editorial image. Do not literally reenact a sentence or show the complete event. Translate the source into negative space, distance, reflected light, shadow, cropped objects, or the trace left before or after the event. Keep only one concrete situational clue.

If any person appears, show them only as an obscured back view, shadow, reflection, or cropped silhouette. Render no facial features anywhere, including background figures. In every facial area, allow only the outer jawline contour and hairstyle silhouette. No eyes, eyebrows, nose, mouth, ears, cheekbones, skin detail, expression, or internal facial shading. No front-facing or three-quarter portraits.

Matte opaque gouache paint on textured paper, visible brush strokes, dry-brush edges, layered pigment, hand-painted composition, not photorealistic, not a 3D render.

Use only the blog DESIGN.md Blue Steel highlight palette for highlight and accent light: #F8FBFB, #D4E5EC, #A2ADB3, #E5EEF1, #FFFFFF. Keep background and shadows in neutral graphite black only. Do not introduce saturated blue, teal, neon cyan, purple, yellow, gold, beige, cream, orange, brown, or unrelated brand colors.

No text, no letters, no code snippets, no UI screenshots, no logos, no watermark.
```

가변 블록:

```text
Source beat: <이미지가 놓일 문단의 감정·관계 변화>
Image role: <분위기 | 전환 | 잔상 중 하나>
Indirect translation: <사건 대신 보여 줄 공간·사물·빛·그림자>
Single situational clue: <본문에서 남길 구체 요소 하나>
Human framing: <인물 없음 | 그림자 | 반사 | 뒷모습 | 잘린 실루엣>
Avoided literal scene: <직접 재현하면 안 되는 장면>
Composition: wide 16:9, strong readable shape, restrained negative space.
Mood: quiet technical editorial, mineral wash blog aesthetic, restrained and cohesive.
```

## 작업 순서

1. 대상 글 전체와 `thumbnail` 키 확인
   - 같은 키를 공유하는 글 확인
   - 대표 이미지와 본문 이미지 교체 범위 확인
2. 이미지 계획 작성
   - `asset / source beat / role / indirect translation / single clue / human framing`
   - 대표 이미지와 본문 이미지 역할 중복 제거
3. 직접성 사전 감사
   - 사건의 인물·행동·장소를 동시에 재현한 계획 제거
   - 인물 없는 대안 우선 검토
4. `DESIGN.md`의 `bg-mineral-lettering`과 Blue Steel 기준 재확인
5. 이미지 계약 확인
6. `$imagegen`으로 이미지별 개별 생성
   - 프로젝트 산출물이므로 원본을 워크스페이스로 복사
   - 대표 원본 예시: `tmp/gouache-thumbnails/<thumbnail>-source.png`
   - 본문 원본 예시: `tmp/gouache-post/<slug>-<key>-source.png`
7. 생성물 감사
   - 이목구비 전면 부재
   - 턱선과 머리 스타일 외 얼굴 정보 부재
   - 직접 사건 재현 부재
   - 이미지별 역할 분리
   - 구아슈 질감과 Blue Steel 팔레트
   - 텍스트·로고·워터마크 부재
8. 산출물 변환
9. MDX 본문 이미지와 대체 텍스트 연결
10. `pnpm generate`로 blur placeholder 갱신
11. `pnpm lint`, `pnpm build`, Playwright 데스크톱·모바일 검증

## 변환

대표 썸네일:

```bash
node .agents/skills/gouache-thumbnail/scripts/convert-thumbnail.mjs \
  --input tmp/gouache-thumbnails/<thumbnail>-source.png \
  --key <thumbnail>
```

본문 이미지:

```bash
node .agents/skills/gouache-thumbnail/scripts/convert-post-image.mjs \
  --input tmp/gouache-post/<slug>-<key>-source.png \
  --slug <slug> \
  --key <key>
```

## 주의

- 기존 파일 덮어쓰기는 사용자가 교체를 명시한 경우에만 수행
- 이미지 생성 전에 직접성 감사 완료
- 생성 모델이 금지 조건을 일부 무시할 수 있으므로 육안 감사 필수
- 색상 추가보다 장면·형태·붓질로 글 주제 차별화
- 글 제목과 설명은 이미지가 아닌 HTML 텍스트가 담당
