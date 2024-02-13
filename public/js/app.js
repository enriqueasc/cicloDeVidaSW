if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('Service Worker registrados'))
        .catch(err => console.error('SW no registrado', err))
}