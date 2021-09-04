const { oneProduct, getAllProducts, searchProductByName, saveOneProduct } = require('../database/db');
const { validationResult } = require('express-validator')

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
        res.render('admin//adminPanelMobile')
    },
    allProducts: (req,res) =>{
        res.send(getAllProducts())
    },
    searchProducts: (req,res) =>{
        res.render('partial//resultProductSearch', {productos:searchProductByName(req.params.name)})
    },
    createProducts: (req,res) =>{
        img = req.file ? [req.file.filename] : "productDefault.png"

        let errors = validationResult(req)

        if(errors.isEmpty()){

            newProduct = {id:"", ...req.body, img}
    
            if (saveOneProduct(newProduct)){
                return res.send({status:"ok"})
            }
            return res.send({status:'error',msg:'productNotCreate',error:'El producto no ha sido creado!'})

        }
        return res.send({status:'error',msg:'validacionesIncorrectas',errors})

    },
    editProducts: (req,res) =>{
        res.render('admin//adminPanel')
    },
    deleteProducts: (req,res) =>{
        res.render('admin//adminPanel')
    },
}

