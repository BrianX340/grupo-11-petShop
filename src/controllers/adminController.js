const { validationResult } = require('express-validator')
const { productCreate, searchProductById, productUpdate, getAllProducts, poblar } = require('../database/db')

module.exports = {
    deleteProduct:(req,res)=>{

    },
    listProductView: (req,res)=>{
        getAllProducts()
        .then(products=>{
            data = {
                session: req.session ? req.session : "",
                products
            }
            res.render('admin//products//listProducts', {data})
        }).catch(err=>{
            console.log(err)
            return false
        })
    },
    adminPanelView: (req, res) => {

        data = {
            session: req.session ? req.session : ""
        }

        res.status(200).render('admin//adminPanelDesktop', { data })
    },
    createProductView: (req, res) => {
        data = {
            session: req.session ? req.session : ""
        }
        res.render('admin//products//addProduct', { data })
    },
    deleteProductView: (req, res) => {
        data = {
            session: req.session ? req.session : ""
        }
        res.render('admin//products//deleteProduct', { data })
    },
    editProductView: (req, res) => {
        productId = req.params.productId
            //traer product
        searchProductById(productId)
            .then(product => {
                if (product) {
                    data = {
                        product: product.dataValues,
                        session: req.session ? req.session : ""
                    }
                    res.render('admin//products//editProduct', { data })
                }
            })


    },
    detailProductView: (req, res) => {
        data = {
            session: req.session ? req.session : ""
        }
        res.render('admin//products//detailProduct', { data })
    },
    transactionView: (req, res) => {
        data = {
            session: req.session ? req.session : ""
        }
        res.render('admin//transactions', { data })
    },
    statisticsView: (req, res) => {
        data = {
            session: req.session ? req.session : ""
        }
        res.render('admin//statistics', {
            data: {
                session: req.session ? req.session : "",
                generoData: JSON.stringify(generoData()),
                tipoMascotaData: JSON.stringify(mascotaData()),
                ventasData: JSON.stringify(ventasData()),
                concretadasData: JSON.stringify(concretadasData()),
                anuladasData: JSON.stringify(anuladasData()),
            }
        })
    },
    getOneProduct: (req, res) => {
        elementId = req.params.id
        product = oneProduct(elementId)
        product ? res.send({ status: 'ok', product }) : res.send({ status: 'fail' })
    },
    allProducts: (req, res) => {
        res.send(getAllProducts())
    },
    createProduct: (req, res) => {
        img = req.file ? [req.file.filename] : "productDefault.png"
        let errors = validationResult(req)
        data = {
            session: req.session ? req.session : "",
            productStatus: ''
        }

        if (errors.isEmpty()) {
            newProduct = {
                ...req.body,
                imgPath: img
            }

            if (productCreate(newProduct)) {
                data.productStatus = 'created'
            } else {
                data.productStatus = 'failed'
            }

            res.render('admin//products//addProduct', { data })
        } else {
            return res.send({ status: 'error', msg: 'validacionesIncorrectas', errors })
        }
    },
    editProduct: (req, res) => {
        //res.render('admin//adminPanel')
        productId = req.params.productId
        img = req.file ? [req.file.filename] : "productDefault.png"
        productData = {
            ...req.body,
            imgPath: img
        }
        
        productUpdate(productId,productData,(err)=>{
            if(!err){
                res.redirect(`/products/detail/${productId}`)
            }
        })

    }
}