window.onload = () => {
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

            
        }

        
    })
}

//Funcion de control de vistas raiz
function principalViewController(idView){
    document.getElementById('panel-menu').style.display = 'none'
    document.getElementById('panel-clients').style.display = 'none'
    document.getElementById('panel-products').style.display = 'none'
    document.getElementById('panel-moreOptions').style.display = 'none'

    document.getElementById(idView).style.display = 'flex'
}

//Funcion de control de vistas MAS OPCIONES
function panelMoreViewController(idView){
    document.getElementById('moreOptionsView').style.display = 'none'
    document.getElementById('transactionsView').style.display = 'none'
    document.getElementById('moneyStatisticsView').style.display = 'none'
    document.getElementById('advanceConfigurationView').style.display = 'none'

    document.getElementById(idView).style.display = 'flex'
}

//Funcion de control de vistas CLIENTES
function panelClientsViewController(idView){
    document.getElementById('panelClientView').style.display = 'none'
    document.getElementById('clientStatisticsView').style.display = 'none'
    document.getElementById('dogChatView').style.display = 'none'
    document.getElementById('clientOnlineView').style.display = 'none'

    document.getElementById(idView).style.display = 'flex'
}

//Funcion de control de vistas PRODUCTOS
function panelProductViewController(idView){
    document.getElementById('addProductView').style.display = 'none'
    document.getElementById('modifyProductView').style.display = 'none'
    document.getElementById('consultProductView').style.display = 'none'
    document.getElementById('productOptionsViews').style.display = 'none'

    document.getElementById(idView).style.display = 'flex'
}