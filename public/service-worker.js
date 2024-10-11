
/**
 * The name of the cache used by this service worker.
 * @constant {string}
 */
const CACHE_NAME = "kinplus-cache-v2";

/**
 * An array of URLs to cache when the service worker is installed.
 * @constant {string[]}
 */
const urlsToCache = [
  "/",
  "/index.html",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/static/js/bundle.js",
  "/static/css/main.chunk.css",
  "/manifest.json",
  "/logo192.png",
  "/logo512.png",
];


/**
 * Install event listener for the service worker.
 * This function caches all URLs specified in urlsToCache.
 * @param {ExtendableEvent} event - The install event.
 */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return Promise.all(
        urlsToCache.map((url) => {
          return cache.add(url).catch((error) => {
            console.error("Failed to cache:", url, error);
            // Continue despite the error
          });
        })
      );
    })
  );
});


/**
 * Fetch event listener for the service worker.
 * This function intercepts fetch requests and returns cached responses if available.
 * @param {FetchEvent} event - The fetch event.
 */
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request).catch((error) => {
        console.error("Fetch failed:", error);
        // You might want to return a custom response here
      });
    })
  );
});


/**
 * Activate event listener for the service worker.
 * This function cleans up any old caches.
 * @param {ExtendableEvent} event - The activate event.
 */
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
