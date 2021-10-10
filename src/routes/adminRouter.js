const express = require('express')
const router = express.Router()
const {
    allProducts,
    getOneProduct,
    searchProducts,

    editProduct,
    detailProduct,
    deleteProduct,
    createProduct,

    adminPanelView,
    editProductView,
    detailProductView,
    deleteProductView,
    createProductView,

    statisticsView,
    transactionView,

} = require('../controllers/adminController')

const adminCrudValidator = require('../validations/adminCrudValidator')
    /* */
let productUploadImage = require('../middlewares/productUploadImage')
const isAdminContinue = require('../middlewares/isAdminContinue')
    //Views
router.get('/temporal', (req, res) => {
    res.render("admin//adminPanelMobile")
})
router.get('/', isAdminContinue, adminPanelView)
router.get('/products/edit', isAdminContinue, editProductView)
router.get('/products/detail', isAdminContinue, detailProduct)
router.get('/products/create', isAdminContinue, createProductView)
router.get('/products/:name', isAdminContinue, searchProducts)
router.get('/products/:id', isAdminContinue, detailProductView) //los que contengan :id deben ir debajo de los que utilizen la misma ruta

router.get('/statistics', isAdminContinue, statisticsView)

router.get('/transactions', isAdminContinue, transactionView)





//Delete Products
router.delete('/products/:id', deleteProduct)

//Edit Products
router.put('/products/:id', productUploadImage.single("image"), editProduct)

//Create Products
router.post('/products/create', productUploadImage.single("image"), adminCrudValidator, createProduct)





//Return All Products
router.get('/allProducts', allProducts)




//Return One Product
router.get('/getOneProduct/:id', getOneProduct)





module.exports = router