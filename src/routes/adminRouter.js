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

//Views
router.get('/temporal', (req,res)=>{
    res.render("admin//adminPanelMobile")
})
router.get('/', adminPanelView)
router.get('/products/edit', editProductView)
router.get('/products/detail', detailProduct)
router.get('/products/create', createProductView)
router.get('/products/:name', searchProducts)
router.get('/products/:id', detailProductView) //los que contengan :id deben ir debajo de los que utilizen la misma ruta

router.get('/statistics', statisticsView)

router.get('/transactions', transactionView)





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