function getElementById(element){
    return document.getElementById(element)
}
function addError(input){
    input.style.borderBottom = '1px solid red'
    input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")`
    input.style.backgroundRepeat = 'no-repeat'
    input.style.backgroundPosition = 'right calc(.375em + .1875rem) center'
    input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
}
function addValid(input){
    input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")` 
    input.style.backgroundRepeat = 'no-repeat' 
    input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
    input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
    input.style.borderBottom = '1px solid var(--mantis)'
}
function eventsAndValidation(input, expresion, label, message, message2, e){
    input.addEventListener('keypress', function validation(e){
        switch (true) {
            case !input.value.trim():
                label.innerText = message;
                input.style.borderBottom = '1px solid red'
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                break;
            case !expresion.test(input.value):
                label.innerText = message2;
                input.style.borderBottom = '1px solid red'
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                break;
            default:
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                input.style.borderBottom = '1px solid var(--mantis)'
                label.innerText = "";
                break;
        }
    });
	input.addEventListener('keydown', function validation(e){
        switch (true) {
            case !input.value.trim():
                label.innerText = message;
                input.style.borderBottom = '1px solid red'
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                break;
            case !expresion.test(input.value):
                label.innerText = message;
                input.style.borderBottom = '1px solid red'
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                break;
            default:
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                input.style.borderBottom = '1px solid var(--mantis)'
                label.innerText = "";
                break;
        }
    });
	input.addEventListener('blur', function validation(e){
        switch (true) {
            case !input.value.trim():
                label.innerText = message;
                input.style.borderBottom = '1px solid red'
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                break;
            case !expresion.test(input.value):
                label.innerText = message;
                input.style.borderBottom = '1px solid red'
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                break;
            default:
                input.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")` 
                input.style.backgroundRepeat = 'no-repeat' 
                input.style.backgroundPosition = 'right calc(.375em + .1875rem) center' 
                input.style.backgroundSize = 'calc(.75em + .375rem) calc(.75em + .375rem)'
                input.style.borderBottom = '1px solid var(--mantis)'
                label.innerText = "";
                break;
        }
    });
}

window.addEventListener('load', () =>{
    let formRegister = getElementById('formRegister')
    let inputNameRegister = getElementById('nameRegister')
    let inputLastNameRegister = getElementById('lastNameRegister')
    let inputEmailRegister = getElementById('inputEmailRegister')
    let inputPassworRegister = getElementById('passwordRegister')
    let inputPassCRegister = getElementById('passwordRe')
    let inputTermsRegister = getElementById('check')
    let errorFormRegister = getElementById('formErrorRegister')
    let errorNameRegister = getElementById('nameErrorRegister')
    let errorLastNameRegister = getElementById('lastNameErrorRegister')
    let errorEmailRegister = getElementById('emailErrorRegister')
    let errorPasswordRegister = getElementById('passwordErrorRegister')
    let errorPassCRegister = getElementById('passwordErrorRe')
    let errorTermsRegister = getElementById('errorTermsRegister')
    let regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/
    let regExName = /^[a-zA-ZÀ-ÿ\s]{2,15}$/
    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/

    eventsAndValidation(inputNameRegister, regExName, errorNameRegister, `El campo ${inputNameRegister.placeholder} es obligatorio`, 'No se admiten caracteres especiales ni numeros')
    eventsAndValidation(inputLastNameRegister, regExName, errorLastNameRegister,`El campo ${inputLastNameRegister.placeholder} es obligatorio`, 'No se admiten caracteres especiales ni numeros' )
    
    eventsAndValidation(inputEmailRegister, regExEmail, errorEmailRegister, `El campo ${inputEmailRegister.placeholder} es obligatorio`, "El correo electronico ingresado no es valido")
    eventsAndValidation(inputPassworRegister, regExPassword, errorPasswordRegister, `El campo ${inputPassworRegister.placeholder} es obligatorio`, "La contraseña debe tener: entre 8 o 15 caracteres, al menos una mayúscula, una minúscula y un número")

    inputPassCRegister.addEventListener('blur', () => {
        switch (true) {
            case !inputPassCRegister.value.trim():
                addError(inputPassCRegister)
                errorPassCRegister.innerText = `El campo ${inputPassCRegister.placeholder} es obligatorio`;
                
                break;
            case  inputPassCRegister.value != inputPassworRegister.value:
                errorPassCRegister.innerText = "Las Contraseñas no coinciden";
                addError(inputPassCRegister)
                break;
            default:
                addValid(inputPassCRegister)
                errorPassCRegister.innerText = "";
                break;
        }
    })

    inputTermsRegister.addEventListener('click', () => {
        inputTermsRegister.value = 'on'
        inputTermsRegister.style.border = '1px solid green'
        errorTermsRegister.innerText = ""
    })

    formRegister.addEventListener('submit', (event) => {
        let error = false;
        event.preventDefault()
        let elementsForm = formRegister.elements
        
        for (let i = 0; i < elementsForm.length-1; i++) {
            if(elementsForm[i].value == " " || elementsForm[i].style.borderBottom == '1px solid red'){
                
                addError(elementsForm[i])
                errorFormRegister.innerText = "Los campos señalados son obligatorios";
                error = true;
            }
        }
    
        if(!inputTermsRegister.checked){
            inputTermsRegister.style.border = '1px solid red'
            errorTermsRegister.innerText = "Debes aceptar los terminos y condiciones"
            error = true
        }
    
        if(!error){
            formRegister.submit()
        }
    
    })

})