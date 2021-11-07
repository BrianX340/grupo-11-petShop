const { check, body } = require('express-validator');

module.exports = [

    body('name')
    .custom((value) => {
        regexProductName = /^[a-zA-Z0-9\s]*$/
        return regexProductName.test(value)
    })
    .withMessage("Introduzca un nombre de producto valido"),

    body('stock')
    .notEmpty()
    .withMessage('Debes indicar una cantidad.').bail()
    .custom((value) => {
        regexProductStock = /^[0-9]*$/
        return regexProductStock.test(value)
    })
    .withMessage("Introduzca un numero de producto valido"),


    body('barcode')
    .notEmpty()
    .withMessage('Debes indicar un codigo de barras.').bail()
    .custom((value) => {
        regexBarcode = /^[0-9]*$/
        return regexBarcode.test(value)
    })
    .withMessage("Introduzca un codigo de barras valido"),


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


    body('description')
    .notEmpty()
    .withMessage('Debes escribir una descripcion.').bail()
    .custom((value) => {
        regexDescription = /^[\w\s]*$/
        return regexDescription.test(value)
    })
    .withMessage("Introduzca un codigo de barras valido"),

    check('categoryId')
    .isNumeric()
    .isInt({ min: 1, max: 2 })
    .withMessage('Debes indicar el tipo de animal correspondiente.'),

    body('subCategoryId')
    .isNumeric()
    .isInt({ min: 1, max: 4 })
    .withMessage('Debes indicar el tipo de producto.'),

]