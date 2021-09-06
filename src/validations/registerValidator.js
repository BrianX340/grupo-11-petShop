const {check, body} = require('express-validator');
const { getUsers } = require('../database/db')


module.exports = [
    check('userName')
    .notEmpty()
    .withMessage('Debes escribir un usuario')
    .custom(value => {
        let user = getUsers().find(user => user.userName === value)

        if(user === undefined){
            return true
        }else{
            return false
        }
    })
    .withMessage("usuario en uso"),

    check('name')
    .notEmpty()
    .withMessage('Debes escribir un nombre'),

    check('last_name')
    .notEmpty()
    .withMessage('Debes escribir un apellido'),

    check('email')
    .notEmpty()
    .withMessage('Debes escribir un email').bail()
    .isEmail()
    .withMessage('Debes escribir un email válido'),

    body('email')
    .custom(value => {
        let user = getUsers().find(user => user.email === value)

        if(user === undefined){
            return true
        }else{
            return false
        }
    })
    .withMessage("Email ya registrado"),

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
    .isLength({
        min: 6,
        max: 20
    })
    .withMessage('La contraseña debe tener como mínimo de 6 a 20 caracteres'),

    body('pass2')
    .custom((value, {req}) => value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden')

    /* check('terms')
    .isString('on')
    .withMessage('Debes aceptar los términos y condiciones') */

]