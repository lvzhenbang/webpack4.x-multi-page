/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://lvzhenbang.github.io/webpack4.x-multi-page/dist/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "https://lvzhenbang.github.io/webpack4.x-multi-page/dist/workbox-v3.6.3"});

importScripts(
  "https://lvzhenbang.github.io/webpack4.x-multi-page/dist/precache-manifest.fb873e4f57cdd68b05b4c7ef17ee551f.js"
);

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
