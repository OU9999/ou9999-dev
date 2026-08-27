# PR 사전 검사 체크리스트

PR 제목과 본문 작성 전 체크리스트 작성.

## 검사 대상 확인

```bash
git diff --name-status --find-renames origin/develop...HEAD -- CLAUDE.md AGENTS.md .claude .agents
```

`origin/develop`을 사용할 수 없는 경우:

```bash
git diff --name-status --find-renames develop...HEAD -- CLAUDE.md AGENTS.md .claude .agents
```

## 필수 체크리스트

- [ ] `AGENTS.md`의 프로젝트 환경, 코드 작성 규칙, 커밋 & PR 규칙 준수 여부
- [ ] `CLAUDE.md` symlink 대상이 `AGENTS.md`인지 확인
- [ ] `.claude/skills` symlink 대상이 `../.agents/skills`인지 확인
- [ ] 스킬 원본이 `.agents/skills/<name>`에만 존재하는지 확인
- [ ] 추가·변경한 `SKILL.md`의 `name`과 디렉터리 이름 일치 여부

## 중단 조건

- `AGENTS.md` 규칙 위반 확인 시 PR 생성 전 수정
- symlink 손상 또는 `.claude/skills` 독립 원본 확인 시 PR 생성 전 수정
