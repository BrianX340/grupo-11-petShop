const {check, body} = require('express-validator');
const { getUsers } = require('../database/db')


module.exports = [
    check('user')
    .notEmpty()
    .withMessage('Debes escribir el usuario').bail()
    .isEmail()
    .withMessage('Debes escribir un usuario válido'),

    body('user')
    .custom(value => {
        let user1 = getUsers().find( user => user.user === value)

        if(user1 !== undefined){
            return true
        }else{
            return false
        }
    })
    .withMessage("User no registrado"),

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),

    body('pass')
    .custom((value, {req}) => {
        let user = users.find(user => user.email === req.body.email)

        return bcrypt.compareSync(value, user)
    }),
]