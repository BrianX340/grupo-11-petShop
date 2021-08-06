const express = require('express')
const router = express.Router()
const controller = require('../controllers/errorController')

router.get('/', controller.carrito)

module.exports = router