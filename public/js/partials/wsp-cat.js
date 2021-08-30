function viewCaterinaChat(active){
    if (active){
        document.getElementById('wsp-chat').style.display = 'none'
        document.getElementById('chatFloat').style.display = 'flex'
    } else {
        document.getElementById('wsp-chat').style.display = 'flex'
        document.getElementById('chatFloat').style.display = 'none'
    }
}



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

    switch (elementId){
        case 'catChat':
            console.log('asd')
            viewCaterinaChat(1)
            break
    }

})