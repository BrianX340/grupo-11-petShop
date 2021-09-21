const { oneProduct, getAllProducts, searchProductByName, saveOneProduct } = require('../database/db');
const { validationResult } = require('express-validator')
const { generoData, mascotaData, ventasData, concretadasData, anuladasData } = require('../database/statisticsDb');


module.exports = {
    adminPanelView: (req,res) =>{

        data = {
            session: req.session ? req.session : ""
        }

        res.status(200).render('admin//adminPanelDesktop',{data})
    },
    createProductView: (req,res)=> {
        data = {
            session: req.session ? req.session : ""
        }
        res.render('admin//products//addProduct',{data})
    },
    deleteProductView: (req,res)=> {
        data = {
            session: req.session ? req.session : ""
        }
        res.render('admin//products//deleteProduct',{data})
    },
    editProductView: (req,res)=> {
        data = {
            session: req.session ? req.session : ""
        }
        res.render('admin//products//editProduct',{data})
    },
    detailProductView: (req,res)=> {
        data = {
            session: req.session ? req.session : ""
        }
        res.render('admin//products//detailProduct',{data})
    },
    transactionView: (req,res)=>{
        data = {
            session: req.session ? req.session : ""
        }
        res.render('admin//transactions',{data})
    },
    statisticsView: (req,res)=> {
        data = {
            session: req.session ? req.session : ""
        }
        res.render('admin//statistics',{
            data:{
                session: req.session ? req.session : "",
                generoData:JSON.stringify(generoData()),
                tipoMascotaData:JSON.stringify(mascotaData()),
                ventasData:JSON.stringify(ventasData()),
                concretadasData:JSON.stringify(concretadasData()),
                anuladasData:JSON.stringify(anuladasData()),
            }
        })
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
        res.render('admin//adminPanel')
    },
}

