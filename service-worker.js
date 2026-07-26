const CACHE='neuro-note-v35'; const FILES=['./','./index.html','./styles.css','./sensory-map.css','./app.js','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES))));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(cached=>cached || fetch(event.request))));
