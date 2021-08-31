const express = require('express')
const router = express.Router()
const { home, productDetail, productsSearch } = require('../controllers/indexController')


router.get('/', home)
router.get('/product/:id', productDetail)
router.get('/search/:search', productsSearch)
router.get('/search/', productsSearch)

module.exports = router
