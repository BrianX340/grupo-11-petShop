window.onload = () => {
    document.addEventListener('click', (event)=>{
        try {
            elementId = event.path[0].id
            elementClass = event.path[0].className
        }
        catch {
            elementId = event.target.id
            elementClass = event.path[0].className
        }

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

            //Inicio casos menu products
            case 'productsLoaderButton':
                productViewController('addProductView')
                break;
            case 'productsEditButton':
                productViewController('modifyProductView')
                break;
            case 'productsDetailButton':
                productViewController('consultProductView')
                break;

            
        }

        

    })
}

function principalViewController(idView){
    document.getElementById('panel-menu').style.display = 'none'
    document.getElementById('panel-clients').style.display = 'none'
    document.getElementById('panel-products').style.display = 'none'
    document.getElementById('panel-moreOptions').style.display = 'none'

    document.getElementById(idView).style.display = 'flex'
}


function productViewController(idView){
    document.getElementById('addProductView').style.display = 'none'
    document.getElementById('modifyProductView').style.display = 'none'
    document.getElementById('consultProductView').style.display = 'none'
    document.getElementById('productOptionsViews').style.display = 'none'

    document.getElementById(idView).style.display = 'flex'
}