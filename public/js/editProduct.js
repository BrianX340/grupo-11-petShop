window.onload = () => {
    listenRegexOk('inputNameEdit', /(.|\s)*[a-zA-Z]+(.|\s)*$/)
    listenRegexOk('inputBuyPriceEdit', /^[0-9]{1,}$/)
    listenRegexOk('inputSellPriceEdit', /^[0-9]{1,}$/)
    listenRegexOk('inputDescriptionEdit', /(.|\s)*[a-zA-Z]+(.|\s)*$/)
    listenRegexOk('inputAmountEdit', /^[0-9]{1,}$/)
    listenRegexOk('inputBarcodeEdit', /^[0-9]{1,}$/)
    listenRegexOk('inputDiscountEdit', /^[0-9]{0,2}$/)
    listenRegexOk('inputValorationEdit', /^[0-5]{0,1}$/)

    document.getElementById('productSaveEdit').addEventListener('click', (event) => {
        allCorrect = verifyAll()
        if (!allCorrect) {
            event.preventDefault()
        }
    })
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