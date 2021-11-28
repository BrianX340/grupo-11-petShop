const { check, body } = require('express-validator')
const db = require('../database/models')

module.exports = [

    body('name')
    .custom((value) => {
        regexName = /^[a-zA-Z]{2,}$/
        return regexName.test(value)
    })
    .withMessage("Introduzca un nombre valido"),

    body('lastName')
    .custom((value) => {
        regexLastName = /^[a-zA-Z]{2,}$/
        return regexLastName.test(value)
    })
    .withMessage("Introduzca un apellido valido"),

    body('email')
    .custom(value => {
        return db.User.findOne({
                where: {
                    email: value
                }
            })
            .then(user => {
                if (user) {
                    return Promise.reject('Este email ya está en uso')
                }
                regExEmail = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (regExEmail.test(value)) {
                    return true
                } else {
                    return Promise.reject('Introduzca un email valido')
                }
            })
    }),

    body('pass')
    .custom((value) => {
        regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/
        return regexPassword.test(value)
    })
    .withMessage("Introduzca una contraseña valida, Deberá tener letras mayúsculas, minúsculas y un número."),

    body('pass2')
    .custom((value, { req }) => value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar los términos y condiciones')

]