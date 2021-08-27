const { getAllProducts , searchProductByName } = require('../database/db');

module.exports = {
    adminPanel: (req,res) =>{
        res.render('admin//adminPanel')
    },
    allProducts: (req,res) =>{
        res.send(getAllProducts())
    },
    searchProducts: (req,res) =>{
        res.render('partial//resultProductSearch', {productos:searchProductByName(req.params.name)})
    },
    createProducts: (req,res) =>{
        console.log('02')

        console.log(req.body)

        let newProduct = {
            image: req.file ? [req.file.filename] : "default-image.png"
        };

        //products.push(newProduct);
        //writeProductsJSON(products)

        res.send({status:"ok"})


    },
    editProducts: (req,res) =>{
        res.render('admin//adminPanel')
    },
    deleteProducts: (req,res) =>{
        res.render('admin//adminPanel')
    },
}

