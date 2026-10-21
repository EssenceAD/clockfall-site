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

## 커마 추가 데칼 (형 10-21 00:24, 맥스 — `scripts/build-face-extras.py`)
같은 평면 틀(1024², 투명). 기본 얼굴 위에 **수염 → 흉터 → 그을음** 순으로 canvas에 겹쳐 FaceDecal `map` 한 장으로(깜빡임 텍스처에도 같은 순서로).

| 파일 | 내용 |
|---|---|
| `beard_stubble_m_{색}.png` · `beard_full_m_{색}.png` | 남 수염 — 까칠 · 덥수룩. **없음 = 파일 없음**. `{색}` = 머리색과 같은 id(`orig` · `darkbrown` · `chestnut` · `blonde` · `platinum` · `red` · `blue`) → 머리색 바꾸면 같은 id 수염으로 갈아 끼움 |
| `scar_brow_m.png` · `scar_brow_f.png` | 흉터(화면 왼쪽 눈썹을 가로질러 이마 → 눈 바로 위). 공용이지만 틀이 남녀 달라 2장 |
| `grime_m.png` · `grime_f.png` | 먼지 · 그을음 얼룩(이마 · 양 볼 · 콧등 옆, 눈 · 입 피함) |

- 데칼은 얼굴 틀(눈썹 위 ~ 입 아래)까지만이라 덥수룩 수염도 턱 끝 아래로는 안 내려가.
- 미리보기 `docs/t4/face_extras.jpg`. 피부 틴트는 데칼에 안 들어가(기존 규칙) — 흉터 · 그을음은 톤이 진해도 보이게 피부보다 붉고 어둡게.
- `faces.json`(빌드 목록)에 넣으려면 `npm run faces:build` — 지금 목록은 깜빡임용이라 Code가 추가 데칼 목록을 따로 두거나 합쳐야 해.
