const { getAllProducts , searchProductByName, searcherByPetTag } = require('../database/db');

module.exports = {
    home: (req,res) =>{
        //productos que se visualizan en el home 
        info = getAllProducts()
        data = {
            bestSells:[
                    {
                        "id":1,
                    }
                ],
                promotions:info,
        }
        
        res.render('index//home',{data})
    },
    productDetail: (req,res) =>{
        //idProducto = req.params.id
        //res.render('index//productDetail',{producto})
        res.render('index//productDetail')
    },
    productsSearch: (req,res)=>{
        pet = req.query.pet
        tag = req.query.tag
        search = req.query.search

        //va a haber 4 categorias
        //Alimentos, Higiene, Juguetes, Camas

        if (!search){
            productos = searcherByPetTag(pet,tag)
        } else {
            productos = searchProductByName(search)
        }
        
        res.render('index//searchPage', productos)





    }
}




