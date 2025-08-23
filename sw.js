const CACHE_NAME = 'auto-cache-v1';
const CORE_ASSETS = [
    'index.html',
    'manifest.json',
    'project/css/font-awesome.min.css'
];

// 安装Service Worker - 缓存核心资源
self.addEventListener('install', event => {
    console.log('Service Worker 安装中...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('缓存核心资源');
                return cache.addAll(CORE_ASSETS);
            })
            .then(() => self.skipWaiting())
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
        }).then(() => self.clients.claim())
    );
});

// 动态缓存所有同源请求
self.addEventListener('fetch', event => {
    // 只处理同源请求
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }
    
    // 对于HTML文档，使用网络优先策略
    if (event.request.destination === 'document') {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    // 克隆响应，因为响应只能使用一次
                    const responseClone = response.clone();
                    
                    // 缓存获取到的响应
                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseClone);
                        });
                    
                    return response;
                })
                .catch(() => {
                    // 网络失败，尝试从缓存获取
                    return caches.match(event.request)
                        .then(cachedResponse => {
                            if (cachedResponse) {
                                return cachedResponse;
                            }
                            
                            // 如果没有缓存，返回一个简单的离线页面
                            return new Response(`
                                <!DOCTYPE html>
                                <html>
                                <head>
                                    <title>离线</title>
                                    <style>
                                        body { font-family: sans-serif; padding: 20px; text-align: center; }
                                        h1 { color: #666; }
                                    </style>
                                </head>
                                <body>
                                    <h1>您处于离线状态</h1>
                                    <p>请检查您的网络连接，然后重试。</p>
                                </body>
                                </html>
                            `, {
                                headers: { 'Content-Type': 'text/html' }
                            });
                        });
                })
        );
    } else {
        // 对于其他资源（CSS、JS、图片等），使用缓存优先策略
        event.respondWith(
            caches.match(event.request)
                .then(cachedResponse => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    
                    return fetch(event.request)
                        .then(response => {
                            // 检查响应是否有效
                            if (!response || response.status !== 200 || response.type !== 'basic') {
                                return response;
                            }
                            
                            // 克隆响应，因为响应只能使用一次
                            const responseClone = response.clone();
                            
                            // 缓存获取到的响应
                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, responseClone);
                                });
                            
                            return response;
                        });
                })
        );
    }
});

// 监听来自页面的消息
self.addEventListener('message', event => {
    if (event.data.action === 'updateCache') {
        // 更新缓存 - 重新获取并缓存所有已缓存的资源
        caches.open(CACHE_NAME).then(cache => {
            cache.keys().then(requests => {
                requests.forEach(request => {
                    fetch(request)
                        .then(response => {
                            if (response && response.status === 200) {
                                cache.put(request, response);
                            }
                        })
                        .catch(error => {
                            console.log('更新缓存失败:', error);
                        });
                });
            });
        });
    } else if (event.data.action === 'clearCache') {
        // 清除缓存
        caches.delete(CACHE_NAME);
    } else if (event.data.action === 'precacheKnownRoutes') {
        // 预缓存已知路径
        const routes = event.data.routes || [];
        caches.open(CACHE_NAME).then(cache => {
            routes.forEach(route => {
                fetch(route)
                    .then(response => {
                        if (response && response.status === 200) {
                            cache.put(route, response);
                        }
                    })
                    .catch(error => {
                        console.log('预缓存失败:', error);
                    });
            });
        });
    }
});