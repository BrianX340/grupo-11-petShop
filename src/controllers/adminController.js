const { oneProduct, getAllProducts, searchProductByName, saveOneProduct } = require('../database/db');
const { validationResult } = require('express-validator')

module.exports = {
    adminPanelView: (req,res) =>{
        res.render('admin//adminPanelDesktop')
    },
    createProductView: (req,res)=> {
        res.render('admin//products//addProduct')
    },
    deleteProductView: (req,res)=> {
        res.render('admin//products//deleteProduct')
    },
    editProductView: (req,res)=> {
        res.render('admin//products//editProduct')
    },
    detailProductView: (req,res)=> {
        res.render('admin//products//detailProduct')
    },
    statisticsClientView: (req,res)=> {
        res.render('admin//clients//clientStatistics')
    },
    buzonClientView: (req,res)=> {
        res.render('admin//clients//clientBuzon')
    },
    onlineClientView: (req,res)=> {
        res.render('admin//clients//clientOnline')
    },
    getOneProduct: (req,res)=>{
        elementId = req.params.id
        product = oneProduct(elementId)
        product ? res.send({status:'ok',product}) : res.send({status:'fail'})
    },
    allProducts: (req,res) =>{
        res.send(getAllProducts())
    },
    searchProducts: (req,res) =>{
        res.render('partial//resultProductSearch', {productos:searchProductByName(req.params.name)})
    },
    createProduct: (req,res) =>{
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
    editProduct: (req,res) =>{
        //res.render('admin//adminPanel')
    },
    deleteProduct: (req,res) =>{
        //res.render('admin//adminPanel')
    },
    detailProduct: (req,res) =>{
        //res.render('admin//adminPanel')
    },
}

