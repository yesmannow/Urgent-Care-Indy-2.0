// Minimal service worker – prevents 404 when browser requests /sw.js
// Replace with next-pwa or full PWA config when ready
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => self.clients.claim());
