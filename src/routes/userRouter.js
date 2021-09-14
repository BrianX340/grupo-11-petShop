const express = require('express')
const router = express.Router()
const { carritoCompras, 
    historialCompras, 
    processRegister, 
    processLogin, 
    register, 
    login, 
    profile, 
    logout, 
    profileEdit, 
    updateProfile } = require('../controllers/userController')


const loginValidator = require('../validations/loginValidator')
const registerValidator = require('../validations/registerValidator')

const userSessionCheck = require('../middlewares/userSessionCheck')


router.get('/cart', carritoCompras)
//router.get('/purchases', historialCompras)

/* Registro */
router.get('/register', register);
router.post('/register', registerValidator, processRegister);

/* Inicio de sesion */
router.get('/login', login);
router.post('/login', loginValidator, processLogin);

router.get('logout', userSessionCheck, logout)


/* Perfil de usuario */

router.get('/profile', userSessionCheck, profile);
router.get('/profile/edit/:id', userSessionCheck, profileEdit); //me renderiza el formulario 
router.put('/profile/edit/:id', /* uploadUserAvatar.single('avatar') ,*/ updateProfile);

module.exports = router