self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('edusetu-cache-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './design.css',
        './assets/logo.png',
        './assets/logo-192.png',
        './assets/logo-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
