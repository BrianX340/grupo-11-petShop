const express = require('express')
const router = express.Router()
const { adminPanel, allProducts , searchProducts , createProducts , editProducts , deleteProducts } = require('../controllers/adminController')

let productUploadImage = require('../middlewares/productUploadImage')

//Principal view
router.get('/', adminPanel)


//Return All Products
router.get('/allProducts', allProducts)

//Search Products
router.get('/products/:name', searchProducts)

//Create Products
router.post('/products', productUploadImage.single("image"), createProducts)

//Edit Products
router.put('/products/:id', editProducts)

//Delete Products
router.delete('/products/:id', deleteProducts)



module.exports = router