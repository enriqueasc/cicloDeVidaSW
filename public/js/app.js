if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')


}
fetch('https://fakestoreapi.com/products/1')
    .then(resp => resp.json())
    .then(console.log)