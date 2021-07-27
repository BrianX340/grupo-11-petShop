window.onload = () => {



    document.addEventListener('click', (event)=>{
        elementId = event.path[0].id

        if (elementId == 'buttonIniciar'){
            document.getElementById('formRegister').style.display = 'none'
            document.getElementById('formLogin').style.display = 'flex'
        } else if (elementId == 'buttonRegister'){
            document.getElementById('formRegister').style.display = 'flex'
            document.getElementById('formLogin').style.display = 'none'
        }
    })


}