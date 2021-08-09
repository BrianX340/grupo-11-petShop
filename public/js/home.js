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

        if (!funcion){
            if (elementClass.includes('product-name')){
                window.location.href = `${window.location.origin}`+'/productDetail'
            }
        }
        
    })
}



