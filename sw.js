// Minimal service worker — enables "Add to Home Screen" install prompts.
// No offline caching logic is included; the page always loads fresh from the network.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {});
