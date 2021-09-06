
var actualView = ''
var previousView = 'panel-menu'
window.onload = () => {

    keypressListener()
    clickListener()

}

//Limpieza de Campos
function limpiarCampos() {
    
    //ViewsReset
    editMode(0)

    //Searchs
    document.getElementById("searchInputModify").value = ''

    //SearchResult
    document.getElementById("modifySearchResult").innerHTML = ''
    document.getElementById("detailSearchResult").innerHTML = ''

    //Carga de productos
    document.getElementById("inputNameAdd").value = ''
    document.getElementById("inputMarkAdd").value = ''
    document.getElementById("inputAmountAdd").value = ''
    document.getElementById("inputBarcodeAdd").value = ''
    document.getElementById("inputBuyPriceAdd").value = ''
    document.getElementById("inputCategoryAdd").value = ''
    document.getElementById("inputSellPriceAdd").value = ''
    document.getElementById("inputDescriptionAdd").value = ''
    document.getElementById("inputSubCategoryAdd").value = ''

    //Modify
    document.getElementById("inputNameEdit").value = ''
    document.getElementById("inputMarkEdit").value = ''
    document.getElementById("inputAmountEdit").value = ''
    document.getElementById("inputBarcodeEdit").value = ''
    document.getElementById("inputBuyPriceEdit").value = ''
    document.getElementById("inputCategoryEdit").value = ''
    document.getElementById("inputSellPriceEdit").value = ''
    document.getElementById("inputDescriptionEdit").value = ''
    document.getElementById("inputSubCategoryEdit").value = ''

    //Carga de Consult
    document.getElementById("searchInputConsult").value = ''

    document.getElementById("inputSubCategoryAdd").value = ''
    document.getElementById("inputSubCategoryAdd").value = ''
    document.getElementById("inputSubCategoryAdd").value = ''
    document.getElementById("inputSubCategoryAdd").value = ''
    document.getElementById("inputSubCategoryAdd").value = ''
    document.getElementById("inputSubCategoryAdd").value = ''
    document.getElementById("inputSubCategoryAdd").value = ''
    document.getElementById("inputSubCategoryAdd").value = ''

}

//Escuchador keypress
function keypressListener() {
    document.addEventListener('keypress', (event) => {
        //Inicio capturar el id y la clase del elemento
        try {
            elementId = event.path[0].id
            elementClass = event.path[0].className
        }
        catch {
            elementId = event.target.id
            elementClass = event.path[0].className
        }
        //Fin captura

        switch (event.key) {
            case 'Enter':
                enterPress(elementId, elementClass, event)
                break
        }
    })
}

//Controlador Event Enter
function enterPress(elementId, elementClass, event) {
    switch (elementId) {
        case 'searchInputModify':
        case 'searchInputConsult':
            cargarBusquedaProductosAlDom(elementId)
            event.preventDefault()
            break
    }
}

//Escuchador Clicks
function clickListener() {
    document.addEventListener('click', (event) => {

        //Inicio capturar el id y la clase del elemento
        try {
            elementId = event.path[0].id
            elementClass = event.path[0].className
        }
        catch {
            elementId = event.target.id
            elementClass = event.path[0].className
        }
        //Fin captura

        switch (elementClass) {
            case 'backButton':
                event.preventDefault()
                backButtonController(previousView)
                break;
            case 'cleanInputs':
                event.preventDefault()
                limpiarCampos()
                break

            case 'cardCoverCLick':
                productIdClicked = event.target.attributes[1].value

                if(event.path[0].parentElement.parentElement.id=='detailSearchResult'){
                    consultProductMode(productIdClicked)
                }else{
                    editProductMode(productIdClicked)
                }
                break
            }


        //Inicio condicional depende del ID
        switch (elementId) {

            //Inicio casos boton BACK
            case 'globalBackButton':
                backButtonController(previousView)
                break;

            /////////////////////////////////////////////////////////////////////////////INICIO VISTA PRINCIPAL

            //Inicio casos menu principal
            case 'box-products':
                principalViewController('panel-products')
                break;
            case 'box-client':
                principalViewController('panel-clients')
                break;
            case 'box-ventas':
                principalViewController('panel-moreOptions')
                break;

            /////////////////////////////////////////////////////////////////////////////INICIO VISTA PRODUCTOS
            //Inicio casos panel menu products
            case 'productsLoaderButton':
                panelProductViewController('addProductView')
                break;
            case 'productsEditButton':
                panelProductViewController('modifyProductView')
                break;
            case 'productsDetailButton':
                panelProductViewController('consultProductView')
                break;

            /////////////////////////////////////////////////////////////////////////////INICIO VISTA CLIENTES
            //Inicio casos panel menu clients
            case 'clientStatistics':
                panelClientsViewController('clientStatisticsView')
                break;
            case 'dogChat':
                panelClientsViewController('dogChatView')
                break;
            case 'clientsOnline':
                panelClientsViewController('clientOnlineView')
                break;

            /////////////////////////////////////////////////////////////////////////////INICIO VISTA MORE OPTIONS
            //Inicio casos panel menu moreOptions
            case 'transactions':
                panelMoreViewController('transactionsView')
                break;
            case 'statistics':
                panelMoreViewController('moneyStatisticsView')
                break;
            case 'advanceOptions':
                panelMoreViewController('advanceConfigurationView')
                break;

            /////////////////////////////////////////////////////////////////////////////METODOS
            //Inicio carga producto

            case 'productCreate':
                productCreate()
                event.preventDefault()
                break 



        }

    })
}

function getOneProduct(elementId){
    var product;
    fetch(`${window.location.origin}/admin/getOneProduct/${elementId}`, {
        method: 'GET'
    })
        .then(function (response) {
            if (response.status !== 200) {
                console.log(`Looks like there was a problem. Status code: ${response.status}`);
                return;
            }
            response.json().then(function (data) {
                if (data.status=='ok'){
                    product = data.product
                } else {
                    return false
                }
                loading(0)
            });
        })
            .catch(function (error) {
                console.log("Fetch error: " + error);
            });
    return product
}



function completarEditForm(product){

    document.getElementById('inputNameEdit').value = product.name
    document.getElementById('inputBuyPriceEdit').value = product.buyPrice
    document.getElementById('inputSellPriceEdit').value = product.sellPrice
    document.getElementById('inputDescriptionEdit').value = product.description
    document.getElementById('inputAmountEdit').value = product.stock
    document.getElementById('inputBarcodeEdit').value = product.barcode
    document.getElementById('inputMarkEdit').value = product.mark
    document.getElementById('inputCategoryEdit').value = product.pet
    document.getElementById('inputSubCategoryEdit').value = product.subCategory

}



function consultProductMode(productIdClicked){
    fetch(`${window.location.origin}/admin/getOneProduct/${elementId}`, {
        method: 'GET'
    })
        .then(function (response) {
            if (response.status !== 200) {
                console.log(`Looks like there was a problem. Status code: ${response.status}`);
                return;
            }
            response.json().then(function (data) {
                if (data.status=='ok'){
                    product = data.product
                    
                    //completarConsultView(product)

                } else {
                    return false
                }
                loading(0)
            });
        })
            .catch(function (error) {
                console.log("Fetch error: " + error);
            });
}

//Activa la vista de edicion del elemento seleccionado y realiza el fetch del elemento
async function editProductMode(elementId){
    fetch(`${window.location.origin}/admin/getOneProduct/${elementId}`, {
        method: 'GET'
    })
        .then(function (response) {
            if (response.status !== 200) {
                console.log(`Looks like there was a problem. Status code: ${response.status}`);
                return;
            }
            response.json().then(function (data) {
                if (data.status=='ok'){
                    product = data.product
                    editMode(1)
                    completarEditForm(product)

                } else {
                    return false
                }
                loading(0)
            });
        })
            .catch(function (error) {
                console.log("Fetch error: " + error);
            });
    
}

//Intercambia entre busqueda editar o edit mode
function editMode(active){
    if (active){
        backButtonView(1)
        document.getElementById('formEdit').style.display = 'flex'
        backButtonView(0) //Ocultamos el boton BACK
        document.getElementById('modifySearchView').style.display = 'none'
        return
    }
    document.getElementById('formEdit').style.display = 'none'
        document.getElementById('modifySearchView').style.display = 'flex'
}


//resetGif
function resetGif(id) {
    var img = document.getElementById(id);
    var imageUrl = img.src;
    img.src = "";
    img.src = imageUrl;
};

//Loading
function loading(active){
    if (active){
        document.getElementById('loadingCard').style.display = 'flex'
    } else {
        document.getElementById('loadingCard').style.display = 'none'
    }
}

//ScrollApp
function scroolMenu(active){
    if (active){
        document.getElementById('adminPanel').style.overflowY = 'scroll'
    } else {
        document.getElementById('adminPanel').style.overflowY= 'hidden'
    }
}

//////////////////////////CRUD
async function productCreate() {

    //mostart pantalla de carga
    loading(1)

    const data = new FormData(document.getElementById("formCreateAdd"))

    fetch(`${window.location.origin}/admin/products`, {
        method: 'POST',
        body: data,
    })
        .then(function (response) {
            if (response.status !== 200) {
                console.log(`Looks like there was a problem. Status code: ${response.status}`);
                return;
            }
            response.json().then(function (data) {
                if (data.status=='ok'){
                    loading(0)
                    operationSuccessful(1)
                    limpiarCampos()
                } else {
                    if (data.msg=='validacionesIncorrectas'){
                        errorValidacionesEdit(data.errors)
                    } else if (data.msg=='productNotCreate'){
                        errorBox(data.error)
                    }
                    
                    loading(0)
                    operationSuccessful(0)
                }
            });
        })
            .catch(function (error) {
                console.log("Fetch error: " + error);
                loading(0)
                operationSuccessful(0)
            });
    
}


//Control validaciones
function errorValidacionesEdit(errors){
    console.log(errors)
}

//Vista operacion exitosa
function operationSuccessful(successful){
    if (successful){
        resetGif('successfulOperation') 
        document.getElementById('operationSuccess').style.display = 'flex'
        document.getElementById('successfulOperation').style.display = 'flex'
        setTimeout(()=>{
            document.getElementById('operationSuccess').style.display = 'none'
            document.getElementById('successfulOperation').style.display = 'none'
        },2500)
    } else {
        resetGif('failedOperation') 
        document.getElementById('operationSuccess').style.display = 'flex'
        document.getElementById('failedOperation').style.display = 'flex'
        setTimeout(()=>{
            document.getElementById('operationSuccess').style.display = 'none'
            document.getElementById('failedOperation').style.display = 'none'
        },2500)
    }
}


//Con esta funcion rellenamos los campos de resultados de productos segun el input donde se presiono
function cargarBusquedaProductosAlDom(elementId) {
    textoBusqueda = document.getElementById(elementId).value

    fetch(`${window.location.origin}/admin/products/${textoBusqueda}`, {
        method: "GET",
        cache: 'no-cache',
        mode: 'no-cors',
    })
        .then(function (response) {
            if (response.status !== 200) {
                console.log(`Looks like there was a problem. Status code: ${response.status}`);
                return;
            }
            return response.text()

        }).then((response) => {
            //parseamos el response como html
            var parser = new DOMParser();
            var doc = parser.parseFromString(response, "text/html")

            cards = doc.body.innerHTML //capturamos solo las CARDS de los productos

            switch (elementId) {
                case 'searchInputModify':
                    document.getElementById('modifySearchResult').innerHTML = cards
                    break
                case 'searchInputConsult':
                    document.getElementById('detailSearchResult').innerHTML = cards
                    break
            }

        })
        .catch(function (error) {
            console.log("Fetch error: " + error);
        });
}


//Se encarga de volver a la vista anterior
function backButtonController() {
    backButtonView(1) //esta puesto porque ocultamos el boton back al ingresar a addproduct
    limpiarCampos()
    switch (previousView) {
        case 'panel-menu':
            principalViewController(previousView)
            previousView = 'panel-menu'
            break

        case 'panel-products':
            panelProductViewController('productOptionsViews')
            previousView = 'panel-menu'
            break

        case 'panel-clients':
            panelClientsViewController('panelClientView')
            previousView = 'panel-menu'
            break

        case 'panel-moreOptions':
            panelMoreViewController('moreOptionsView')
            previousView = 'panel-menu'
            break
    }
}

//Controla el display del boton de volver atras
function backButtonView(mode) {
    if (mode) {
        document.getElementById('globalBackButton').style.display = 'flex'
    } else {
        document.getElementById('globalBackButton').style.display = 'none'
    }
}

//Funcion de control de vistas raiz
function principalViewController(idView) {

    document.getElementById('panel-menu').style.display = 'none'
    document.getElementById('panel-products').style.display = 'none'
    document.getElementById('panel-clients').style.display = 'none'
    document.getElementById('panel-moreOptions').style.display = 'none'

    backButtonView(1)

    document.getElementById(idView).style.display = 'flex'

    previousView = 'panel-menu'

    scroolMenu(1)

    switch (idView) {
        case 'panel-products':
            panelProductViewController('productOptionsViews')
            break
        case 'panel-clients':
            panelClientsViewController('panelClientView')
            break
        case 'panel-moreOptions':
            panelMoreViewController('moreOptionsView')
            break
        case 'panel-menu':
            scroolMenu(0)
            backButtonView(0)
            break
    }

}


//Funcion de control de vistas PRODUCTOS
function panelProductViewController(idView) {

    document.getElementById('productOptionsViews').style.display = 'none'
    document.getElementById('addProductView').style.display = 'none'
    document.getElementById('modifyProductView').style.display = 'none'
    document.getElementById('consultProductView').style.display = 'none'

    document.getElementById(idView).style.display = 'flex'
    previousView = 'panel-products'

    if (idView == 'productOptionsViews') {
        previousView = 'panel-menu'
        backButtonView(1)
    } else if(idView == 'modifyProductView' || idView == 'consultProductView'){
        //no hacer nada para seguir mostrando el boton flotante de BACK
    } else if(idView == 'addProductView'){
        backButtonView(0)
    }


}

//Funcion de control de vistas CLIENTES
function panelClientsViewController(idView) {

    document.getElementById('panelClientView').style.display = 'none'
    document.getElementById('clientStatisticsView').style.display = 'none'
    document.getElementById('dogChatView').style.display = 'none'
    document.getElementById('clientOnlineView').style.display = 'none'

    document.getElementById(idView).style.display = 'flex'
    previousView = 'panel-clients'

    if (idView == 'panelClientView') {
        previousView = 'panel-menu'
    }
}

//Funcion de control de vistas MAS OPCIONES
function panelMoreViewController(idView) {
    document.getElementById('moreOptionsView').style.display = 'none'
    document.getElementById('transactionsView').style.display = 'none'
    document.getElementById('moneyStatisticsView').style.display = 'none'
    document.getElementById('advanceConfigurationView').style.display = 'none'

    document.getElementById(idView).style.display = 'flex'
    previousView = 'panel-moreOptions'

    if (idView == 'moreOptionsView') {
        previousView = 'panel-menu'
    }

}






























//Funciones inutilizadas


//Funcion encargada de mostrar la imagen en carga de productos
function imageViewer() {
    //para carga de producto
    document.getElementById('imageContainer').addEventListener('change', (event) => {
        let inputImage = document.getElementById('imageContainer')
        var filePath = inputImage.value; //Capturo el valor del input
        var allowefExtensions = /(.jpg|.jpeg|.png|.gif)$/i; //Extensiones permitidas
        var errorImage = document.getElementById('errorImage')
        if (!allowefExtensions.exec(filePath)) { //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            let error = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)'
            errorImage.innerHTML = error;
            inputImage.value = '';
            document.getElementById('imagePreview').innerHTML = '';
            return false;
        } else {
            // Image preview
            if (inputImage.files && inputImage.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById('imageProductAddPreview').innerHTML = '<img src="' + e.target.result + '"/>';
                };
                reader.readAsDataURL(inputImage.files[0]);
                errorImage.innerHTML = '';
            }
        }
    })

    //para edicion de product, este elemento no se encuentra disponible hasta realizar la busqueda en edit
    document.getElementById('editImageContainer').addEventListener('change', (event) => {
        let inputImage = document.getElementById('editImageContainer')
        var filePath = inputImage.value; //Capturo el valor del input
        var allowefExtensions = /(.jpg|.jpeg|.png|.gif)$/i; //Extensiones permitidas
        if (!allowefExtensions.exec(filePath)) { //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            var errorImage = document.getElementById('errorImageEdit')
            let error = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)'
            errorImage.innerHTML = error;
            inputImage.value = '';
            document.getElementById('imageProductEditPreview').innerHTML = '';
            return false;
        } else {
            // Image preview
            if (inputImage.files && inputImage.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById('imageProductEditPreview').innerHTML = '<img src="' + e.target.result + '"/>';
                };
                reader.readAsDataURL(inputImage.files[0]);
                errorImage.innerHTML = '';
            }
        }
    })
}
