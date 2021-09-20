const express = require('express')
const router = express.Router()
const { detail, home, productDetail, productsSearch } = require('../controllers/indexController')
const isAdminRedir = require('../middlewares/isAdminRedir')


router.get('/', isAdminRedir, home)
/* router.get('/product/:id', productDetail) */
router.get('/search/:search', productsSearch)
router.get('/search/', productsSearch)
router.get('/products/detail/:id', detail)

module.exports = router
