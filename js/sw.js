const CACHE_NAME = "version-1";
const urlsToCache = [
  'index.html',
  'css/main.css',
  'css/normalize.css',
  'js/main.js',
  'js/plugins.js',
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {

        if (response) {
          console.log(response);
          return response;
        }
        return fetch(event.request);
      }
      )
  );
});


self.addEventListener('activate', function (event) {
  var cacheWhitelist = []; 
  cacheWhitelist.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
