
document.addEventListener('click', (event) => {
    funcion = false
    try {
        elementId = event.path[0].id
        elementClass = event.path[0].className
    }
    catch {
        elementId = event.target.id
        elementClass = event.path[0].className
    }

    if (elementId == 'carrito-close') {
        fadeInOutCarrito(0)
        funcion = 'true'
    } else if (elementId == 'carrito-button'){
        fadeInOutCarrito(1)
        //window.location.href = `${window.location.origin}`+'/carrito'
        funcion = 'true'
    }
})


async function fadeInOutCarrito(activo){
    carrito = document.getElementById('carrito')
    if (activo){
        carrito.style.display = 'flex'
        opacidad = 0.1
        carrito.classList.add('carrito-in');

        for (i=0 ; i<10 ; i++){
            carrito.style.opacity = opacidad
            opacidad += 0.1
            await sleep(50);
        }
        await sleep(2000);

    } else {
        carrito.classList.remove('carrito-in');
        opacidad = 1.0
        carrito.classList.add('carrito-out');

        for (i=0 ; i<10 ; i++){
            carrito.style.opacity = opacidad
            opacidad -= 0.1
            await sleep(50);
        }

        carrito.style.display = 'none'
        carrito.classList.remove('carrito-out');
    }
}
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}