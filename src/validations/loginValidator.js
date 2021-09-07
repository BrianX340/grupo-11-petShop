const {check, body} = require('express-validator');
const { getUsers } = require('../database/db');
let bcrypt = require('bcryptjs');


module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debes escribir el correo electronico').bail()
    .isEmail()
    .withMessage('Debes escribir un correo válido'), 

    body('email')
    .custom(value => {
        let user = getUsers().find( user => user.email === value)

        if(user !== undefined){
            return true
        }else{
            return false
        }
    })
    .withMessage("Correo no registrado"),

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),

    body('pass')
    .custom((value, {req}) => {
        let user = getUsers().find(user => user.email === req.body.email)

        return bcrypt.compareSync(value, user.pass)
    })
    .withMessage('Contraseña inválida')
]