const C="noor-v1";
const FILES=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png","./icon-maskable-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET")return;
 const u=new URL(e.request.url);
 if(u.hostname==="api.alquran.cloud")return;
 e.respondWith(caches.match(e.request).then(h=>h||fetch(e.request).then(r=>{
  if(r.ok&&(u.origin===location.origin||u.hostname.includes("gstatic")||u.hostname.includes("googleapis"))){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}
  return r}).catch(()=>caches.match("./index.html"))))});
