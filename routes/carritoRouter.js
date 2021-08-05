const express = require('express')
const router = express.Router()
const controller = require('../controllers/carritoController')

router.get('/', controller.carrito)

module.exports = router