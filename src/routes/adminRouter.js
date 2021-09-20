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
let userAdminCheck = require('../middlewares/userAdminCheck')
//Views
router.get('/temporal', (req,res)=>{
    res.render("admin//adminPanelMobile")
})
router.get('/', userAdminCheck, adminPanelView)
router.get('/products/edit', userAdminCheck, editProductView)
router.get('/products/detail', userAdminCheck, detailProduct)
router.get('/products/create', userAdminCheck, createProductView)
router.get('/products/:name', userAdminCheck, searchProducts)
router.get('/products/:id', detailProductView) //los que contengan :id deben ir debajo de los que utilizen la misma ruta

router.get('/statistics', userAdminCheck, statisticsView)

router.get('/transactions', userAdminCheck, transactionView)





//Delete Products
router.delete('/products/:id', deleteProduct)

//Edit Products
router.put('/products/:id', productUploadImage.single("image"), editProduct)

//Create Products
router.post('/products', productUploadImage.single("image"), adminCrudValidator, createProduct)





//Return All Products
router.get('/allProducts', allProducts)




//Return One Product
router.get('/getOneProduct/:id', getOneProduct)





module.exports = router