const { searchProductById, searchProductsByName, searcherByPetsubCategory, getPromotions, getNews } = require('../database/db');

module.exports = {
    home: (req, res) => {
        getPromotions().then(promotions => {
            getNews().then(news => {
                data = {
                    newsProduct: news,
                    promotions,
                    session: req.session ? req.session : '',
                    favorites: { 2: true, 4: true, 6: true }, //req.session.user ? req.session.user.favorites : '',
                    carrouselImages: [
                        "/img/banersCarrousel/banner01.jpg"
                    ]
                }
                res.render('index//home', { data })
            })
        })
    },
    productsSearch: (req, res) => {
        searchText = req.params.search
        pet = req.query.pet
        subCategory = req.query.category

        search = searchText ? searchProductsByName(searchText) : searcherByPetsubCategory(pet, subCategory)
        try{

        
        search.then(search => {
            if (search) {
                data = {
                    search,
                    isCategory: !searchText ? true : false,
                    category: pet,
                    session: req.session ? req.session : ""
                }

                res.render('index//searchPage', { data })
            }
        }).catch(err => {
            console.log(err)
            return false
        })
        }
        catch{
            res.status(404).render('index//error', { data:{session: req.session.user ? req.session.user : ""}})
        }
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