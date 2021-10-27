const { check, body } = require('express-validator');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Debes escribir el nombre del producto.').bail(),

    check('stock')
    .notEmpty()
    .withMessage('Debes indicar una cantidad.').bail()
    .isNumeric()
    .withMessage("Solo puedes ingresar números."),

    check('barcode')
    .notEmpty()
    .withMessage('Debes indicar un codigo de barras valido.').bail()
    .isNumeric()
    .withMessage("Solo puedes ingresar números."),

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

    check('valoration')
    .notEmpty()
    .isInt({ min: 0, max: 5 })
    .withMessage('Coloca un numero entre 1 y 5.')
    .isNumeric()
    .withMessage("Solo puedes ingresar números."),

    check('description')
    .notEmpty()
    .withMessage('Debes escribir una descripcion.').bail(),

    body('categoryId')
    .custom(value => {
        switch (value) {
            case '1':
            case '2':
                return true
                break
            default:
                return false
                break
        }
    })
    .withMessage('Debes indicar el tipo de animal correspondiente.'),


    body('subCategoryId')
    .custom(value => {
        switch (value) {
            case '1':
            case '2':
            case '3':
            case '4':
                return true
                break
            default:
                return false
                break
        }
    })
    .withMessage('Debes indicar el tipo de producto.'),



]