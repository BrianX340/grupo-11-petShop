const { getPromotions, getBestSells, oneProduct, getAllProducts , searchProductByName, searcherByPetsubCategory } = require('../database/db');

module.exports = {
    home: (req,res) =>{
        data = {
            favorites: [],
            bestSells:getBestSells(),
            promotions:getPromotions(),
            session : req.session ? req.session : '',
            favorites: req.session.user ? req.session.user.favorites : '',
            carrouselImages:[
                "/img/banersCarrousel/banner01.jpg"
            ]
        }
        res.render('index//home',{data})
    },
    productsSearch: (req,res)=>{

        searchText = req.params.search
        pet = req.query.pet
        subCategory = req.query.category

        search = searchText ? searchProductByName(searchText) : searcherByPetsubCategory(pet,subCategory)

        data = {
            search
        }

        res.render('index//searchPage', {data, session: req.session ? req.session : ""} )
    },
    detail: (req, res) => {
        let productId = +req.params.id;
        let product = oneProduct(productId)

        data = {
            product,
            session: req.session ? req.session : ""
        }

        res.render('index//productDetail', {
            data
        })
    }
}




