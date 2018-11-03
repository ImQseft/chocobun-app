var CACHE_NAME = "static-v017";
var urlsToCache = [".", "index.html"];
var expectedCaches = [CACHE_NAME];

self.addEventListener("install", function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

//Old working code

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetchAndCache(event.request);
    })
  );
});

function fetchAndCache(url) {
  return fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return caches.open(CACHE_NAME).then(function(cache) {
        cache.put(url, response.clone());
        return response;
      });
    })
    .catch(function(error) {
      console.log("Request failed:", error);
    });
}

//Trial code update

// self.addEventListener("fetch", event => {
//   const url = new URL(event.request.url);

//   if (url.origin == location.origin && url.pathname == "/") {
//     event.respondWith(caches.match(event.request));
//     return;
//   }

//   event.respondWith(
//     caches
//       .match(event.request)
//       .then(response => response || fetch(event.request))
//   );
// });

//End of trial code update

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!expectedCaches.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
