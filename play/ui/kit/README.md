# Clockfall UI 키트 (§10-3)

UI 그림 부품, 아이콘, 수치를 한곳에 모은 폴더야. **조립(§10-4)은 이 폴더에 있는 것만 써.** 여기 없는 부품을 코드로 새로 그리는 건 금지야(바이블 금지 목록).

- 미리보기: `docs/ui/kit/kit_sheet.png`
- 키트만으로 조립해 본 검증 화면: `docs/ui/kit/check_hud.png`, `docs/ui/kit/check_inventory.png`
- 기계가 읽는 목록: `kit.json` (파일, 크기, 9-slice 여백, 용도)

## 1. 폴더와 이름 규칙
```
public/ui/kit/
  dev/   장치 = 노화 황동 + 무광 에나멜 (HUD·다이얼·게이지·제작대 패널·행동 버튼)
  bel/   소지품 = 가죽 + 캔버스 + 박음질 (가방·상자·주머니·루팅창). 황동은 버클·리벳 같은 철물로만
  map/   월드맵 = 지도 위 소품(압정 · 가죽 꼬리표 · 두루마리 · 위험도 톱니) — 10-20 추가
  icons/ 아이콘 35종 × 표현 4종 + 실루엣 SVG
  kit.json
```
- 부품 파일 이름: `{가족}_{부품}[_{변형}][_{상태}].png`
  - 가족: `dev` 장치, `bel` 소지품, `ico` 아이콘
  - 상태: 접미사 없음 = 기본, `_pressed` = 눌림, `_disabled` = 비활성, `_locked` = 잠김
  - 예: `dev_btn_wide_pressed.png`, `bel_leather_slot_oiled.png`
- 아이콘 파일 이름: `ico_{이름}_{표현}.png`
  - 표현: `enamel`, `eng_cream`, `eng_patina`, `eng_leather`, `sil`
  - 추가로 `ico_blast_enamel_red`, `ico_warn_enamel_red`, `ico_close_enamel_red`가 있어.
  - 실루엣 원본은 `ico_{이름}.svg`야.
- **해상도:** 모든 PNG는 마스터 = dp의 2배야. 화면에는 dp 크기로 그려(고밀도 화면에서 선명하게).

## 2. 9-slice 여백 (dp, 위/오른쪽/아래/왼쪽)
CSS 예: `border-style:solid; border-width:<sliceDp>px; border-image:url(dev/dev_panel_ink.png) <slice px> fill / <sliceDp>px stretch;`
- `slice`는 마스터 픽셀 값이고, `border-width`에는 `sliceDp`를 넣어.
- `—`는 9-slice가 아니라는 뜻이야. 이런 부품은 비율을 지켜서 통째로 키우고 줄여.

| 파일 | 기본 크기(dp) | 9-slice 여백(dp) | 용도 |
|---|---|---|---|
| `bel/bel_buckle.png` | 70×44 | — | 버클(소지품 철물) |
| `bel/bel_canvas_panel.png` | 320×146 | 23/23/23/23 | 소지품 화면 안감 띠(게이지·주머니) |
| `bel/bel_leather_oiled_panel.png` | 320×180 | 24/24/24/24 | 소지품 화면 양옆 그룹(장비·상세) — 반 단계 어둡고 차가움 |
| `bel/bel_leather_panel.png` | 320×159 | 24/24/24/24 | 소지품 화면 중심 그룹(가방) |
| `bel/bel_leather_slot.png` | 92×92 | — | 가죽 홈 슬롯 |
| `bel/bel_leather_slot_locked.png` | 92×92 | — | 잠긴 칸 (파생: bel_leather_slot) |
| `bel/bel_leather_slot_oiled.png` | 92×92 | — | 기름 가죽 위 홈 슬롯 (파생: bel_leather_slot) |
| `bel/bel_tab_off.png` | 208×62 | 26/26/0/26 | 가죽 탭 비선택 |
| `bel/bel_tab_on.png` | 184×62 | 26/26/0/26 | 가죽 탭 선택(아래 열림, 패널에 이어 붙임) |
| `dev/dev_badge_0.png` | 156×38 | 0/12/0/35 |  |
| `dev/dev_badge_1.png` | 156×38 | 0/12/0/35 |  |
| `dev/dev_badge_2.png` | 156×38 | 0/12/0/35 |  |
| `dev/dev_badge_3.png` | 156×38 | 0/12/0/35 |  |
| `dev/dev_badge_4.png` | 156×38 | 0/12/0/35 |  |
| `dev/dev_btn_half.png` | 164×74 | 20/20/20/20 | 위험 행동 버튼(먹) — 버리기·취소, 글자 주홍 |
| `dev/dev_btn_half_disabled.png` | 164×74 | 20/20/20/20 | 위험 행동 버튼(먹) — 버리기·취소, 글자 주홍 |
| `dev/dev_btn_half_pressed.png` | 164×74 | 20/20/20/20 | 위험 행동 버튼(먹) — 버리기·취소, 글자 주홍 |
| `dev/dev_btn_round.png` | 104×104 | — | 보조 원형 버튼 (M) |
| `dev/dev_btn_round_disabled.png` | 104×104 | — | 보조 원형 버튼 (M) |
| `dev/dev_btn_round_pressed.png` | 104×104 | — | 보조 원형 버튼 (M) |
| `dev/dev_btn_wide.png` | 270×74 | 20/20/20/20 | 주 행동 버튼(녹청) — 장착·확인 |
| `dev/dev_btn_wide_disabled.png` | 280×74 | 20/20/20/20 | 주 행동 버튼(녹청) — 장착·확인 |
| `dev/dev_btn_wide_pressed.png` | 270×74 | 20/20/20/20 | 주 행동 버튼(녹청) — 장착·확인 |
| `dev/dev_btn_alt.png` | 270×74 | 20/20/20/20 | 보조 행동 버튼(먹) — 새 캐릭터·설정, 글자 크림 (10-20 T1 추가) |
| `dev/dev_btn_alt_pressed.png` | 270×74 | 20/20/20/20 | 보조 행동 버튼(먹) 눌림 |
| `dev/dev_cell_ammo.png` | 56×16 | 0/6/0/6 | 탄약 칸 |
| `dev/dev_cell_off.png` | 60×16 | 0/6/0/6 | 빈 칸 |
| `dev/dev_cell_on.png` | 56×16 | 0/6/0/6 | 체력 칸 |
| `dev/dev_cell_red.png` | 56×16 | 0/6/0/6 | 적 체력 칸 (파생: dev_cell_on) |
| `dev/dev_dial_base.png` | 212×212 | — | 공격·이동 스틱 바탕 (L) |
| `dev/dev_enamel_groove.png` | 92×92 | — | 에나멜 홈 슬롯(제작대 등 장치 화면) |
| `dev/dev_enamel_groove_locked.png` | 92×92 | — | 잠긴 칸(장치) (파생: dev_enamel_groove) |
| `dev/dev_frame_brass.png` | 480×260 | 48/48/48/48 | 창 컨테이너 테두리(가운데 투명). 화면 최상위 컨테이너 전용 |
| `dev/dev_gear_ring_l.png` | 151×151 | — | 미니맵 톱니 링(톱니 허용 ②) |
| `dev/dev_gear_ring_s.png` | 121×121 | — | 스킬 쿨다운 다이얼 톱니 링(톱니 허용 ①) |
| `dev/dev_knob_ink.png` | 94×94 | — | 이동 스틱 손잡이 |
| `dev/dev_knob_patina.png` | 94×94 | — | 공격 스틱 손잡이 |
| `dev/dev_panel_cream.png` | 320×148 | 22/22/22/22 | 장치 화면 그룹 색면(밝음) |
| `dev/dev_panel_ink.png` | 320×148 | 22/22/22/22 | 장치 화면 그룹 색면(어두움) |
| `dev/dev_rivet.png` | 24×24 | — | 리벳(소지품 화면 철물·모서리 보강) |
| `map/map_pin_brass.png` | 108×128 | — | 월드맵 지역 핀(황동 압정, 머리 = 깨진 시계 O). 좌표 = 바늘 끝 |
| `map/map_pin_locked.png` | 120×128 | — | 월드맵 잠긴 핀(먹 에나멜 + 자물쇠 각인) |
| `map/map_pin_rift.png` | 58×128 | — | 월드맵 균열 핀(청록 유리 결정, 열렸을 때만 · 깜빡임) |
| `map/map_tag_leather.png` | 256×172 | 100/15/20/75 | 지역 꼬리표 · 가죽(노끈은 위 슬라이스에 포함). 지도에선 0.5배로 |
| `map/map_tag_body.png` | 256×172 | 145/15/20/75 | 꼬리표 몸통(노끈 뺌, 아일릿 구멍 먹 안쪽 그림자). **지도는 이걸 씀**. 0.5배 |
| `map/map_twine_back.png` | 100×150 | — | 노끈 뒤 조각(꼬리표 뒤 → 구멍 속). 꼬리표 왼쪽 위에 같은 좌표 |
| `map/map_twine_front.png` | 100×150 | — | 노끈 앞 조각(구멍 → 앞면 위) |
| `map/map_twine_knot.png` | 27×34 | — | 노끈 매듭(압정 바늘 앞) |
| `map/map_scroll.png` | 600×125 | 0/135/0/135 | 월드맵 제목 두루마리 띠(양끝 말림 고정). 지도에선 0.8배로 |
| `map/map_gear.png` | 64×64 | — | 위험도 톱니(1~3개, 꼬리표 이름 옆, 20dp) |

## 3. 크기 상수 (L/M/S) — `kit.js`의 `K.size`, `K.arc`와 같은 값

| 이름 | dp | 쓰는 곳 |
|---|---|---|
| L | 212 | 공격 스틱 바깥 지름. 이동 스틱도 L(두 스틱 한 세트) |
| knob | 94 | 스틱 손잡이 (L×0.44). 이동 = `dev_knob_ink`, 공격 = `dev_knob_patina` |
| M | 104 | 보조 버튼 3개 전부 동일 (`dev_btn_round`) |
| S | 44 | 머리 위·코너 아이콘 상자 |
| minimap | 130 | M×1.25 |
| toothOut | ×1.16 | 톱니 링은 몸통 지름이 크기값이고, 톱니가 그 바깥으로 16% 튀어나와 |
| arc | 반지름 = L/2 + M/2 + 20 = 178 | 보조 버튼 3개를 공격 스틱 중심에서 180° → 225° → 270°에 놓아. 순서는 스킬 다이얼(`dev_gear_ring_s` + `dev_btn_round`), 폭탄, 상호작용 |
| headBar | 176 × 12 (탄약 9) | 머리 위 체력·탄약 칸 (`dev_cell_*`) |
| 숫자 | S 34 · 타이머 40 · 데미지 42 · 머리 위 22 | Do Hyeon에 먹 외곽선 = 글자 크기의 10% |

크기는 **화면 짧은 변 기준 스케일**로 곱해서 써 (§10-4).

## 4. 팔레트 토큰
| 토큰 | 값 | 쓰는 곳 |
|---|---|---|
| 크림 / 먹 | `#F2E4C4` / `#2C2520` | 에나멜 면, 글자, 외곽선 |
| 시간 녹청 | `#3E8A80` | 넓은 강조 면: 내 체력, 주 버튼, 고정 링 |
| 밝은 청록 | `#2CC8B8` | 작은 면적 전용: 선택 1줄, 빛 점, 고정 외곽선 |
| 주홍 | `#E5512E` | 경고, 적 체력, 위험 행동 글자 |
| 노화 황동 | `#8C6A2E` / 밝은 `#B8924A` / 그늘 `#4E3816` / 녹 `#3E5A4F` | 금색이나 새것 같은 황동은 금지 |
| 가죽 / 기름 가죽 / 캔버스 / 실 | `#7A4E2D` / `#4E3727` / `#E8DCC0` / `#E9D9B0` | 소지품 |
| 등급 | `#9A948A` `#5CC85A` `#3E8EF0` `#A35BE6` `#FFC83D` | `dev_badge_0~4`의 색 띠에만 |

## 5. 규칙 요약 (원문은 `docs/ui/UI_BIBLE.md`)
- **재질은 물건 종류를 따라가.** 장치는 `dev_`, 소지품은 `bel_`. 소지품 화면 양옆 패널은 `bel_leather_oiled_panel`(반 단계 어둡고 살짝 차가움)이고, 가운데 가방은 `bel_leather_panel`이야.
- **테두리 위계**
  - ① 화면 최상위 컨테이너만 황동 테두리 (`dev_frame_brass`)
  - ② 그룹은 테두리 없이 색면 (`*_panel`)
  - ③ 슬롯은 홈 (`bel_leather_slot*`, `dev_enamel_groove*`). 선택 상태는 밝은 청록 1줄 3dp에 먹 2dp를 둘러.
- **황동 덩어리:** 한눈에 묶이는 무리로 세고, 한 화면에 최대 3개야.
- **톱니:** 딱 세 곳만 허용 — 스킬 다이얼(`dev_gear_ring_s`), 미니맵(`dev_gear_ring_l`), 월드맵 위험도(`map_gear`, 10-20 형 지시).
- **지도 소품(`map/`)은 황동 덩어리 셈에서 뺌** — 지도 위에 박힌 물건이라(근거 `docs/ui/t2/README.md` 6절). 대신 압정 폭 ≤ 64dp · 위험도 톱니 ≤ 20dp · 지역당 3개.
- **반짝임:** 반사광은 요소당 1줄, 폭은 요소의 8% 이하, 면의 70% 이상은 무광.
- **행동 버튼**
  - 주 행동 = `dev_btn_wide`, 녹청에 크림 글자
  - 위험 행동 = `dev_btn_half`, 먹 에나멜에 주홍 글자 (주홍 채움은 금지)
  - 높이는 같게, 폭은 2:1로. 글자는 탭 라벨과 같은 폰트·크기(Do Hyeon 28)야.

## 6. 아이콘 35종
`aim`, `ammo`, `back`, `bag`, `blast`, `bomb`, `build`, `check`, `clock`, `close`, `craft`, `exit`, `hand`, `heart`, `info`, `lock`, `map`, `menu`, `plus`, `repair`, `roll`, `shield`, `sword`, `trash`, `warn`, `walk`, `moto`, `snowcat`, `wood`, `stone`, `bone`, `iron`, `spring`, `crystal`, `ice`
- 탈것(10-20 N4 추가): 도보 = 발자국 둘(`walk`), 오토바이 = 옆모습(`moto`), 설상차 = 궤도 + 앞 스키(`snowcat`). 월드맵 이동 칸 · 잠긴 핀 · 이동 표시용
- 자원(10-20 월드맵 꼬리표 추가): 나무 `wood` · 돌 `stone` · 뼈 `bone` · 철 `iron`(주괴) · 태엽 `spring`(태엽 열쇠 — 톱니 자원도 이걸로, 아이콘 톱니 금지) · 째깍돌 `crystal` · 얼음 `ice`. 가죽 꼬리표 위엔 `_eng_leather`
- 제작 = 망치(`craft`), 수리·설정 = 렌치(`repair`), 건설 = 집 뼈대(`build`)

| 표현 | 쓰는 곳 |
|---|---|
| `enamel` | 판 없는 코너 아이콘 (메뉴·가방·시계 등). 크림 에나멜 조각에 디테일이 각인돼 있어 |
| `eng_cream` | 크림 돔·버튼 위 각인 |
| `eng_patina` | 녹청 손잡이·버튼 위 각인 |
| `eng_leather` | 가죽 위 각인 (잠긴 칸 등) |
| `*_enamel_red` | 경고성 아이콘 (스마트 타겟 폭발 등) |

- 각인 PNG는 파인 자국만 들어 있고 바깥은 투명해. 해당 바탕 부품 위에 겹쳐서 써.
- 아이콘은 128px 캔버스의 가운데 104px 영역에 그려져 있어. 그래서 화면 크기 s로 쓸 때 이미지는 s×128/104로 놓아.
- **각인 규칙**
  - 한 색 실루엣을 바탕보다 어둡게 파
  - 위쪽 안벽은 그림자, 아래쪽 안벽은 반사 1줄
  - 가장자리에 미세한 까짐
  - 선 굵기 11/100(가는 획 7), 정면 시점, 톱니 모양 금지
- 아이콘을 새로 추가할 때는 `docs/ui/kit/src/icons24.js`에 실루엣을 넣고, `export_icons.mjs`로 4가지 표현을 다시 뽑아.

## 7. 만든 방법 (다시 뽑을 때)
- **부품:** 하나씩 개별로 생성했어(시트에서 잘라낸 것 없음). ChatGPT 프로젝트 「Clockfall 그림」의 채팅 4개에서, 앵커 그림을 맥락에 둔 채로 생성했어. 프롬프트 원문은 `docs/ui/kit/src/prompts.json`에 있어.
- **후처리**
  - 투명 여백을 자르고 마스터 크기로 맞췄어.
  - 홈 2종은 위 안벽 그림자를 보강했어.
  - `dev_cell_on`은 녹청 톤으로 보정하고 광택을 줄였어.
  - 기름 가죽 2종은 채도 -12%, 청색 +5%로 살짝 차갑게 만들었어.
- **파생:** `dev_cell_red`, `*_slot_oiled/locked`, `dev_enamel_groove_locked`, `dev_badge_0~4`는 같은 그림의 색·밝기만 바꾼 거야.


## 세그먼트 · 토글 (10-20 T1)
- 세그먼트(품질 낮음/보통/높음) · 켜짐/꺼짐 토글은 새 부품 없이: 선택 칸 = `dev_btn_wide`(녹청), 안 고른 칸 = `dev_btn_alt`(먹). `dev_btn_wide_disabled`(회갈)는 "누를 수 없음" 뜻이라 안 고른 칸에 쓰지 않는다.
