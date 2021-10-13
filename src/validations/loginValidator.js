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
            return user ? bcrypt.compareSync(value, user.dataValues.pass) : false
        }).catch(err => {
            console.log(err)
        })
    })
    .withMessage('Contraseña inválida')
]