'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b20bffebc6e66ae84cf6890a6b5387fd",
".git/config": "a516ab391bb7b39e9258ae3c7f8700c3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "005282fe40c765fa7755d936615b9d39",
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
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "71572355ece2b1a5193d5990ff708ec2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a13926d41acf089775c128f3dd659f9e",
".git/logs/refs/heads/main": "117d0baede4c4a2308220f524ead6088",
".git/logs/refs/remotes/origin/main": "655b404a6f19740b87da8b9abe4ff544",
".git/objects/01/7560921d90b3273e641509627b0931d3651d7e": "3ac91bf8fbfc3c1eec27bc9578b2576b",
".git/objects/05/a649abcf218d598b7f11359b7c7b7323f3d281": "3b9ba953da53ac4f868c75b01c8d2ab4",
".git/objects/0a/edcfd454594ec9ea9a73afbe387473704669c2": "9cddfaa17571a73f5bd8b082dd40ec59",
".git/objects/0c/9e959dff9ef7308c63ec384392c6bc57b14f47": "4ceb34a0b15644f056918068e3471ba1",
".git/objects/0f/8a45f205e2331e700fc3ff745684decf2816eb": "c324dd1c59a4dbcfccea6999a7e3aca2",
".git/objects/0f/9101e11651d92b7e863bb5acf6a14585bb4a92": "01a716f476b1cbb7562cc7d983084d39",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/1b93bec3b65714d9faacfcfbc4b53cece9ae28": "4655689208681e0f3b03c25ec0c422b4",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/3b728c19af929d691fac8f9fbee0491c8b032b": "ea05ee1d18be3602769e38cc5f064865",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/24/4c4a3c28c354c2ef36730653d8b090db1991e9": "2160e5acc4160411f62035de0618a559",
".git/objects/24/f7cce035e212bdb99e3f8dead0bf28eca01031": "5b9944aac779721fa8497435191331cd",
".git/objects/25/0d7973d1a8a9503105465b2c93c49924c9a37b": "8c8575b5ac2b00dd0e2d9f9b16ce22b6",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/0b34cc9d7538c7aec22f828f1b684334554ee4": "bbd2d70bd78eb9f65fd6f0d549fb2498",
".git/objects/2b/87dbce2981a2265080d2d2a1140168ed6442fa": "843d2be6f21213e872d05d330c2b5985",
".git/objects/2e/e9406227ee8930f1f64a061503a9d4449a79f0": "8628ade10ab85d51dd59bdb035ffc9a1",
".git/objects/32/5d92282bb16b34869bbf163d8e6ab4f75beece": "144434e316e7f4175b92b3ad2397ffaa",
".git/objects/3a/aad6ca551ad2b16d1be8d1f91424adf1a0ad9c": "28aad41132e883862bef722b37662b3a",
".git/objects/3f/bc2c952a8a1ee06710cd69ecb48cdebab12f1f": "6dc34c125add3288c68112f1a2a9dc76",
".git/objects/40/576ffaf0f5cd445e02485ea76e30ee7c82a73d": "364f9f4021ace26a310c2b68baa9de84",
".git/objects/42/1645e18f441f17c80e4d57eb296a40e1a4e2e1": "c7e95a189e9fcb845f6f8689a9218c8c",
".git/objects/43/ff8cd23a8a4dac08fcab223be2cbea660eb738": "0dd8a4d5c7ebf2418fdede39802e09a0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/55/53f0e8e71067b37bd2dd4a3e592b93ef9a8508": "7c24d246433320fbac35a39386dceb7d",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/62/290329a7fbcf8069236feea9504eeb6033e2b9": "9e4fcc8359e85d0ef45001074270431f",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/69/ca88ed1c65b8db8b236fe2bc5f373d34eb5fdd": "2a3fb336e873c9a2b1490fa9679c13b3",
".git/objects/6a/bffd6ce4df734299a7a675c7dc3bf955e0278c": "088e38c145ea671f58164946d7eec84c",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/77/7b6b1d10cf60bb46e3abce02608abb7ac889fb": "44da7d8a3e489cedfc901bc5f2cf1622",
".git/objects/7a/96d98efefd67c25c16d3d65ec7e78bf2a8ed32": "999d047c24bfab0bdc4b9252fd609bcd",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/12839fe35fd9277534e65fa3ffc1c8ddde66d9": "59c54bb3cb81b66418278772fd6a8f1d",
".git/objects/7f/1979db618057178686a62153c725252e2b6f16": "cd69def96e4ec1e124a04204563a5d3b",
".git/objects/83/e996faf22db20e614421b3254972b4c14db945": "6c7abc3d4e9397fda571cf9b3638ee89",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f923ac3efabcfde1920f65b1dfcc62a9683326": "0f5ee00c7b3c83bff28b538b822fd41a",
".git/objects/8d/3e66d2aabe47192942d6075970491d36aba0d7": "013e2a37caca0372e48f1a87c671dcb1",
".git/objects/91/175b84ee6110080417b6b553d80506619d7dd7": "01c5c0ded0959976b4cfdf2def5aca90",
".git/objects/91/d7928eb829471736af382524526a64bc0f761a": "09cae2b11a04c8f7f328c8501430143a",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/ec5703fcbbf35c71fc8479a4f9154a97063f7f": "f01e76ea1734c6e63c163466db18553f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9a/07624c4336e00a9417d4fa01b65d94f730df0e": "b9dc8d94a50e272c390d2a33607bb1b1",
".git/objects/9b/91c67b59f3853db1b8749403f2cc89e5af7aab": "a183b7e28d74bedfba1c10ff70f8a358",
".git/objects/9e/bc6fe9dda83d1b50222c3112a78cdcd49dceed": "89d6714a1df8086c4ca27109e103b886",
".git/objects/a3/386f18ea5bf0359d36a37c2a354e6b55c47b12": "bfa37c44146975d230409e842a9615be",
".git/objects/a4/5673831c4b9b856e7579b45dc2b82a5bf59089": "bd33f18c111b5d7a19c8e540715864cb",
".git/objects/ae/877bfa4e4543ddd7e063c4ed70cacf9284a194": "b8a9d711a31d1c0281c1adb5fcbb04c6",
".git/objects/b0/fc72f8a11b2123db1f4603080c72ae4cc10c50": "cefc374d33f993336e122ad01f7b6ebd",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/e9d85b0e9dcd5a64b053a1275f3214b1ee9e61": "4887e8af92c52297aabc811713646427",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ecabe857ff3a39f941c69f7226a93ee705a9f0": "cd08ea775e88c9e46e3c18bf6175f021",
".git/objects/ba/1177ad5b1d29ec5b94cd1f125060a14cf21fc8": "fd89214db85110bb794f63ba3633e639",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/7a94a2fec5a3ab441b18643c50cbc950175524": "6b181e71d6afa10563069a8c0caeb37d",
".git/objects/bd/fc2063bddca18f4dd486bfe9ed43c6dfa47e74": "d41d46db11758e22c0d1a7bbb016610d",
".git/objects/c2/68a92306e0d1debce8d72cdc0e495ad4127473": "687bc329c467b2ab1df517db90e8ad16",
".git/objects/c3/945ff600a41536c5eda7ff6133f93bc1f85b1d": "b4dd3a362ff2f91828bf37c65aebc470",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/7db0f8d8f77e1668f7759cad156c2a64320f62": "4062d5ad1533467c6911174fae426171",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/62a22e20160102e1049844116f96e7a859faf4": "6bf89304ef659bdbf0091d4498baf6a7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/54ec273e38c379449cbd4134d2dec8d486fdba": "0c9d0b561602b922fd8adeaf260f11c0",
".git/objects/d8/bb406e08e4cb0fdf6d0dbf8947f4db7dc90145": "dc477c78bd9369c9702102bb0ed2f13c",
".git/objects/db/349f9e09d24aed0f320e3f7723c5eff590d0a1": "0308ce56be130368701972a8f7672797",
".git/objects/db/689eaa365709806551efe99a87bfe108e6c324": "b88bbc7bf63b3c5cf6106e7a86cddfdb",
".git/objects/de/bbf0c82751ee855f2de6522f9e8d236574b756": "c1e8556fe8b0225ac45404b66249643d",
".git/objects/e0/172d37b325c6f4a2b0c605fd3a57f7a71f4bcf": "a73147a738f92d08b93bad1200469de9",
".git/objects/e1/d7607283898ef09ceff494d879f83f99a3278f": "6bbf30699fff2e6da6f946bb3153a4de",
".git/objects/e3/e152673504a8e1dc3e139b0faaf2f051abef3c": "7d27ed2fe97e8bdf7009efa4beee43bd",
".git/objects/e8/e7a32b383e3710d49b309e4a7c89ddeed12e7d": "eccfd34503a2e570ab6d4243f7aa3e0f",
".git/objects/e9/33882bcc51eb208d26e93c8fe4871f6dcdc8ec": "19e025fc316df4d645651013c9718270",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/a756ae9edbcde1a30e7a897ba14d2cb9987779": "46ffb950d92fd847a8d241bd4fb81523",
".git/objects/fb/8c3666f01f23c3fc1c29ebdd89aae50810fbf9": "b171b26dac27c627ebd7b06edc38c4b6",
".git/ORIG_HEAD": "b967cfd371e8533c63c43106ae0e58a1",
".git/refs/heads/main": "63ecfb38c52aa460a37de630ae2fc47b",
".git/refs/remotes/origin/main": "63ecfb38c52aa460a37de630ae2fc47b",
"assets/AssetManifest.bin": "84c72bb6ca529a20100cc6a4e848bcd1",
"assets/AssetManifest.bin.json": "5838347f3649182b887927ca42af64c4",
"assets/AssetManifest.json": "644bd49dcf19ad555e7394726ec37924",
"assets/assets/gif/motionGraphics.gif": "7ad4832d91cd6d009825ed1ad9d78683",
"assets/assets/gif/videoWorks.gif": "c75903e374bc4f7ed8de50d4ee05e3e6",
"assets/assets/images/artworks/artGrid.jpg": "0dedc6309109e3bc496b6e1f8f4987cd",
"assets/assets/images/elements/1.png": "6d8339c5cdaf6f367a16ebe0741acf05",
"assets/assets/images/other/resume.jpg": "1257678635b58a9ab110a79f26fe0577",
"assets/assets/images/posters/blGrid.jpg": "b422c9802251f9d513f8d92f73bb6bc2",
"assets/assets/images/posters/ntcGrid.jpg": "239079ee40fb8d2f8085dd9aa61eee06",
"assets/assets/images/posters/pcGrid.jpg": "7f8396b5f4e3f22e6301154765ba39ab",
"assets/assets/images/posters/rm1Grid.jpg": "135404a528c882396934149c9d9fdb85",
"assets/assets/images/posters/rm2Grid.jpg": "3a65f2b3a4a27cf046e6ef794dbfb891",
"assets/assets/images/posters/uaeGrid.jpg": "a6c021a2a2438e43ea7fafd993667e3a",
"assets/assets/images/profile/gokul.png": "4e57029140fb6399170ac9cc232440cc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ce7df52903317f3b6035991ccfecfdca",
"assets/NOTICES": "c7f8b2360e15ddf30345db7b52434bb6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "675727ab0f3f06bad1b16cb1e34f0425",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e9fc91883257b5c18f536a0339ffa811",
"icons/Icon-192.png": "b4c4f7a165737460aa02d6d51a7ef6a8",
"icons/Icon-512.png": "4393ef3b53e7e9cd92bc8aac949ccac8",
"icons/Icon-maskable-192.png": "b4c4f7a165737460aa02d6d51a7ef6a8",
"icons/Icon-maskable-512.png": "4393ef3b53e7e9cd92bc8aac949ccac8",
"index.html": "5c36aaacdbecfb1075e1a7f3f50ee5eb",
"/": "5c36aaacdbecfb1075e1a7f3f50ee5eb",
"main.dart.js": "6dd45af61cc0d08f86818b30901f5941",
"manifest.json": "0cab4337b64a26b048687784b8ec1167",
"README.md": "f606f516b37f073bff1ed2cd813f81b4",
"version.json": "6e03c0ef764acada743a5ae323bfec17"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
