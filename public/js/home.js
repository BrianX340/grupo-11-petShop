var indexValue = 1;
showImg(indexValue);
function btm_slide(e) { showImg(indexValue = e); }
function side_slide(e) { showImg(indexValue += e); }
function showImg(e) {
    var i;
    const img = document.querySelectorAll('.content .images img');
    const slider = document.querySelectorAll('.btm-slides span');
    if (e > img.length) { indexValue = 1 }
    if (e < 1) { indexValue = img.length }
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    for (i = 0; i < slider.length; i++) {
        slider[i].style.background = "rgba(255,255,255,0.1)";
    }
    //img[indexValue - 1].style.display = "block";
    //slider[indexValue - 1].style.background = "white";
}

window.onload = () => {
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
            //fadeInOutCarrito(0)
            funcion = 'true'
        } else if (elementId == 'carrito-button'){
            //fadeInOutCarrito(1)
            funcion = 'true'
            window.location.href = `${window.location.origin}`+'/carrito'
        }

        if (!funcion){
            if (elementClass.includes('box-card')){
                window.location.href = `${window.location.origin}`+'/productDetail'
            }
        }
        
    })
}



async function fadeInOutCarrito(activo){
    carrito = document.getElementById('carrito')
    carrito.style.opacity = 1
    if (activo){
        carrito.classList.add('carrito-in');
        carrito.style.display = 'flex'
        await sleep(2000);
        carrito.classList.remove('carrito-in');
    } else {
        carrito.classList.add('carrito-out');
        for (i=0 ; i<10 ; i++){
            carrito.style.opacity -= 0.1
            await sleep(50);
        }
        carrito.style.display = 'none'
        carrito.classList.remove('carrito-out');
    }
}
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}