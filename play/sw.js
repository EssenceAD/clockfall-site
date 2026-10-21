/*
 * 클락폴 서비스워커(T2 D0+ PWA): 오프라인 실행.
 *  - 설치: precache.json의 core(페이지 · 코드 · 글꼴 · 아이콘 · UI)를 먼저 받아 둔다
 *  - 켜진 뒤 페이지가 'warm'을 보내면 나머지(모델 · 텍스처 · 소리)를 하나씩 천천히 받아 둔다 → 한 번 다 받으면 비행기 모드에서도 실행
 *  - 요청: 같은 출처 GET = 캐시 먼저(없으면 네트워크 → 캐시에 넣기), 페이지 이동 = 네트워크 먼저(안 되면 캐시의 index.html)
 * 빌드마다 precache.json의 version이 바뀌면 새 캐시로 갈아탄다(옛 캐시는 지움).
 */
const LIST = './precache.json';
let VERSION = 'v0';
const cacheName = () => `clockfall-${VERSION}`;

async function readList() {
  const r = await fetch(LIST, { cache: 'no-store' });
  const j = await r.json();
  VERSION = j.version;
  return j;
}

self.addEventListener('install', (e) => {
  e.waitUntil(
    (async () => {
      const j = await readList();
      const c = await caches.open(cacheName());
      // core는 하나씩(하나가 실패해도 나머지는 받는다)
      for (const f of j.core) {
        try {
          await c.add(f);
        } catch {
          /* 무시 */
        }
      }
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    (async () => {
      const j = await readList().catch(() => null);
      const keep = j ? `clockfall-${j.version}` : cacheName();
      for (const k of await caches.keys()) if (k.startsWith('clockfall-') && k !== keep) await caches.delete(k);
      await self.clients.claim();
    })(),
  );
});

// 나머지 받기(페이지가 첫 화면을 그린 뒤 보낸다)
let warming = false;
self.addEventListener('message', (e) => {
  if (e.data !== 'warm' || warming) return;
  warming = true;
  e.waitUntil(
    (async () => {
      const j = await readList();
      const c = await caches.open(cacheName());
      for (const f of j.rest) {
        if (await c.match(f)) continue;
        try {
          await c.add(f);
        } catch {
          /* 무시 — 다음에 다시 */
        }
      }
      warming = false;
    })(),
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(
      (async () => {
        try {
          const res = await fetch(req);
          const c = await caches.open(cacheName());
          c.put('./index.html', res.clone());
          return res;
        } catch {
          return (await caches.match('./index.html', { ignoreSearch: true })) || (await caches.match('./', { ignoreSearch: true })) || Response.error();
        }
      })(),
    );
    return;
  }
  // 목록 파일(zone-manifest · models.json · 소리 목록 · precache)은 네트워크 먼저 — 배포 뒤 옛 목록이 남아 새 파일과 어긋나지 않게(형 10-21 치명 1)
  if (/\.json$/.test(new URL(req.url).pathname)) {
    e.respondWith(
      (async () => {
        try {
          const res = await fetch(req, { cache: 'no-store' });
          if (res.ok) (await caches.open(cacheName())).put(req, res.clone());
          return res;
        } catch {
          return (await caches.match(req, { ignoreSearch: true })) || Response.error();
        }
      })(),
    );
    return;
  }
  e.respondWith(
    (async () => {
      const hit = await caches.match(req, { ignoreSearch: true });
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok && res.type === 'basic') {
        const c = await caches.open(cacheName());
        c.put(req, res.clone());
      }
      return res;
    })(),
  );
});
