const { getPromotions, getBestSells, oneProduct, getAllProducts, searchProductByName, searcherByPetsubCategory } = require('../database/db');

module.exports = {
    home: (req, res) => {
        data = {
            bestSells: [] /* getBestSells() */ ,
            promotions: [] /* getPromotions() */ ,
            session: req.session ? req.session : '',
            favorites: { 2: true, 4: true, 6: true }, //req.session.user ? req.session.user.favorites : '',
            carrouselImages: [
                "/img/banersCarrousel/banner01.jpg"
            ]
        }
        res.render('index//home', { data })
    },
    productsSearch: (req, res) => {
        searchText = req.params.search
        pet = req.query.pet
        subCategory = req.query.category

        search = searchText ? searchProductByName(searchText) : searcherByPetsubCategory(pet, subCategory)
        search.then(search => {
            if (search) {
                data = {
                    search,
                    session: req.session ? req.session : ""
                }

                console.log(data)

                res.render('index//searchPage', { data })
            }
            res.render('index//searchPage', {})
        })

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