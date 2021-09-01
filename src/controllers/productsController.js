let {products} = require('../database/productdb');


module.exports = {
    detail: (req, res) => {

        let productID = +req.params.id;

        let product = products.find(product => product.id === productID)

        res.render('index//productDetail', {
            product
        })
    }
}