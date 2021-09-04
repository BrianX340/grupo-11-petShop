const express = require('express')
const router = express.Router()
const { carritoCompras, historialCompras, processRegister, processLogin, register, login } = require('../controllers/userController')


const loginValidator = require('../validations/loginValidator')
const registerValidator = require('../validations/registerValidator')




router.get('/cart', carritoCompras)
/* router.get('/login', registroLogin) */
//router.get('/purchases', historialCompras)

router.get('/register', register);
router.post('/register', registerValidator, processRegister);

router.get('/login', login);
router.post('/login', loginValidator, processLogin);


/* router.get('/profile/edit/:id', profileEdit) //me renderiza el formulario */
/* router.put('/profile/edit/:id', uploadUserAvatar.single('avatar),updateProfile) */

module.exports = router