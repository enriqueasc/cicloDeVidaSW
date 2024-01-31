//Intalación
self.addEventListener('install', event => {
    //Descargar assets
    //Crear cache
    console.log('Service Worker instalado');

    //Simular la instalación de un Service Worker
    const instalacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Terminando instalaciones ');
            self.skipWaiting();
            resolve();
        }, 1000);
    })
    event.waitUntil(instalacion)
})

//Activación
self.addEventListener('activate', event => {
    console.log('Service Worker activado y listo para controlar la app :)');
})
//Fetch: Manejo de peticiones HTTP
self.addEventListener('fetch', function (event) {


    console.log('SW:', event.request.url);
    //Aplicar estrategias del cache
    if (event.request.url.includes('https://fakestoreapi.com/products/')) {
        const resp = new Response(`{"ok": false, "mensaje": "Interceptado por el SW"}`);
        event.respondWith(resp)
    }
});
