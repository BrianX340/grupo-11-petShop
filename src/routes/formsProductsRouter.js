const express = require('express')
const router = express.Router()
const controller = require('../controllers/formsProductsController')

router.get('/', controller.formularios)

module.exports = router