const express = require('express')
const router = express.Router()
const controller = require('../controllers/productDetailController')

router.get('/', controller.forms)

module.exports = router