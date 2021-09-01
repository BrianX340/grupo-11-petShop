const { getAllProducts , searchProductByName, searcherByPetsubCategory } = require('../database/db');

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

/*     productDetail: (req,res) =>{
        //idProducto = req.params.id
        //res.render('index//productDetail',{producto})
        res.render('index//productDetail')
    }, */

    productsSearch: (req,res)=>{

        searchText = req.params.search
        pet = req.query.pet
        subCategory = req.query.subCategory

        search = searchText ? searchProductByName(searchText) : searcherByPetsubCategory(pet,subCategory)

        data = {
            search
        }

        res.render('index//searchPage', {data} )


    }
}




