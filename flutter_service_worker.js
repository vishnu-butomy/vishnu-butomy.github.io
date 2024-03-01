'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "0c869aed90bccfe4b040fa30ddc21f74",
"index.html": "6e227f098d3f94cad5ee08920e7ae5b1",
"/": "6e227f098d3f94cad5ee08920e7ae5b1",
"main.dart.js": "7dd932cf84b524429efb9bf7e63239aa",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "67fdf50ec8a90b997f217d783c6a8168",
"icons/Icon-192.png": "81f73813fe1f757dfd6e6d267debd8cf",
"icons/Icon-maskable-192.png": "0e82f0c75c56518b5893771d61118325",
"icons/Icon-maskable-512.png": "0e82f0c75c56518b5893771d61118325",
"icons/Icon-512.png": "8003f39480c0aec36fb96e07a10aac5f",
"manifest.json": "24f000ff4e05e2741d51a7418ad33705",
"assets/AssetManifest.json": "9205188d7b9f800fbfad27f87704ad7f",
"assets/NOTICES": "e3d5c83d26aa2dbb1900486d5ef9227f",
"assets/FontManifest.json": "9e2ee5b945d3308fe1e33caf31161223",
"assets/AssetManifest.bin.json": "68deed5594498528b89f3e4f8cc3890f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "15f27b11d43df35842e7cde847dada51",
"assets/fonts/MaterialIcons-Regular.otf": "41dbb3945b6bde931429d181e52077ef",
"assets/assets/svg/Instagram.svg": "e1ddbc819a41cea10a8d8c47fb9dab91",
"assets/assets/svg/LinkedInsvg.svg": "ab812454cbb778f6be9fedf17186d7d4",
"assets/assets/svg/twittersvg.svg": "914080c6bb08c60a243c00be8c3a0cea",
"assets/assets/svg/loading.svg": "067590d9c4bd3b81148796edf0ae929e",
"assets/assets/svg/facebook.svg": "59a6db1dcc854fa45c508cd6332e8a83",
"assets/assets/svg/Facebooksvg.svg": "2675bb61ff1f1aa25e08f9f10bb6b3c7",
"assets/assets/svg/linkedin.svg": "536ece2a0a8ae0934f28d7369cac3d82",
"assets/assets/svg/twitter.svg": "fd7d549e7f8ae96e8a3bf9dbfe0353c3",
"assets/assets/svg/Icon1.svg": "a269c1edf5786a5d95642c2738ad861d",
"assets/assets/Rectangle%25204451.png": "e04c18837cb563bc5e2995cad242a130",
"assets/assets/leadsofty.png": "d2c6817e2bbf4723482ddcf5e50cb772",
"assets/assets/Rectangle%25204450.png": "ace6b5060d4038fbb8ad6747b428f020",
"assets/assets/Ellipse%2520329.png": "36caed0baa65519136b73935141f58b4",
"assets/assets/Rectangle%25204447.png": "3e1116cffa192dcd6eacf6bd97039809",
"assets/assets/connectwithleadsofti_social_media.png": "f12abf5380c449aca2c1c32e140142d1",
"assets/assets/Group.png": "55c0a0eb7f0213d09f905bc5a3cd7590",
"assets/assets/customer_support.png": "054f6313d6dc18337a347e2f7721219c",
"assets/assets/hero%2520Image%2520group.jpg": "8deda07734a5597759a389bfb9eff6de",
"assets/assets/social_mix.png": "d4731f53e68b3cf5e7177667470c7a8e",
"assets/assets/socialmediamix.png": "52a22063e7d238eb3cf71105b2258d98",
"assets/assets/bagrounf_shade.png": "7f04ed38edd8968c1f4bf195b8f8bdd5",
"assets/assets/iPhone%252015%2520Pro%2520Black%2520Titanium%2520Mockup%2520Portrait.png": "599743e5c746b32cadde58ea88bc042a",
"assets/assets/Frame%25201000002579.png": "949a79ba95256d099eda335df4f8bea0",
"assets/assets/team_management.png": "f0e96e900dc017950f824f5138dc8f9a",
"assets/assets/Frame%25201000002581.png": "21fad061673aeac50aa8d5955c5a0ab1",
"assets/assets/footer_imsge.png": "98d048d8eff2134812aab16a75bc0557",
"assets/assets/Frame%25201000002583.png": "a2a8c3ece10a8953ea9e68207054a783",
"assets/assets/Mobile%2520Image.png": "4a64fc546cc907314d10bd14f43b7975",
"assets/assets/backround_shade2.png": "166ea53a05e92aaeb52d8e45a58f496e",
"assets/assets/why_choose.png": "94351f7182b626901b2671c08fb926ca",
"assets/assets/Image-1.png": "edd9c3ff56b34a2db7a41be0e3e677d8",
"assets/assets/Rectangle%25203.png": "aaae41513b3cb0cf9e7431f4fdc0d5b7",
"assets/assets/Image-2.png": "d4045b2727f6d73a8db9b99cb566c965",
"assets/assets/lead_management.png": "f6222d5ea6fdb90e1df826c962ee35ec",
"assets/assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Gilroy-Medium.ttf": "c83281ae1ca703d0741a770ee7e7c091",
"assets/assets/fonts/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Gilroy-Regular.ttf": "31ff7c1a62a300dbbf9656b4ba14a0d5",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Gilroy-Black.ttf": "b8a3b3a91be25a0030d694a34e152217",
"assets/assets/fonts/Gilroy-ExtraBold.ttf": "b487bfc69e2a1cb0578fe2a910da8b2b",
"assets/assets/fonts/Gilroy-Light.ttf": "4b236c6cb4c59d66b80dde6f9c614ebd",
"assets/assets/fonts/Gilroy-Thin.ttf": "437d0d08a241c1d07517909f70c8ef11",
"assets/assets/fonts/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/assets/fonts/Gilroy-SemiBold.ttf": "a5cf732b15078843b237bd58f3ed44cd",
"assets/assets/fonts/Gilroy-Bold.ttf": "b381c2abd2972024a6a7e3d882208d9b",
"assets/assets/fonts/Inter-ExtraLight.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/assets/fonts/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/assets/fonts/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/security.png": "d161ad53075801e636b98c4c5a66e653",
"assets/assets/mockup%2520section.png": "c1c5b9ceeafcf2238bd1c2a0ca235445",
"assets/assets/Photo2.png": "0b1b47bcd8bd642947b6aee5f5c9d125",
"assets/assets/Rectangle%25204449.png": "7312f15688c0f45d4afe6595c32059fb",
"assets/assets/Rectangle%25204448.png": "45f5262a71065505ac848d6e941ec2ee",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
