function getElementById(element){
    return document.getElementById(element)
}
window.addEventListener('load', () =>{
    let formLogin = getElementById('formLogin')
    let inputEmailLogin = getElementById('loginEmail')
    let inputPassworLogin = getElementById('')
    let errorFormLogin = getElementById('loginErrorform')
    let errorEmailLogin = getElementById('loginErrorEmail')
    let errorPasswordLogin = getElementById('')
    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/

    inputEmailLogin.addEventListener('blur', () => {
        switch (true) {
            case !inputEmailLogin.value.trim():
                errorEmailLogin.innerText = "Este campo es obligatorio";
                inputEmailLogin.style.boxShadow = '0 0 10px red'
                break;
            case !regExEmail.test(inputEmailLogin.value):
                errorEmailLogin.innerText = "Debes escribir un email valido";
                inputEmailLogin.style.boxShadow = '0 0 10px red'
                break;
            default:
                inputEmailLogin.style.boxShadow = '0 0 6px green'
                errorEmailLogin.innerText = "";
                break;
        }
    })
    inputEmailLogin.addEventListener('keypress', () => {
        switch (true) {
            case !inputEmailLogin.value.trim():
                errorEmailLogin.innerText = "Este campo es obligatorio";
                inputEmailLogin.style.boxShadow = '0 0 10px red'
                break;
            case !regExEmail.test(inputEmailLogin.value):
                errorEmailLogin.innerText = "Debes escribir un email valido";
                inputEmailLogin.style.boxShadow = '0 0 10px red'
                break;
            default:
                inputEmailLogin.style.boxShadow = '0 0 6px green'
                errorEmailLogin.innerText = "";
                break;
        }
    })
    inputEmailLogin.addEventListener('keydown', () => {
        switch (true) {
            case !inputEmailLogin.value.trim():
                errorEmailLogin.innerText = "Este campo es obligatorio";
                inputEmailLogin.style.boxShadow = '0 0 10px red'
                break;
            case !regExEmail.test(inputEmailLogin.value):
                errorEmailLogin.innerText = "Debes escribir un email valido";
                inputEmailLogin.style.boxShadow = '0 0 10px red'
                break;
            default:
                inputEmailLogin.style.boxShadow = '0 0 6px green'
                errorEmailLogin.innerText = "";
                break;
        }
    })

    formLogin.addEventListener('submit', (event) => {
        let error = false;
        event.preventDefault()
        let elementsForm = formLogin.elements
        
        for (let i = 0; i < 1 ; i++) {
            if(elementsForm[i].value == "" || elementsForm[i].style.boxShadow == '0 0 10px red'){
                elementsForm[i].style.boxShadow = '0 0 10px red'
                errorFormLogin.innerText = "Los campos señalados son obligatorios";
                error = true;
            }
        }
    
        if(!error){
            formLogin.submit()
        }
    
    })

})