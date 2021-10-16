const { check, body } = require('express-validator')
const db = require('../database/models')
let bcrypt = require('bcryptjs')

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

    body('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
    .custom((pass, { req }) => {
        return db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then((user) => {
            return user.verifyPassword(pass)
        }).catch(err => {
            console.log(err)
            return false
        })
    })
    .withMessage('Contraseña inválida')
]