const express = require('express')
const router = express.Router()
const { adminPanel, allProducts , searchProducts , createProducts , editProducts , deleteProducts } = require('../controllers/adminController')


//Principal view
router.get('/', adminPanel)


//Return All Products
router.get('/allProducts', allProducts)

//Search Products
router.get('/products/:name', searchProducts)

//Create Products
router.post('/products/:name', createProducts)

//Edit Products
router.put('/products/:id', editProducts)

//Delete Products
router.delete('/products/:id', deleteProducts)



module.exports = router