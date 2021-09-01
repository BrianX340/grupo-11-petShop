document.addEventListener('click',(event)=>{
    try {
        elementId = event.path[0].id
        elementClass = event.path[0].className
    }
    catch {
        elementId = event.target.id
        elementClass = event.path[0].className
    }
    

    switch (elementClass){
        case 'coverHeart':
            heartIdElement = event.target.attributes[1].value
                
            elementViewHeart = document.getElementById(heartIdElement+'Heart').style.display

            if (elementViewHeart == 'flex'){
                document.getElementById(heartIdElement+'Heart').style.display = 'none'
            } else {
                document.getElementById(heartIdElement+'Heart').style.display = 'flex'
            }

            break
    }
})