const { validationResult } = require('express-validator')


/* db.Subcategory.findAll({
    include : [
        {
        association: "category",
        include: [{ 
            association: "products",
            include: [{association: "productImage"}]
        }]
    }
]
}) */

module.exports = {
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
        data = {
            session: req.session ? req.session : ""
        }
        res.render('admin//products//editProduct', { data })
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
    searchProducts: (req, res) => {
        res.render('partial//resultProductSearch', { productos: searchProductByName(req.params.name) })
    },
    createProduct: (req, res) => {
        img = req.file ? [req.file.filename] : "productDefault.png"
        let errors = validationResult(req)
        data = {
            session: req.session ? req.session : "",
            productStatus: ''
        }

        if (errors.isEmpty()) {
            newProduct = { id: "", ...req.body, img }

            if (saveOneProduct(newProduct)) {
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
    },
    deleteProduct: (req, res) => {
        //res.render('admin//adminPanel')
    },
    detailProduct: (req, res) => {
        res.render('admin//adminPanel')
    },
}