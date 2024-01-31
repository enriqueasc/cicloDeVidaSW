//Intalación
self.addEventListener('install', event => {
    //Descargar assets
    //Crear cache
    console.log('Service Worker instalado');
    self.skipWaiting();

})

//Activación
self.addEventListener('activate', event => {
    console.log('Service Worker activado y listo para controlar la app');
})