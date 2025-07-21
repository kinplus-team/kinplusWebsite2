// Cache version identifiers
const STATIC_CACHE = "static-v3"; // Increment for updates
const DYNAMIC_CACHE = "dynamic-v1";
const MAX_DYNAMIC_CACHE_ITEMS = 50; // Limit for dynamic cache size

// Core assets for caching
const ASSETS = [
  "/index.html",
  "/favicon-32x32.png",
  "/favicon-16x16.png",
  "/apple-touch-icon.png",
  "/static/css/main.css",
  "/assets/kinplus-og-image.webp", 
  "/assets/kinplus-og-image.png", 
];

// skips cache for back/forward navigations
self.addEventListener("fetch", (event) => {
  if (
    event.request.cache === "only-if-cached" &&
    event.request.mode !== "same-origin"
  ) {
    return;
  }
  event.respondWith(fetch(event.request));
});


// Install event - pre-cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cache) => cache !== STATIC_CACHE && cache !== DYNAMIC_CACHE)
          .map((cache) => caches.delete(cache))
      );
    })
  );
});

// Fetch event - cache with network fallback
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Skip caching for requests that should always be fresh (like API requests)
  if (request.url.includes("/api/")) {
    return; // Skip API requests
  }

  // Cache resources with stale-while-revalidate strategy
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request).then((networkResponse) => {
        return caches.open(DYNAMIC_CACHE).then((cache) => {
          cache.put(request, networkResponse.clone());
          limitCacheSize(DYNAMIC_CACHE, MAX_DYNAMIC_CACHE_ITEMS);
          return networkResponse;
        });
      });

      // Return cached response immediately or fallback to network request
      return cachedResponse || fetchPromise;
    })
  );
});

// Function to limit dynamic cache size
const limitCacheSize = async (cacheName, maxItems) => {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length > maxItems) {
    await cache.delete(keys[0]); // Delete the oldest item
    return limitCacheSize(cacheName, maxItems); // Recheck the cache size
  }
};

// Listen for the 'message' event to handle updates from the main thread
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Logic to auto refresh every 3 days by updating static cache ---
const REFRESH_INTERVAL = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
const LAST_REFRESH_KEY = "last-refresh";

// Check if it's time to update the static cache
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open("meta-cache");
      const stored = await cache.match(LAST_REFRESH_KEY);
      const now = Date.now();

      let lastRefresh = 0;
      if (stored) {
        const text = await stored.text();
        lastRefresh = parseInt(text, 10) || 0;
      }

      if (!stored || now - lastRefresh > REFRESH_INTERVAL) {
        // Trigger static cache refresh
        const staticCache = await caches.open(STATIC_CACHE);
        await staticCache.addAll(ASSETS);
        await cache.put(LAST_REFRESH_KEY, new Response(now.toString()));
      }
    })()
  );
});
