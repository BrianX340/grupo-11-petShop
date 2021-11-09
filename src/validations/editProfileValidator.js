const { body } = require('express-validator')
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

    body('tel')
    .custom((value) => {
        let regExTel = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/i
        return regExTel.test(value)
    })
    .withMessage("Introduzca un nombre valido"),

]