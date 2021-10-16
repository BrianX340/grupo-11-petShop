const { check, body } = require('express-validator');
const db = require('../database/models')

module.exports = [

    check('name')
    .notEmpty()
    .withMessage('Debes escribir un nombre')
    .isLength({
        min: 3,
    })
    .withMessage('El nombre debe tener como mínimo 3 caracteres'),

    check('lastName')
    .notEmpty()
    .withMessage('Debes escribir un apellido'),

    check('email')
    .notEmpty()
    .withMessage('Debes escribir un email').bail()
    .isEmail()
    .withMessage('Debes escribir un email válido'),

    body('email')
    .custom((value, { req }) => {
        return db.User.findOne({
            where: {
                email: value
            }
        }).then(user => {
            return !user ? true : false
        }).catch(err => {
            console.log(err)
        })
    })
    .withMessage("Email en uso"),

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir una contraseña')
    .isLength({
        min: 6,
        max: 20
    })
    .withMessage('La contraseña debe tener como mínimo de 6 a 20 caracteres'),

    body('pass2')
    .custom((value, { req }) => value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar los términos y condiciones')

]