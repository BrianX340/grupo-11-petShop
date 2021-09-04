const {check, body} = require('express-validator');


module.exports = [


    check('userName')
    .notEmpty()
    .withMessage('Debes escribir el usuario'),

    check('name')
    .notEmpty()
    .withMessage('Debes escribir un Nombre'),

    check('last_name')
    .notEmpty()
    .withMessage('Debes escribir un Apellido'),
/* 
    body('email')
    .notEmpty()
    .withMessage('Debes escribir un email').bail()
    .isEmail()
    .withMessage('Debes escribir un email válido')
    .custom(value => {
        let user = users.find(user => user.email === value);

        if(user === undefined){
            return false
        }else{
            return true
        }
    })
    .withMessage("Correo no registrado"), */

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
    .isLength({
        min: 6,
        max: 20
    })
    .withMessage('La contraseña debe tener entre 6 y 20 caracteres'),

    body('pass2')
    .custom((value, {req}) => value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    /* check('terms')
    .isString('on')
    .withMessage('Debes aceptar los términos y condiciones') */

]