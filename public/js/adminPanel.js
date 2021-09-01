
var actualView = ''
var previousView = 'panel-menu'

window.onload = () => {

    keypressListener()
    clickListener()
    imageViewer()

}

//Limpieza de Campos
function limpiarCampos() {

    //Image
    document.getElementById("searchInputConsult").value = ''

    //Searchs
    document.getElementById("imageContainer").value = ''
    document.getElementById("searchInputModify").value = ''
    document.getElementById("imageProductAddPreview").value = ''

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

    //Carga de Modify
    document.getElementById("searchInputModify").value = ''

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
                backButtonController(previousView)
                break;
            case 'cleanInputs':
                limpiarCampos()
                event.preventDefault()
                break

            case 'cardCoverCLick':
                productIdClicked = event.target.attributes[1].value
                editProductMode(productIdClicked)
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

//Activa la vista de edicion del elemento seleccionado
function editProductMode(elementId){
    
}


//Loading
function loading(active){
    if (active){
        document.getElementById('loadingCard').style.display = 'flex'
    } else {
        setTimeout(function(){ 
            document.getElementById('loadingCard').style.display = 'none'
         }, 500)
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
function productCreate() {

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
                    //creado
                    limpiarCampos()
                } else {
                    //error
                }
                loading(0)
            });
        })
            .catch(function (error) {
                console.log("Fetch error: " + error);
            });
    
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

    //para edicion de producto
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
