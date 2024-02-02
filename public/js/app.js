if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
    // .then(reg => {
    //     setTimeout(() => {
    //         reg.sync.register('enviar-fotos')
    //         console.log('Se enviaron las fotos al server')
    //     }, 3000)
    // })
    // .catch(err => console.log(err))
}
