const express = require('express')
const router = express.Router()
const { home , productDetail } = require('../controllers/indexController')//


router.get('/', home)
router.get('/product/:id', productDetail)

module.exports = router