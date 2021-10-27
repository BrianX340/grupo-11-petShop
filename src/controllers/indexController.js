const { searchProductById, searchProductsByName, searcherByPetsubCategory, getPromotions } = require('../database/db');

module.exports = {
    home: (req, res) => {
        getPromotions().then(promotions => {
            data = {
                newsProduct: [] /* getnewsProduct() */ ,
                promotions,
                session: req.session ? req.session : '',
                favorites: { 2: true, 4: true, 6: true }, //req.session.user ? req.session.user.favorites : '',
                carrouselImages: [
                    "/img/banersCarrousel/banner01.jpg"
                ]
            }
            res.render('index//home', { data })
        })
    },
    productsSearch: (req, res) => {
        searchText = req.params.search
        pet = req.query.pet
        subCategory = req.query.category

        search = searchText ? searchProductsByName(searchText) : searcherByPetsubCategory(pet, subCategory)
        search.then(search => {
            if (search) {
                data = {
                    search,
                    session: req.session ? req.session : ""
                }

                res.render('index//searchPage', { data })
            }
        }).catch(err => {
            console.log(err)
            return false
        })

    },
    detail: (req, res) => {
        let productId = +req.params.id;
        searchProductById(productId).then(product => {
            data = {
                product,
                session: req.session ? req.session : ""
            }
            res.render('index//productDetail', {
                data
            })
        })
    }
}