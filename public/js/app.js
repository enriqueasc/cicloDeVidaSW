if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
     .then(reg => {
        Notification.requestPermission().then(result => {
            console.log("resultados: ", result);
            reg.showNotification('Hola desde mi notificaciónn!');
         });
     })
     .catch(error => {
        console.error('Error al registrar els service worker:', error);
     });
}
