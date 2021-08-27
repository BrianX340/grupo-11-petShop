const express = require('express')
const router = express.Router()
const { carritoCompras , registroLogin , historialCompras } = require('../controllers/userController')//


router.get('/cart', carritoCompras)
router.get('/login', registroLogin)
//router.get('/purchases', historialCompras)


module.exports = router