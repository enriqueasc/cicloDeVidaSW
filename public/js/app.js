if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('Service Worker registrado'))
        .catch(err => console.error('SW no registrado', err))
}