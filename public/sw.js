//Intalación
self.addEventListener('install', event => {
    //Descargar assets
    //Crear cache
    console.log('Service Worker instalado');

    //Simular la instalación de un Service Worker
    setTimeout(() => {
        console.log('Terminando instalaciones');
    }, 1000);
    self.skipWaiting();
})

//Activación
self.addEventListener('activate', event => {
    console.log('Service Worker activado y listo para controlar la app');
})