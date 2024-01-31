//Intalación
self.addEventListener('install', event => {
    //Descargar assets
    //Crear cache
    console.log('Service Worker instalado');

    //Simular la instalación de un Service Worker
    const instalacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Terminando instalaciones :) ');
            self.skipWaiting();
            resolve();
        }, 1000);
    })
    event.waityUntil(instalacion)
})

//Activación
self.addEventListener('activate', event => {
    console.log('Service Worker activado y listo para controlar la app :)');
})