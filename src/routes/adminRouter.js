const express = require('express')
const router = express.Router()
const { getOneProduct, adminPanel, allProducts , searchProducts , createProducts , editProducts , deleteProducts } = require('../controllers/adminController')
const productValidator = require('../validations/productCreateValidator')

let productUploadImage = require('../middlewares/productUploadImage')

//Principal view
router.get('/', adminPanel)

//Return One Product
router.get('/getOneProduct/:id', getOneProduct)

//Return All Products
router.get('/allProducts', allProducts)

//Search Products
router.get('/products/:name', searchProducts)

//Create Products
router.post('/products', productUploadImage.single("image"), productValidator, createProducts)

//Edit Products
router.put('/products/:id', editProducts)

//Delete Products
router.delete('/products/:id', deleteProducts)



module.exports = router