optionsActive = {
    1:0,
    2:0,
    3:0,
    4:0
}

saludo= "<div class='messageCard messageR'><div><span>Hola, soy Caterina, en que puedo ayudarte?</span></div></div>"

preguntas = {
    1:"<div class='messageCard frecuent'><div><span>En que horario realizan envios?</span></div><div id='option01' class='coverOption'></div></div>",
    2:"<div class='messageCard frecuent'><div><span>El envio es gratis?</span></div><div id='option02' class='coverOption'></div></div>",
    3:"<div class='messageCard frecuent'><div><span>Que medios de pago aceptan?</span></div><div id='option03' class='coverOption'></div></div>",
    4:"<div class='messageCard frecuent'><div><span>Puedo devolver un producto?</span></div><div id='option04' class='coverOption'></div></div>"
}

respuestas = {
    1:"<div class='messageCard messageR'><div><span>Entre las 14hs y las 18hs</span></div></div>",
    2:"<div class='messageCard messageR'><div><span>A partir de los $500 el envio es gratis!</span></div></div>",
    3:"<div class='messageCard messageR'><div><span>Aceptamos, VISA, MASTERCARD, AMEX y MercadoPago</span></div></div>",
    4:"<div class='messageCard messageR'><div><span>Siempre y cuando no este dañado, ten en cuenta que deberas llevarlo personalmente a nuestro local con DNI y factura.</span></div></div>"
}

function viewCaterinaChat(active) {
    if (active) {
        document.getElementById('wsp-chat').style.display = 'none'
        document.getElementById('chatContainer').style.display = 'flex'
    } else {
        document.getElementById('wsp-chat').style.display = 'flex'
        document.getElementById('chatContainer').style.display = 'none'
    }
}

function viewOption(value){
    if(!optionsActive[value]){
        optionsActive[value] = 1
        cadena = ''
        preguntasRestantes = ''
        for(const [clave, valor] of Object.entries(optionsActive)){
            if (valor){
                cadena = cadena + preguntas[clave] + respuestas[clave]
            }else{
                preguntasRestantes = preguntasRestantes + preguntas[clave]
            }
        }

        document.getElementById('messagesCat').innerHTML = saludo + cadena + preguntasRestantes
    }


}


document.addEventListener('click', (event) => {
    
    try {
        elementId = event.path[0].id
        elementClass = event.path[0].className
    }
    catch {
        elementId = event.target.id
        elementClass = event.path[0].className
    }

    console.log(elementId)

    switch (elementId) {
        case 'catChat':
            viewCaterinaChat(1)
            break
        case 'chatClose':
            viewCaterinaChat(0)
            break
        case 'chatContainer':
            viewCaterinaChat(0)
            break
        case 'option01':
            viewOption(1)
            break
        case 'option02':
            viewOption(2)
            break
        case 'option03':
            viewOption(3)
            break
        case 'option04':
            viewOption(4)
            break
    }

})