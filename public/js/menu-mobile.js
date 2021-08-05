
document.addEventListener('click', (event) => {
    try {
        elementId = event.path[0].id
    }
    catch {
        elementId = event.target.id
    }

    if (elementId == 'menu-button') {
        fadeInOutMenu(1)
    } else if (elementId == 'sidebar-close') {
        fadeInOutMenu(0)
        event.preventDefault()
    }
})

async function fadeInOutMenu(activo){
    document.getElementById('menu-mobile').style.display = 'flex'
    menu = document.getElementById('menu-container')
    if(activo){
        opacidadFondo = 0
        for (i=0 ; i<5 ; i++){
            opacidadFondo += 0.1
            document.getElementById('menu-mobile').style.backgroundColor = `rgba(0, 0, 0, ${opacidadFondo})`
            await sleepMenu(50);
        }
        menu.classList.add('menu-in');
        menu.style.display = 'flex'
        await sleepMenu(2000);
        menu.classList.remove('menu-in');
    } else {
        menu.classList.add('menu-out');
        opacidadFondo = 0.5
        for (i=0 ; i<5 ; i++){
            opacidadFondo -= 0.1
            document.getElementById('menu-mobile').style.backgroundColor = `rgba(0, 0, 0, ${opacidadFondo})`
            await sleepMenu(50);
        }
        menu.style.display = 'none'
        document.getElementById('menu-mobile').style.display = 'none'
        menu.classList.remove('menu-out');
    }
}

async function sleepMenu(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}