const CACHE_NAME = 'pwa-cache-v3';
const URLs_TO_CACHE = [
  '机械笔/index.html'
];

// 安装Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker 安装中...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('缓存已打开');
        return cache.addAll(URLs_TO_CACHE);
      })
  );
});

// 激活Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker 激活中...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('删除旧缓存:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 拦截请求
self.addEventListener('fetch', event => {
  // 只缓存同源请求
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 返回缓存或网络请求
        return response || fetch(event.request);
      })
      .catch(() => {
        // 对于HTML文档，返回离线页面
        if (event.request.destination === 'document') {
          return caches.match('/offline.html');
        }
      })
  );
});

// 监听消息
self.addEventListener('message', event => {
  if (event.data.action === 'updateCache') {
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLs_TO_CACHE);
    });
  } else if (event.data.action === 'clearCache') {
    caches.delete(CACHE_NAME);
  }
});