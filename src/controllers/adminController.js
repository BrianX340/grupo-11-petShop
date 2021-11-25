const { validationResult } = require('express-validator')
const { getAllProductsNotNews, getAllProductsNotPromotion, getAllPromotions, productCreate, searchProductById, productUpdate, getAllProducts, deleteOneProduct, isInPromotionToogle, isInNewsToogle, getNews } = require('../database/db')

module.exports = {
    isInPromotionToogleApi: (req, res) => {
        id = req.params.productId
        if (isNaN(id)) {
            return res.status(400).send({ message: 'La ruta que desea ingresar no existe' })
        }
        isInPromotionToogle(id).then(respuestaToogle => {
            data = {
                session: req.session ? req.session : "",
                status: respuestaToogle ? 1 : 0
            }
            console.log(data)
            getAllProductsNotPromotion()
                .then(products => {
                    data.products = products
                    res.render('admin//products//addProductPromotion', { data })
                }).catch(err => {
                    console.log(err)
                    return false
                })
        })

    },
    promotionAddView: (req, res) => {
        getAllProductsNotPromotion()
            .then(products => {
                data = {
                    session: req.session ? req.session : "",
                    products
                }
                res.render('admin//products//addProductPromotion', { data })
            }).catch(err => {
                console.log(err)
                return false
            })
    },
    listProductView: (req, res) => {
        getAllProducts()
            .then(products => {
                data = {
                    session: req.session ? req.session : "",
                    products
                }
                res.render('admin//products//listProducts', { data })
            }).catch(err => {
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
    deletePromotionView: (req, res) => {
        getAllPromotions()
            .then(products => {
                data = {
                    session: req.session ? req.session : "",
                    products
                }
                res.render('admin//products//deleteProductPromotion', { data })
            }).catch(err => {
                console.log(err)
                return false
            })
    },

    editProductView: (req, res) => {
        productId = req.params.productId
        if (isNaN(productId)) {
            return res.status(400).send({ message: 'La ruta que desea ingresar no existe' })
        }
        searchProductById(productId)
            .then(product => {
                if (product) {
                    data = {
                        product: product.dataValues,
                        session: req.session ? req.session : "",
                        status: 'ok'
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
    newsAddView: (req, res) => {
        getAllProductsNotNews()
            .then(products => {
                data = {
                    session: req.session ? req.session : "",
                    products
                }
                res.render('admin//products//addProductNews', { data })
            }).catch(err => {
                console.log(err)
                return false
            })
    },
    newsDeleteView: (req, res) => {
        getNews()
            .then(products => {
                data = {
                    session: req.session ? req.session : "",
                    products
                }
                res.render('admin//products//deleteProductPromotion', { data })
            }).catch(err => {
                console.log(err)
                return false
            })
    },
    isInNewsToogleApi: (req, res) => {
        id = req.params.productId
        if (isNaN(id)) {
            return res.status(400).send({ message: 'La ruta que desea ingresar no existe' })
        }
        isInNewsToogle(id).then(respuestaToogle => {
            data = {
                session: req.session ? req.session : "",
                status: respuestaToogle ? 1 : 0
            }
            console.log(data)
            getAllProductsNotNews()
                .then(products => {
                    data.products = products
                    res.render('admin//products//addProductNews', { data })
                }).catch(err => {
                    console.log(err)
                    return false
                })
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
    deleteProduct: (req, res) => {
        try {
            productId = req.params.productId
            if (isNaN(productId)) {
                return res.status(400).send({ message: 'La ruta que desea ingresar no existe' })
            }

            data = {
                session: req.session ? req.session : "",
                actionStatus: 'failed'
            }

            if (productId) {
                deleteOneProduct(productId)
                    .then(borrado => {
                        if (borrado) {
                            data.actionStatus = 'success'
                            getAllProducts()
                                .then(products => {
                                    data.products = products
                                    res.render('admin//products//listProducts', { data })
                                }).catch(err => {
                                    console.log(err)
                                    return false
                                })
                        }
                    })
            }
        } catch {
            res.send({ message: 'error please verify the fields' })
        }



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
            return res.render('admin//products//addProduct', {
                errors: errors.mapped(),
                old: req.body,
                data
            })
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

        productUpdate(productId, productData, (err) => {
            if (!err) {
                res.redirect(`/products/detail/${productId}`)
            }
        })

    },
    deletePromotion: (req, res) => {
        id = req.params.productId
        if (isNaN(id)) {
            return res.status(400).send({ message: 'La ruta que desea ingresar no existe' })
        }
        return isInPromotionToogle(id).then(completed => {
            if (completed) {
                getAllPromotions()
                    .then(products => {
                        data = {
                            session: req.session ? req.session : "",
                            actionStatus: 'success',
                            products
                        }
                        return res.render('admin//products//deleteProductPromotion', { data })
                    }).catch(err => {
                        data = {
                            session: req.session ? req.session : "",
                            actionStatus: 'failed',
                            products
                        }
                        return res.render('admin//products//deleteProductPromotion', { data })
                    })
            }
        })
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
}