# faces/ — 얼굴 데칼(명세 2판 §3-1 개정: 깜빡임 전용)

얼굴은 고르지 않는다. 주인공 얼굴은 모델 원래 얼굴 그대로이고, 데칼은 **깜빡임**만 덮는다.

| 파일 | 내용 |
|---|---|
| `default_m.png` · `default_f.png` | 원래 얼굴(눈 · 눈썹 · 입)을 평면 틀로 펼치고 피부를 뺀 것 — 빌드가 만든다(`npm run models:build` / `npm run faces:build`) |
| `default_m_blink.png` · `default_f_blink.png` | 감은 눈. 위 그림과 같은 틀 · 같은 화풍으로(1024, 투명 배경). 3~5초마다 0.12초 덮는다. 없으면 안 깜빡인다 |
| `_guide_m.png` · `_guide_f.png` | 그리는 틀(원래 얼굴을 펼친 그림) |
| `faces.json` | 게임이 요청할 수 있는 깜빡임 PNG 목록 — 빌드가 만든다 |

피격 · 기쁨은 표정 대신 모션(움찔 · 제자리 점프). 피부색 변경은 데칼에 적용되지 않는다.
PNG를 넣은 뒤: `npm run faces:build`.
