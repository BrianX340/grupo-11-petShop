const express = require('express')
const router = express.Router()
const { carritoCompras , registroLogin , historialCompras, processRegister } = require('../controllers/userController')//

const loginValidator = require('../validations/loginValidator')
const registerValidator = require('../validations/registerValidator')



router.get('/cart', carritoCompras)
router.get('/login', registroLogin)
//router.get('/purchases', historialCompras)




router.post('/login', registerValidator, processRegister);

module.exports = router