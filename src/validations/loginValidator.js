const { check, body } = require('express-validator')
const db = require('../database/models')

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debes ingresar el correo electronico').bail()
    .isEmail()
    .withMessage('Debes ingresar un correo válido'),

    body('email')
    .custom((value, { req }) => {
        return db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            return user ? true : false
        }).catch(err => {
            console.log(err)
        })
    })
    .withMessage("Correo no registrado"),

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),

    body('pass')
    .custom((value, { req }) => {
        return db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            return user.verifyPassword(value)
        }).catch(err => {
            console.log(err)
        })
    })
    .withMessage('Contraseña inválida')
]