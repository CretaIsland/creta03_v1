'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa5c77f850ec9486d8869b294e7788d3",
".git/config": "6972aa03a3eee09a83d3d910810406e0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "63f6b588c09f72cf5a64ff02229870ee",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "98e2a75fe41502cfeea351cbd65b8183",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a3f40547d873888f264560edfefca5d2",
".git/logs/refs/heads/main": "570d5c76f542808358ab188e91183838",
".git/logs/refs/remotes/origin/main": "1ac815ee6a01538e0f2256d924413b20",
".git/objects/06/82c922e2809f9ccff95276b9591a6027093024": "32e1a55490b45e1afdce5f12887b49b0",
".git/objects/08/e3d6306b74d911800f2680501bc3e4bd62bcbd": "0f23c0515304c7c94bc42366c2c6aa3a",
".git/objects/0a/1db34a66265763c358999730d31e62af095fee": "e1e6c2732565190e7e71a4ec6368d534",
".git/objects/0e/1757ed4b39a0f4ed6876eabaf0829fe7a9b7a3": "d4d4843a4896522d2caf766249877228",
".git/objects/11/d419e4c612bc2a67529ecd9ec8447bad04b699": "a09d634e2be2c925f63b75aa91a3a565",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/23/66f6c909315a36a5ac0cc698940b7f41f0b057": "2df76cce39e45eabb707de76d172f61c",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/6e8d1da3350ff392ad4b4b28cf2a93261b902e": "e07a869b91be7b78c28868a99107235d",
".git/objects/2c/7366c61cc6100aec3ad2274599d0981be909e6": "242cb249d06282031402da5c31c8e9e3",
".git/objects/31/d26bee2ee5dad40aca8b824908bb2ddb9d8cb4": "ce13fd8689a73fae85cf69bc4fcb69b7",
".git/objects/35/a2fea142a1af5ea45449693cfd46d33f1edbe2": "47850f1853a91143fa66e85df8418bc8",
".git/objects/37/d76c1f6c600d6fc01e6f2d7e1193adbfa38729": "e18663c3667acbf570a3e1b0841965be",
".git/objects/39/8fca27a9ee15ea9190c601fbc1ab7f110bf906": "baa94c3e026a5c4ad48e82425d07b007",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/25ec7191fdbb6ae0bac5318f7023909be60a96": "92e8cc049c00acfa03791295c1116ba4",
".git/objects/43/a70e6ba51db1da7cd4d371a2c1913c419669c3": "18ea2ac718673d1e47d1bc87072200df",
".git/objects/45/41eb50ed168f3939352910789848b9a910d922": "4992be87b700db85b47eb311dae8660d",
".git/objects/45/435fafdfa264f46b29f5299810e97d9abfd137": "fb974e34e4ada0cb56baeb2cd95b9854",
".git/objects/4a/a379a8d3f1988e196d653f3acbfdd4c868ec44": "b009c902a0f061c07ee13d12b7540f40",
".git/objects/4d/e97792a2f26ec08ca20840593ef477b8c7e288": "a3146dd8800cc3c9b19d119dbcf25cb6",
".git/objects/50/79418fb213ecd1e1ef92fdada895b452246d1f": "b1418531bc641a9bc4068971e61f6a3c",
".git/objects/54/70762e4d31c273bae6199fa31c65a45c128a9a": "72b07d90ea411983d00b821ba59d46cd",
".git/objects/59/04eb64b9a2a77060e78793c3f544702904487d": "494424baa06319edb3dad3d0f954d35f",
".git/objects/68/63396a1c065ca4d226632fc3822b0d66561e91": "88318dc27016beefb9d1f1dd57238651",
".git/objects/73/1b4020ee8f8078eec2410c12a402fd147e8524": "459afe4bf6572a9728f9d310677d91c3",
".git/objects/78/1ab2ba2a51f026185ec43fcfd7b7194896d510": "2287d24b208dfa148fbad1dc75269118",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/15541fa42a787fc8f3ae5409e511c594de0c28": "bf54092220a82662e4ba2ffdda16fae2",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7f/76584b004e3992c5552d4b5378afcefefe67e2": "ee1af01facaf9fe764f0d5d6e2e1e3f4",
".git/objects/84/1871b0efb95db606ef41226aba97b6c6635ec4": "10ca1d92fc643e5475641a0e9db3a07a",
".git/objects/86/92da6045f65b6ab7bd65cc51763e8cf51d2d7d": "e321571c35c5cf3c3b488e6bef96cf98",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/206a998fa2033f903a5f29c1601977ee99d47b": "3af8e158261d854946fd0ce0d7f827ca",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/20c5be1cd3d65123fcffaf064484566360ca51": "cf88e5ce89e88b14170a2604d8e946dd",
".git/objects/8e/9509d2f5ce65a49ab16999f2bf08c991805732": "0f6fd1a64faefa6221b40998de760edb",
".git/objects/95/e36e22e7d7a8b7b41db584ae26b432ac5d9672": "7487566fff3a7186625d1bb35bc83e0d",
".git/objects/96/1bdc818ec4456253fc11cca7cceb1ef86e7db9": "5a2e713ae0df52683b8e8233b284ea64",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/dde547255ca83699ce56bbef3f4e8f59b67b22": "bab4e0d1d0d56690ee07c3f2d982a434",
".git/objects/9c/b8f034b2b02ad1e4a27223d50ee9e56aa824f5": "3408228f75015270649c3ddc7106adef",
".git/objects/9e/be22c75ce31659f7e61c5907e4283a645171f7": "a37c87055ef6582e89fbd493c7443c56",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/1c1f224c8047baff55a7838306fba08a5568af": "75020f2b5daa204fa730a6b4a5382b12",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/0168654e0848a165438dda6740b46b49fddbf2": "d3036060f0566be03d66bcc2e925cebd",
".git/objects/b2/255468835bcc82cec31a592f5068f0061cb4cf": "298e823a9c1cd95cc0f4d7ba2f717f49",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ad1ed03a78713c13d94fd060eba1cd195c2f3d": "78daa4d07b1635efa9af88e570fdd2d6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/239e02189c9e6e9594e17698c38912cea9482d": "23781290449305d182d8a8ab73b56a2d",
".git/objects/c6/5cf46b2d7031fddf6f41ecec1cabbd0ab7c16d": "50307f3249fdeaac09f7103732454441",
".git/objects/cb/14db734dc82f6a1f7c34d472fc7446fc411f34": "8bc529b40a315e13e318580f15afb988",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/d4/02d4dc71e2f90924f06d2fcb50653b46ba2db5": "d9dbc2e5f80fd51f9e980e852600c797",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5d1eb27bf5a6458abac2dc12e848c31afa14a7": "d56f71d8fc28f26ad44da87a7d06b360",
".git/objects/d8/f42b22ec2d242ea146d2cda490cb192c114e47": "261f67aceb49cb4a0de02b9cdbb98996",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/775d6bfaad3a74610395abd14e2d0e330b7b0e": "2716c22b93150403322d48a210895df9",
".git/objects/e1/e2b45575bf2368688d49113ad14482b9bfc86d": "1d85e7038338be0d7d7676463423d051",
".git/objects/e4/8433724566cb904929ab5e8a18909e96604ad0": "6ea125bc1c0800170b9a3306b8b4367e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/c5ae993403f603fdf5b7b03ee1fcb0e72d97d9": "58997c1d4f9a45f4e5e30e64bab7a3f6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/8b6adde10086eeec27fdd07c741d952c86d11f": "e2d4aa849adfefd35bb5856e9265867c",
".git/objects/f7/6932e09692c5b60de6fba8d5a8e143c92a0ecd": "ec2dd714a054da17da6719649fb6f043",
".git/ORIG_HEAD": "ef86da377dce72005ffdeff4b997ea53",
".git/refs/heads/main": "2bf6f2c9406babb7ca7825b6ef1a7c25",
".git/refs/remotes/origin/main": "2bf6f2c9406babb7ca7825b6ef1a7c25",
"assets/AssetManifest.json": "2d984f3b00e927787ff6eb4fb41a2cc9",
"assets/assets/hycop_config.json": "a21e4ea9eb57bc1e5133d79635e834f8",
"assets/FontManifest.json": "2ef03f9ed692e3026935d394ba6de5b3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Pretendard/Pretendard-Black.otf": "a0dae583b0afcf6f07f170fe75c07642",
"assets/fonts/Pretendard/Pretendard-Bold.otf": "0c28c1f5ba0bcdfb02688cc77186c89d",
"assets/fonts/Pretendard/Pretendard-ExtraBold.otf": "44ba46bad2096044f462bc5ec1d28915",
"assets/fonts/Pretendard/Pretendard-ExtraLight.otf": "fc5c7c8047bbdaf09f8813d1fe3165ac",
"assets/fonts/Pretendard/Pretendard-Light.otf": "d39b4dd5b80382ea3b767f805de6ee92",
"assets/fonts/Pretendard/Pretendard-Medium.otf": "c40957def7f8380b7ab0aa28e594ab1d",
"assets/fonts/Pretendard/Pretendard-Regular.otf": "d1e2411be87335a335df2d824eacf3f0",
"assets/fonts/Pretendard/Pretendard-SemiBold.otf": "5c328494b7eabdb6942b76d5fb4d48e0",
"assets/fonts/Pretendard/Pretendard-Thin.otf": "1095c717674530e8a42bd9d4c4aede43",
"assets/NOTICES": "daba76c457f55b84cbf287d8aae963e6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/shaders/ink_sparkle.frag": "6acc4bb946ad86d438ab6e6920b2d14f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "15d306691d3475adf7069767873722c0",
"/": "15d306691d3475adf7069767873722c0",
"main.dart.js": "53a938bc8b12b9b10a3fc01b31e19c9c",
"manifest.json": "10c4c2a8c89b772ff830f2ce83fa630d",
"version.json": "534c1d2f16718b3387f30c1432052801"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
