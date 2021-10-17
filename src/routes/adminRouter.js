const express = require('express')
const router = express.Router()
const {
    allProducts,
    getOneProduct,

    editProduct,
    deleteProduct,
    createProduct,

    adminPanelView,
    editProductView,
    detailProductView,
    deleteProductView,
    createProductView,
    listProductView,

    statisticsView,
    transactionView,

} = require('../controllers/adminController')

const createProductValidator = require('../validations/createProductValidator')
    /* */
let productUploadImage = require('../middlewares/productUploadImage')
const isAdminContinue = require('../middlewares/isAdminContinue')
    //Views
router.get('/temporal', (req, res) => {
    res.render("admin//adminPanelMobile")
})
router.get('/', isAdminContinue, adminPanelView)
router.get('/products/list', isAdminContinue, listProductView)
router.get('/products/create', isAdminContinue, createProductView)
router.get('/products/edit/:productId', isAdminContinue, editProductView)
router.get('/products/:id', isAdminContinue, detailProductView) //los que contengan :id deben ir debajo de los que utilizen la misma ruta

router.get('/statistics', isAdminContinue, statisticsView)

router.get('/transactions', isAdminContinue, transactionView)





//Delete Products
router.delete('/products/:id', deleteProduct)

//Edit Products
router.put('/products/:productId', productUploadImage.single("image"), editProduct)

//Create Products
router.post('/products/create', productUploadImage.single("image"), createProductValidator, createProduct)





//Return All Products
router.get('/allProducts', allProducts)




//Return One Product
router.get('/getOneProduct/:id', getOneProduct)





module.exports = router