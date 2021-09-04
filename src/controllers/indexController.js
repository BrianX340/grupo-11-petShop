const { oneProduct, getAllProducts , searchProductByName, searcherByPetsubCategory } = require('../database/db');

module.exports = {
    home: (req,res) =>{
        //productos que se visualizan en el home 
        info = getAllProducts()
        data = {
            bestSells:info,
            promotions:info,
            carrouselImages:[
                "/img/banersCarrousel/banner01.jpg"
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
        subCategory = req.query.category

        search = searchText ? searchProductByName(searchText) : searcherByPetsubCategory(pet,subCategory)

        data = {
            search
        }

        res.render('index//searchPage', {data} )


    },
    detail: (req, res) => {

        let productId = +req.params.id;

        let product = oneProduct(productId)

        res.render('index//productDetail', {
            product
        })
    }
}




