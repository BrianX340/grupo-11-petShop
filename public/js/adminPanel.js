
var actualView = ''
var previousView = 'panel-menu'

window.onload = () => {

    clickListener()
    imageViewer()
    
}


//Escuchador Clicks
function clickListener(){
    document.addEventListener('click', (event)=>{

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

        
        console.log(elementId)

        //Inicio condicional depende del ID
        switch (elementId){

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

            //Inicio casos boton BACK
            case 'globalBackButton':
                backButtonController(previousView)
                break;
            

        }

        
    })
}

function backButtonController(){

    switch (previousView){
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
        /*    
        case 'productOptionsViews':
        case 'addProductView':
        case 'modifyProductView':
        case 'consultProductView':
            console.log('click atras para volver a menu principal')
            principalViewController('panel-menu')
            break */

    }
}


function backButtonView(mode){
    if (mode){
        document.getElementById('globalBackButton').style.display = 'flex'
    }else{
        document.getElementById('globalBackButton').style.display = 'none'
    }
}

//Funcion de control de vistas raiz
function principalViewController(idView){

    document.getElementById('panel-menu').style.display = 'none'
    document.getElementById('panel-products').style.display = 'none'
    document.getElementById('panel-clients').style.display = 'none'
    document.getElementById('panel-moreOptions').style.display = 'none'

    backButtonView(1)

    document.getElementById(idView).style.display = 'flex'

    previousView = 'panel-menu'

    switch (idView){
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
            backButtonView(0)
            break
    }

}

//Funcion de control de vistas PRODUCTOS
function panelProductViewController(idView){

    document.getElementById('productOptionsViews').style.display = 'none'
    document.getElementById('addProductView').style.display = 'none'
    document.getElementById('modifyProductView').style.display = 'none'
    document.getElementById('consultProductView').style.display = 'none'

    document.getElementById(idView).style.display = 'flex'
    previousView = 'panel-products'

    if (idView=='productOptionsViews'){
        previousView = 'panel-menu'
    }

    
}

//Funcion de control de vistas CLIENTES
function panelClientsViewController(idView){

    document.getElementById('panelClientView').style.display = 'flex'
    document.getElementById('clientStatisticsView').style.display = 'none'
    document.getElementById('dogChatView').style.display = 'none'
    document.getElementById('clientOnlineView').style.display = 'none'

    switch (idView){
        case 'clientStatisticsView':
        case 'dogChatView':
        case 'clientOnlineView':
            actualView = idView
            document.getElementById(idView).style.display = 'flex'
            break
        case  'panelClientView':
            document.getElementById(idView).style.display = 'flex'
            break
    }
    previousView = 'panel-clients'
    actualView = idView
}

//Funcion de control de vistas MAS OPCIONES
function panelMoreViewController(idView){
    document.getElementById('moreOptionsView').style.display = 'none'
    document.getElementById('transactionsView').style.display = 'none'
    document.getElementById('moneyStatisticsView').style.display = 'none'
    document.getElementById('advanceConfigurationView').style.display = 'none'

    switch (idView){
        case 'transactionsView':
        case 'moneyStatisticsView':
        case 'advanceConfigurationView':
            actualView = idView
            document.getElementById(idView).style.display = 'flex'
            break
        case  'moreOptionsView':
            document.getElementById('transactionsView').style.display = 'none'
            document.getElementById('moneyStatisticsView').style.display = 'none'
            document.getElementById('advanceConfigurationView').style.display = 'none'
            document.getElementById(idView).style.display = 'flex'
            break
    }

    previousView = 'panel-moreOptions'
    actualView = idView
}



















//Funcion encargada de mostrar la imagen en carga de productos
function imageViewer(){
    document.getElementById('imageContainer').addEventListener('change', (event)=>{
        let inputImage = document.getElementById('imageContainer')
        var filePath = inputImage.value; //Capturo el valor del input
        var allowefExtensions = /(.jpg|.jpeg|.png|.gif)$/i; //Extensiones permitidas
        if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
            var errorImage = document.getElementById('errorImage')
            let error = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)'
            errorImage.innerHTML = error;
            inputImage.value = '';
            document.getElementById('imagePreview').innerHTML = '';
            return false;
        }else{
            // Image preview
            if(inputImage.files && inputImage.files[0]){
                var reader = new FileReader();
                reader.onload = function(e){
                    document.getElementById('imageProductAddPreview').innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL(inputImage.files[0]);
                errorImage.innerHTML = '';
            }
        }
    })
}