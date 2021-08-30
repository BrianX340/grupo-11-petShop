const { getAllProducts , searchProductByName, searcherByPetTag } = require('../database/db');

module.exports = {
    home: (req,res) =>{
        //productos que se visualizan en el home 
        info = getAllProducts()
        data = {
            bestSells:info,
            promotions:info,
            carrouselImages:[
                "/img/banersCarrousel/banner01.jpg",
                "/img/banersCarrousel/banner02.jpg",
                "/img/banersCarrousel/banner03.jpg"
            ]
        }
        res.render('index//home',{data})
    },
    productDetail: (req,res) =>{
        //idProducto = req.params.id
        //res.render('index//productDetail',{producto})
        res.render('index//productDetail')
    },
    productsSearch: (req,res)=>{
        searchText = req.params.search

        if (searchText){
            search = searchProductByName(searchText)
        } /* else {
            pet = req.query.pet
            tag = req.query.tag

            //va a haber 4 categorias
            //Alimentos, Higiene, Juguetes, Camas
            search = searcherByPetTag(pet,tag)
        } */

        data = {
            search
        }

        console.log(data)
        res.render('index//searchPage', {data} )


    }
}




