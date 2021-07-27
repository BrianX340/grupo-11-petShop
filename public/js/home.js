window.onload = () => {
    document.addEventListener('click', (event)=>{
        elementId = event.path[0].id

        if (elementId == 'menu-button'){
            document.getElementById('menu-mobile').style.display = 'flex'
            document.getElementById('menu-container').style.display = 'flex'
        } else if (elementId == 'sidebar-close'){
            document.getElementById('menu-mobile').style.display = 'none'
            document.getElementById('menu-container').style.display = 'none'
            event.preventDefault()
        }
    })
}