const {check, body} = require('express-validator');
const { users } = require('../dataBase/db')
module.exports = [
    check('user')
    .notEmpty()
    .withMessage('Debes escribir el usuario').bail()
    .isEmail()
    .withMessage('Debes escribir un usuario válido'),

    body('user')
    .custom(value => {
        let user1 = users.find( user => user.user === value)

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
    body('email')
    .custom(value => {
        let user = users.find(user => user.email === value);

        if(user === undefined){
            return true
        }else{
            return false
        }
    })
    .withMessage("Correo no registrado"),

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