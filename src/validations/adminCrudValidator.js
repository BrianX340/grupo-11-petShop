/* module.exports = {
    createProductValidator: (req,res,next)=>{
        let {
            name,
            buyPrice,
            sellPrice,
            description,
            amount,
            barcode,
            mark,
            category,
            subCategory,
        } = req.body

        errors = []

        for (atribute of product){

        }

        next()
    }
} */

const { check, body } = require('express-validator');
//const { product } = require('../dataBase/db') 
module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Debes escribir el nombre del producto.').bail(),

    check('buyPrice')
    .notEmpty()
    .withMessage('Coloca un monto.')
    .isNumeric()
    .withMessage("Solo puedes ingresar números."),

    check('sellPrice')
    .notEmpty()
    .withMessage('Coloca un monto.')
    .isNumeric()
    .withMessage("Solo puedes ingresar números."),

    check('description')
    .notEmpty()
    .withMessage('Debes escribir una descripcion.').bail(),

    check('amount')
    .notEmpty()
    .withMessage('Debes indicar una cantidad.').bail()
    .isNumeric()
    .withMessage("Solo puedes ingresar números."),

    check('barcode')
    .notEmpty()
    .withMessage('Debes indicar un codigo de barras valido.').bail()
    .isNumeric()
    .withMessage("Solo puedes ingresar números."),

    check('mark')
    .notEmpty()
    .withMessage('Debes indicar la marca del producto.').bail(),

    body('category')
    .custom(value => {
        switch (value) {
            case '0':
            case '1':
                return true
                break
            default:
                return false
                break
        }
    })
    .withMessage('Debes indicar el tipo de animal correspondiente.'),


    body('subCategory')
    .custom(value => {
        switch (value) {
            case 'alimentos':
            case 'higiene':
            case 'juguetes':
            case 'camas':
                return true
                break
            default:
                return false
                break
        }
    })
    .withMessage('Debes indicar el tipo de producto.'),

]