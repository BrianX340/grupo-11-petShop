window.onload = () => {
    listenRegexOk('inputAmount', /^[0-9]{1,}$/)
    listenRegexOk('inputBarcode', /^[0-9]{1,}$/)
    listenRegexOk('inputBuyPrice', /^[0-9]{1,}$/)
    listenRegexOk('inputSellPrice', /^[0-9]{1,}$/)
    listenRegexOk('inputDiscount', /^[0-9]{0,2}$/)
    listenRegexOk('inputName', /^[a-zA-Z0-9]{3,}$/)
    listenRegexOk('inputValoration', /^[0-5]{0,1}$/)
    listenRegexOk('inputDescription', /(.|\s)*[a-zA-Z]+(.|\s)*$/)

    document.getElementById('productCreate').addEventListener('click', (event) => {
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
        if (elements[i].id != 'inputImageAdd' && elements[i].id != 'busqueda') {
            if (elements[i].style.border != '3px solid rgb(18, 195, 18)') {
                allCorrect = false
            }
        }
    }
    return allCorrect
}