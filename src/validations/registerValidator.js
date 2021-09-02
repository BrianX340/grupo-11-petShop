const {check, body} = require('express-validator');

module.exports = [
    check('user')
    .notEmpty()
    .withMessage('Debes escribir el usuario').bail()
    .isEmail()
    .withMessage('Debes escribir un usuario válido'),

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),


    check('user1')
    .notEmpty()
    .withMessage('Debes escribir el usuario'),

    check('name1')
    .notEmpty()
    .withMessage('Debes escribir un Nombre'),

    check('last_name1')
    .notEmpty()
    .withMessage('Debes escribir un Apellido'),

    check('email1')
    .notEmpty()
    .withMessage('Debes escribir un email').bail()
    .isEmail()
    .withMessage('Debes escribir un email válido'),

    check('pass1')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
    .isLength({
        min: 6,
        max: 20
    })
    .withMessage('La contraseña debe tener entre 6 y 20 caracteres'),

    body('pass2')
    .custom((value, {req}) => value !== req.body.pass1 ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar los términos y condiciones')

]