window.onload = () => {
    listenRegexOk('inputNameEdit', /(.|\s)*[a-zA-Z]+(.|\s)*$/)
    listenRegexOk('inputBuyPriceEdit', /^[0-9]{1,}$/)
    listenRegexOk('inputSellPriceEdit', /^[0-9]{1,}$/)
    listenRegexOk('inputDescriptionEdit', /(.|\s)*[a-zA-Z]+(.|\s)*$/)
    listenRegexOk('inputAmountEdit', /^[0-9]{1,}$/)
    listenRegexOk('inputBarcodeEdit', /^[0-9]{1,}$/)
    listenRegexOk('inputDiscountEdit', /^[0-9]{0,2}$/)
    //listenRegexOk('inputValorationEdit', /^[0-5]{0,1}$/)

    document.addEventListener('click', event => {
        try {
            elementId = event.path[0].id
            elementClass = event.path[0].className
        } catch {
            elementId = event.target.id
            elementClass = event.path[0].className
        }
    
        if (elementId == 'cleanInputs') {
            limpiarCampos()
            event.preventDefault()
        } else if (elementId == 'backButton') {
            window.location.href = `${window.location.origin}`
        } else if (elementId=='productSaveEdit'){
            console.log('asd')
            if (!priceVerify()){
                event.preventDefault()
            }
        }
    })
    console.log('asd')
    verifyPrice('inputBuyPriceEdit')
    verifyPrice('inputSellPriceEdit')
}

function listenRegexOk(idElement, regex) {
    document.getElementById(idElement).addEventListener('keyup', () => {
        element = document.getElementById(idElement)
        newBorder = element.value.match(regex) ? '3px solid #12c312' : '2px red solid'
        element.style.border = newBorder
    })
}

function verifyAll() {
    let allCorrect = true
    let elements = document.getElementsByTagName('input')
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].id != 'image' && elements[i].id != 'busqueda') {
            if (elements[i].style.border != '3px solid rgb(18, 195, 18)') {
                allCorrect = false
            }
        }
    }
    return allCorrect
}

function verifyPrice(idElement){
    document.querySelector(`#${idElement}`).addEventListener('keyup',(event)=>{
        verified = priceVerify()
        document.getElementById('inputBuyPriceEdit').style.border = verified ? '3px solid #12c312' : '2px red solid'
        document.getElementById('inputSellPriceEdit').style.border = verified ? '3px solid #12c312' : '2px red solid'
    })
}

function priceVerify(){
    buyPrice = document.getElementById('inputBuyPriceEdit').value
    sellPrice = document.getElementById('inputSellPriceEdit').value
    if (buyPrice >= sellPrice){
        return false
    }
    return true
}

function limpiarCampos() {
    document.getElementById("inputNameEdit").value = ''
    document.getElementById("inputBuyPriceEdit").value = ''
    document.getElementById("inputSellPriceEdit").value = ''
    document.getElementById("inputDescriptionEdit").value = ''
    document.getElementById("inputAmountEdit").value = ''
    document.getElementById("inputBarcodeEdit").value = ''
}