const express = require('express')
const router = express.Router()
const controller = require('../controllers/historialController')

router.get('/', controller.historial)

module.exports = router