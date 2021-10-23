const express = require('express')
const router = express.Router()
const {
    allProducts,
    getOneProduct,

    editProduct,
    createProduct,
    deleteProduct,
    deletePromotion,

    promotionView,
    adminPanelView,
    listProductView,
    editProductView,
    detailProductView,
    deleteProductView,
    createProductView,
    deletePromotionView,

    statisticsView,
    transactionView,

} = require('../controllers/adminController')

const createProductValidator = require('../validations/createProductValidator')
    /* */
let productUploadImage = require('../middlewares/productUploadImage')
const isAdminContinue = require('../middlewares/isAdminContinue')
const { productBestSellToogle, isInPromotionToogle } = require('../database/db')
    //Views
router.get('/temporal', (req, res) => {
    res.render("admin//adminPanelMobile")
})
router.get('/', isAdminContinue, adminPanelView)
router.get('/products/promotion', isAdminContinue, promotionView)
router.get('/products/promotion/delete', isAdminContinue, deletePromotionView)
router.get('/products/list', isAdminContinue, listProductView)
router.get('/products/create', isAdminContinue, createProductView)
router.get('/products/edit/:productId', isAdminContinue, editProductView)
router.get('/products/:id', isAdminContinue, detailProductView) //los que contengan :id deben ir debajo de los que utilizen la misma ruta
router.get('/statistics', isAdminContinue, statisticsView)
router.get('/transactions', isAdminContinue, transactionView)







//Delete Products
router.delete('/products/:productId', deleteProduct)
router.delete('/products/promotion/:productId', deletePromotion)

//Edit Products
router.put('/products/:productId', productUploadImage.single("image"), isAdminContinue, editProduct)

//Create Products
router.post('/products/create', productUploadImage.single("image"), isAdminContinue, createProductValidator, createProduct)

//Toogle BestSells
router.put('/api/bestsell/:productId', isAdminContinue, productBestSellToogle)
    //Toogle isInPromotion
router.put('/api/isinpromotion/:productId', isAdminContinue, isInPromotionToogle)






//Return All Products
router.get('/allProducts', allProducts)




//Return One Product
router.get('/getOneProduct/:id', getOneProduct)





module.exports = router