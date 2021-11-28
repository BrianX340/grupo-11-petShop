window.onload = () => {
    document.addEventListener('click', (event)=>{
        try {
            elementId = event.path[0].id
            elementClass = event.path[0].className
        }
        catch {
            elementId = event.target.id
            elementClass = event.path[0].className
        }

        if (elementId=='selectAvatarButton'){
            document.getElementById('avatarBox').style.display = 'flex'
            event.preventDefault()
        }

        if (elementClass == 'avatarClicked'){
            avatarName = elementId
            document.getElementById('avatarId').value = avatarName
            document.getElementById('avatarBox').style.display = 'none'
            console.log(avatarName)
        }
        
    })

}

