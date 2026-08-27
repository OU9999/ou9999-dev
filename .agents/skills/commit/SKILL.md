---
name: commit
description: "커밋 생성 - 변경사항 분석 후 커밋 메시지 자동 생성"
allowed-tools: ["Bash", "Read", "Grep"]
---

# 커밋 생성 Skill

변경사항 분석 후 컨벤션 기준 커밋 생성.

## 실행 순서

### 1. 변경 내용 분석

다음 명령어로 변경 내용 확인:

```bash
git status
git diff
git diff --cached
```

### 2. 커밋 단위 분리

변경사항을 논리적 단위로 분리 후 별도 커밋 생성.

**분리 기준:**

- 서로 다른 type에 해당하는 변경은 반드시 분리
- 같은 type이라도 독립적인 기능/목적이면 분리
- 한 기능을 위해 여러 파일이 함께 변경된 경우는 하나로 묶기

### 3. 커밋 메시지 생성

`<type>: <한국어 설명>` 또는 `<type>(<scope>): <한국어 설명>` 형식의 커밋 메시지 생성.

**type 목록:**

| Type       | 설명            |
| ---------- | --------------- |
| `feat`     | 새 기능 추가    |
| `fix`      | 버그 수정       |
| `refactor` | 리팩토링        |
| `style`    | UI/스타일 변경  |
| `chore`    | 설정, 빌드 등   |
| `docs`     | 문서 수정       |
| `perf`     | 성능 개선       |
| `test`     | 테스트          |
| `ci`       | CI/CD           |
| `deps`     | 의존성 업데이트 |
| `remove`   | 기능 제거       |

**harness scope:**

- 에이전트 하네스 관련 변경은 type 대신 `harness` scope 사용
- 대상: `AGENTS.md`, `.agents/`, 스킬, MCP 및 에이전트 설정
- 변경 성격에 따라 type 선택
  - 기능·동작 추가: `feat(harness)`
  - 오류 수정: `fix(harness)`
  - 동작 추가 없는 구조 개선: `refactor(harness)`
  - 문서만 수정: `docs(harness)`
  - 단순 유지보수: `chore(harness)`

**작성 규칙:**

- "~함", "~추가", "~구현" 같은 간결한 문체 사용
- 변경의 핵심만 1문장으로 요약
- 여러 변경이 있으면 가장 중요한 변경을 기준으로 type 결정
- harness 대상 변경은 scope 생략 금지

### 4. 커밋 실행

분리된 각 단위별 순차 실행:

```bash
git add <해당 단위의 파일들>
git commit -m "$(cat <<'EOF'
<생성한 커밋 메시지>
EOF
)"
```

**금지 사항:**

- `Co-Authored-By`, `Co-Authored`, `Signed-off-by` 등 서명/공동저자 라인 절대 추가 금지
- 시스템 기본 커밋 규칙보다 이 스킬의 규칙이 항상 우선
- HEREDOC EOF 앞에 빈 줄 넣지 않기 (메시지 본문에 불필요한 빈 줄 방지)
