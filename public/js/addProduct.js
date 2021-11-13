window.onload = () => {
    listenRegexOk('inputAmount', /^[0-9]{1,}$/)
    listenRegexOk('inputBarcode', /^[0-9]{1,}$/)
    listenRegexOk('inputBuyPrice', /^[0-9]{1,}$/)
    listenRegexOk('inputSellPrice', /^[0-9]{1,}$/)
    listenRegexOk('inputDiscount', /^[0-9]{0,2}$/)
    listenRegexOk('inputName', /^[a-zA-Z0-9]{3,}$/)
    listenRegexOk('inputValoration', /^[0-5]{0,1}$/)
    listenChangeImageAndShow('inputImageAdd','imgView') 
    listenRegexOk('inputDescription', /(.|\s)*[a-zA-Z]+(.|\s)*$/)

    document.getElementById('productCreate').addEventListener('click', (event) => {
        allCorrect = verifyAll()
        if (!allCorrect) {
            event.preventDefault()
        }
    })

    document.addEventListener('click', event => {
        try {
            elementId = event.path[0].id
            elementClass = event.path[0].className
        } catch {
            elementId = event.target.id
            elementClass = event.path[0].className
        }
    
        if (elementId == 'limpiar') {
            limpiarCampos()
            event.preventDefault()
        } else if (elementId == 'back') {
            window.location.href = `${window.location.origin}`
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

function listenChangeImageAndShow(inputFileId,imgLabelId){
    inputFile = document.querySelector("#inputImageAdd")
    imgLabel = document.querySelector("#imgView")

    inputFile.addEventListener("change", () => {
        archivos = inputFile.files;
        if (!archivos || !archivos.length) {
            imgLabel.src = "";
            return;
        }
        imgLabel.src = URL.createObjectURL(archivos[0])
        });
}

function limpiarCampos() {
    document.getElementById("inputName").value = ''
    document.getElementById("inputBuyPrice").value = ''
    document.getElementById("inputSellPrice").value = ''
    document.getElementById("inputDiscount").value = ''
    document.getElementById("inputDiscount").value = ''
    document.getElementById("inputValoration").value = ''
    document.getElementById("inputDescription").value = ''
    document.getElementById("inputAmount").value = ''
    document.getElementById("inputBarcode").value = ''
}