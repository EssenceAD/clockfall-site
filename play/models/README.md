# models/

Meshy에서 내보낸 GLB. 텍스처 포함(단일 파일). 폴리 약 10K(리메시 고정형 10K · 삼각형 면).

| 파일 | 내용 | 리그 | 애니메이션 클립 | 비고 |
|---|---|---|---|---|
| hero_m.glb | 주인공 남 v3 (10-21, 럼블 미니어처 로우폴리 · 머리 1 : 키 4.5 · 눈 1.5m · 키 1.69m · A포즈 · 약 12K 삼각형 · 2K 재굽기 텍스처 · 수염 텍스처 톤 · 시계 · 톱니 버클은 몸 메시에 포함) | 이족 · Mixamo 오토리그(mixamorig 65뼈, 손가락 엄지 · 검지) | 72클립(기존 19 + MX_ 53, 이름 동일) | 무기 없음 → `mixamorig:RightHand`. 재질 7슬롯 MI_skin · MI_leather · MI_cream · MI_olive · MI_brass(금속 + 주홍 포인트) · MI_dark · MI_hair(같은 텍스처, 이름만 다름 = 슬롯별 틴트 단위) |
| hero_f.glb | 주인공 여 v3 (10-21, 남과 같은 규격 · T포즈 바인드 · 스카프 포니테일 · 홀스터 몸에 포함) | 이족 · Blender 자동 가중치(scripts/rig-hero-autoweight.py — Mixamo 오토리그가 이 몸에서 계속 실패) · 뼈 이름 · 구조 = 남과 같음 | 72클립(남과 이름 동일). 팔 벌림 20°(mixamo-retarget ARM_YAW_BY, 총 클립 제외) | 남과 동일 7슬롯 |
| ~~hero_m_hair1~4 · hero_f_hair1~4~~ | 10-21 폐기(형 09:31: 헤어 분리 · 커마 전부 폐기, 남녀 각 1모델). 원본 · 압축본 · 마스크 삭제 | | | |
| marker_arrow.glb · marker_exclaim.glb | 목표 마커(맥스 10-21 · 형 11:51): 황동 톱니 테(지름 0.4m, 톱니 12) + 버밀리언 에나멜 화살표(아래 향함) / 느낌표 변형. 원점 = 화살표 끝 0.1m 아래(대상 머리 위 기준점), 정면 +Z(앞뒤 같은 모양) — y축 빌보드 권장. 재질 MI_brass · MI_enamel · MI_ink(단색). 약 750 삼각형 | 없음(노드) | `bob` 1.5초 루프(위아래 ±0.03m + 톱니 테만 30° 회전 = 톱니 1칸, 이음매 없음) | 로봇 머리 위 · 목표 오브젝트 위 공용. 만든 스크립트 scripts/build-target-marker.py |
| enemy_skeleton.glb | 해골 병사 (칼+방패) | 이족 · Mixamo 뼈 57개 | Walking, Running, Stumble_Walk(비틀 걷기 — 해골 기본 걷기 추천), Combat_Stance, Right_Hand_Sword_Slash, Double_Combo_Attack, Hit_Reaction, Dead | 무기·방패가 모델에 붙어 있음 |
| enemy_knight.glb | 기사 (양손검) | 이족 · Mixamo 뼈 52개 | Walking, Running, Combat_Stance, Charged_Slash, Triple_Combo_Attack, Hit_Reaction, Dead | 검이 모델에 붙어 있음 |
| enemy_crossbowman.glb | 석궁병 (석궁 내린 자세) | 이족 · Mixamo 뼈 51개 | Walking, Running, Combat_Stance, Archery_Shot(사격, 5초 — 발사 구간만), Standing_Reload, Hit_Reaction, Dead | 석궁이 모델에 붙어 있음 |
| enemy_triceratops.glb | 트리케라톱스 | 사족 · 뼈 27개 | `Armature\|Unreal Take\|baselayer` (걷기) | |
| enemy_mecha_trex.glb | 기계 티라노 (보스) | 스마트 리그 · 뼈 73개 (`Bone_*`) | 없음 | Meshy 스마트 리그는 아직 모션 라이브러리 미지원 → 코드에서 뼈를 직접 움직이거나 추후 모션 추가 |
| enemy_dragonfly.glb | 거대 잠자리 | 없음 | 없음 | 리깅 없이 본체 흔들기·날개 연출은 코드에서 |

### 무기 (리그 없음 · 정적 메시 · 약 10K 삼각형 · 압축 0.5~0.7MB)
바닥 드랍 · 가방 아이콘(45° 썸네일) · 손에 든 모습 모두 같은 모델. 원점·크기는 Meshy 기본값(바닥 기준)이라 코드에서 크기·회전·손잡이 위치를 맞춘다. 모델은 X축 방향으로 눕혀져 있다.

| 파일 | 무기 종류 | 모습 | 쥐는 법(명세 §4-5) |
|---|---|---|---|
| weapon_blunt.glb | 둔기 | 뼈 몽둥이 + 황동 톱니 띠 | 양손 |
| weapon_sword.glb | 칼 | 기사 장검, 톱니 코등이 · 시계 문자판 손잡이 끝 | 한손 |
| weapon_spear.glb | 창 | 사냥용 투창(돌·청동 촉, 나무 자루) | 양손 |
| weapon_pistol.glb | 권총 | 낡은 황동 리볼버 | 한손 |
| weapon_shotgun.glb | 샷건 | 2연발 샷건(나무 개머리판) | 양손 견착 |
| weapon_crossbow.glb | 소총/석궁 | 태엽 연발 석궁(소총형 개머리판) | 양손 견착 |
| weapon_laser.glb | 레이저 블래스터 | 크림·청록·주황 레트로 광선총 | 한손 |

### 방어구 (리그 없음 · 정적 메시 · 약 10K · 0.6~0.8MB)
바닥 드랍 · 가방 아이콘에 그대로 쓴다. 장착 외형은 1단계에서 머리 뼈(`mixamorig:Head`)에 투구만 붙이고, 몸·신발은 색 틴트/아이콘으로 대신하는 것을 권장(몸통 메시는 캐릭터 체형에 안 맞음).

| 파일 | 시대 | 부위 | 모습 |
|---|---|---|---|
| armor_jungle_head.glb | 공룡 정글 | 머리 | 랩터 두개골 투구 + 초록·노랑 깃털 |
| armor_jungle_body.glb | 공룡 정글 | 몸 | 가죽·뼈판·고사리 잎 조끼 |
| armor_jungle_feet.glb | 공룡 정글 | 신발 | 털가죽 장화 + 뼈 발톱 |
| armor_medieval_head.glb | 중세 | 머리 | 강철 투구 + 빨간 깃털 장식 |
| armor_medieval_body.glb | 중세 | 몸 | 판금 흉갑 + 청회색·빨강 겉옷 |
| armor_medieval_feet.glb | 중세 | 신발 | 강철 판금 장화 + 빨간 끈 |

### 환경 소품 (리그 없음 · 약 10K · 0.4~0.7MB, 바닥 기준 원점)
| 파일 | 소품 | 용도(명세 §4-5) |
|---|---|---|
| prop_bush.glb | 정글 덤불(노란 꽃) | 숨기 · 시야 가림 |
| prop_rock.glb | 이끼 바위 | 엄폐물 |
| prop_crate.glb | 톱니 도장 나무 상자 | 부서지는 상자(파밍) |
| prop_thornweed.glb | 가시풀 | 밟으면 피해 |
| prop_barrel_explosive.glb | 폭발통(주황·노랑 줄무늬, 심지) | 맞히면 폭발 |
| prop_fern.glb | 거대 고사리 | 공룡 정글 장식 |
| prop_fence.glb | 나무 울타리(한 칸) | 중세 경계 · 이어 붙이기 |
| prop_stonewall.glb | 돌벽(한 칸) | 중세 엄폐 · 이어 붙이기 |

### 쉘터 건물 (리그 없음 · 약 30K · 1.0~1.2MB, 바닥 기준 원점)
건물은 화면에서 크게 보이므로 아이템(10K)보다 높은 30K로 리메시했다. 레벨업 외형 변화는 1단계에서 크기·색 틴트·파티클로 처리.

| 파일 | 건물 | 모습 |
|---|---|---|
| building_core.glb | 시간 안정 코어 | 거대 톱니·시계탑 공방 |
| building_gate.glb | 시간 게이트(출격) | 톱니 테두리 포털 |
| building_storage.glb | 창고 | 톱니 차고 |
| building_workbench.glb | 작업대(무기·도구) | 대장간 + 모루 |
| building_tailor.glb | 재봉대(방어구·가방) | 재봉틀 공방 |
| building_garden.glb | 텃밭(음식) | 톱니 화분 정원 |
| building_water.glb | 정수기(물) | 물레방아 정수 장치 |
| building_generator.glb | 발전기 | 증기 발전 장치 |
| building_turret.glb | 방벽·포탑 | 모래주머니 + 톱니 포탑 |
| building_bunk.glb | 생존자 숙소 | 2층 통나무 숙소 |

### 재료 (리그 없음 · 약 10K · 0.3~0.6MB)
바닥 드랍 · 가방 아이콘 공용.

| 파일 | 재료 | 모습 |
|---|---|---|
| mat_gear.glb | 톱니 | 황금 톱니 묶음 |
| mat_glass.glb | 유리 조각 | 청록 크리스탈 |
| mat_bone.glb | 뼈 | 끈으로 묶은 뼈 |
| mat_iron.glb | 철 | 철 주괴 더미 |
| mat_cloth.glb | 천 | 끈으로 묶은 천 뭉치 |
| mat_amber.glb | 호박석 | 곤충이 갇힌 호박 |
| mat_saltpearl.glb | 소금 진주 | 조개 + 진주 |
| mat_timecrystal.glb | 시간 결정(희귀) | 황동 받침 위 청록 결정 |

### 소모품 (리그 없음 · 약 10K · 0.4~0.6MB)
| 파일 | 소모품 | 모습 |
|---|---|---|
| cons_bandage.glb | 붕대(체력 회복) | 초록 십자 붕대 롤 + 안전핀 |
| cons_canteen.glb | 물통(수분) | 청록 캔버스 수통 + 가죽 끈 |
| cons_lunchbox.glb | 도시락(배고픔) | 주황 보자기 도시락 |

### 쉘터 소품 · 나무 (리그 없음 · 약 10K · 0.5~0.7MB, 바닥 기준 원점) — docs/CLOCKFALL_SHELTER_LAYOUT_1019.md §5
| 파일 | 소품 | 쓰는 곳 |
|---|---|---|
| shelter_lamppost.glb | 톱니 장식 가로등(따뜻한 전구) | 큰길·광장 가장자리, 점광원 붙이기 |
| shelter_campfire.glb | 돌 테두리 모닥불 + 냄비 삼각대 | 코어 광장 (불꽃 파티클·점광원) |
| shelter_bench.glb | 통나무 벤치 + 주황 담요 | 모닥불 주변 |
| shelter_signpost.glb | 이정표(망치·새싹·침대 아이콘) | 광장 갈림길 |
| shelter_laundry.glb | 빨래줄 + 바구니 | 생활 구역 |
| shelter_planter.glb | 꽃 화분 상자 | 길가·건물 앞 |
| shelter_palisade.glb | 나무 방책 한 칸(이어 붙이기) | 쉘터 경계 |
| shelter_construction.glb | 공사 터(말뚝·줄·자재·팻말) | 빈 건물 슬롯 |
| shelter_woodpile.glb | 장작 더미 + 도끼 박힌 그루터기 | 생활 구역·모닥불 옆 |
| tree_oak.glb | 둥근 참나무 | 쉘터 바깥 숲 · 균열 임시 나무 교체 |
| shelter_mailbox.glb | 톱니 우체통(주황 깃발) | 광장·숙소 앞 |
| tree_pine.glb | 층층 소나무 | 쉘터 바깥 숲 · 중세 균열 |
| tree_jungle.glb | 과일 야자(덩굴) | 공룡 정글 균열 |

### 랜드마크 (리그 없음 · 약 9~10K · 0.7~0.8MB, 바닥 기준 원점) — docs/CLOCKFALL_TEST_FEEDBACK_1019.md §8
한 화면에 1개씩 들어오게 배치하는 길잡이 오브젝트. 새 공통 접두어(손그림·그림에 칠한 조명·광택 없음)로 처음 만든 에셋. 목표 높이(주인공 1.0 기준)는 제안값이며 스케일 라인업에서 확정.

| 파일 | 내용 | 목표 높이 |
|---|---|---|
| landmark_clocktower.glb | 쓰러진 시계탑 윗부분(깨진 시계판·멈춘 바늘, 이끼·덩굴) | 2.5~3.0 |
| landmark_gear.glb | 반쯤 묻힌 거대 황동 톱니 + 작은 톱니 | 3.0~3.5 |
| landmark_sign.glb | 녹슨 레트로퓨처 도로 간판(별 장식·깨진 전구, 글자 없음) | 2.5~3.0 |
| landmark_timegate.glb | 무너진 시간 게이트 아치(황동 고리·청록 시간 결정) | 3.0~3.5 |

공통: 원본 7~32MB → `npm run models:build`로 meshopt + webp 압축 — 텍스처 1024, 주인공(hero_m·hero_f)만 2048(생성 화면 얼굴). 파일당 5MB 이하(넘으면 텍스처 한 단계 낮춤).

뼈 이름은 Mixamo 표준(`mixamorig:Hips` …). 주인공 무기는 `mixamorig:RightHand`에 부착.

## 제작 규칙 (2026-10-19 확정)
- **몹**: 무기를 든 채로 3D 변환해도 된다(무기를 바꾸지 않으므로). 단 이족 리그는 무기를 늘어뜨리므로 **스마트 리그** 또는 무기에 뼈가 따로 잡히는지 미리보기로 확인한 뒤 내려받는다.
- **주인공**: 무기 교체 시스템 때문에 **반드시 빈손 A-포즈**로 3D 변환하고, 무기는 별도 모델로 손 뼈에 붙인다.
- 리깅 마커는 확정 직전에 위치를 다시 확인한다(사타구니·손목 마커가 엇나가기 쉬움). 리깅 자체는 크레딧이 들지 않는다.
- Meshy는 GLB 1개당 **최근 추가한 모션 20개까지만** 내보낸다. 모션은 20개 이내로 유지(걷기·달리기 포함).
- 모션을 추가한 직후 바로 내려받으면 일부 클립이 빠질 수 있다. 내려받은 뒤 클립 목록을 반드시 확인한다.
- 사족(트리케라톱스) 리그는 Meshy 프리셋이 걷기 1개뿐이다. 공격·피격·사망은 코드 연출로 처리.
- 주인공 비율(2026-10-19 확정): 2등신 땅딸보·유아 취향 금지. 20대 초반 성인, 약 3.5등신(브롤스타즈 느낌).
- 품질 기준(2026-10-19 형 확정: 용량보다 퀄리티): 주인공 30K 리메시 + 텍스처 2048, 몹·건물 텍스처 2048, 아이템·소품 1024. 얼굴은 명세 2판 §3-1 데칼 방식.

## 코드 연결(2026-10-19)
- 크기 · 방향 보정표: `src/three/catalog.ts`의 `FIT`(원본은 전부 위 +Y · 앞 +Z, 무기만 길이 X축 · 끝 -X). 새 모델을 넣으면 여기에 한 줄 추가.
- 아이콘: `npm run icons:build` → `public/icons/*.png`(45° 썸네일). `models:build`가 아이템 모델을 다시 만들면 자동.
- 지연 로딩: 쉘터(`?shelter`) = 주인공 + building_* / 균열 = 주인공 + enemy_* + prop_* + 드랍(weapon_* · armor_* · mat_* · cons_*).
- 점검 페이지(개발 서버): `tools/inspect.html?m=이름,이름`(원본 축), `tools/gear.html`(무기 · 투구 장착), `node tools/shot.mjs <url> <png>`.
- 재료 · 소모품 데이터 키 = 파일 이름(`mat_<키>`, `cons_<키>`). `tests/catalog.test.ts`가 맞는지 검사.

## 커마 헤어 · 머리색 · 피부색(2026-10-19 개정, 명세 2판 §3-1)
- (폐기 10-21) 헤어 변형 · 머리색 · 피부색 커마 없음. 주인공은 hero_m · hero_f 2개뿐, 얼굴은 텍스처에 그려져 있어 `models:build`가 얼굴 데칼 · 마스크를 붙이지 않는다(옛 v1 다시 빌드할 때만 `HERO_DECAL=1`). 원본 · 리그 · 재굽기 텍스처는 `assets_src/models/hero_v3/`.
- 클립 다시 붙이기: `HERO_DIR=assets_src/models HEROES=hero_m,hero_f node scripts/mixamo-retarget.mjs <클립 폴더 | 클립 든 glb>` (원본 클립 = hero_v3/hero_m.glb 안 72개).
