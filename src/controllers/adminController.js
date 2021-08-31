const { getAllProducts, searchProductByName, saveOneProduct } = require('../database/db');

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
        imagePath = req.file ? req.file.filename : "productDefault.png"

        let {
            name,
            buyPrice,
            sellPrice,
            description,
            amount,
            barcode,
            mark,
            category,
            subCategory,
        } = req.body

        newProduct = {
            id:"",
            name,
            buyPrice,
            sellPrice,
            description,
            amount,
            barcode,
            mark,
            category,
            subCategory,
            imagePath
        }

        saveOneProduct(newProduct);

        res.send({status:"ok"})


    },
    editProducts: (req,res) =>{
        res.render('admin//adminPanel')
    },
    deleteProducts: (req,res) =>{
        res.render('admin//adminPanel')
    },
}

