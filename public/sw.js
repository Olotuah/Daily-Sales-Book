// Simple cache-first service worker
const CACHE_NAME = 'daily-sales-book-cache-v1';
const urlsToCache = ['/', '/index.html', '/manifest.json'];

// Install SW
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch with cache-first
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
