const { oneProduct, getAllProducts, searchProductByName, saveOneProduct } = require('../database/db');

module.exports = {
    getOneProduct: (req,res)=>{
        elementId = req.params.id
        product = oneProduct(elementId)

        if(product){
            res.send({
                status:'ok',
                product
            })
        } else {
            res.send({
                status:'fail'
            })
        }
    },
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
        img = req.file ? [req.file.filename] : "productDefault.png"

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

        console.log(req.body)

        newProduct = {
            id:"",
            name,
            buyPrice,
            sellPrice,
            description,
            stock:amount,
            barcode,
            mark,
            category,
            subCategory,
            img
        }

        if (saveOneProduct(newProduct)){
            return res.send({status:"ok"})
        }
        return res.send({status:'error'})




    },
    editProducts: (req,res) =>{
        res.render('admin//adminPanel')
    },
    deleteProducts: (req,res) =>{
        res.render('admin//adminPanel')
    },
}

