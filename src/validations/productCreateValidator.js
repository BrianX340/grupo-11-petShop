let { check } = require('express-validator');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage("El campo nombre no puede ir vacío")
    .isLength({ min: 3 })
    .withMessage("Ingrese más de 3 carácteres"),

    check('buyPrice')
    .notEmpty()
    .withMessage("El campo nombre no puede ir vacío")
    .isNumeric()
    .withMessage("Solo puedes ingresar números"),
    
    check('sellPrice')
    .notEmpty()
    .withMessage("El campo nombre no puede ir vacío")
    .isNumeric()
    .withMessage("Solo puedes ingresar números"),

    check('description')
    .notEmpty()
    .withMessage("El campo nombre no puede ir vacío"),

    check('amount')
    .notEmpty()
    .withMessage("El campo nombre no puede ir vacío")
    .isNumeric()
    .withMessage("Solo puedes ingresar números"),

    check('barcode')
    .notEmpty()
    .withMessage("El campo nombre no puede ir vacío")
    .isNumeric()
    .withMessage("Solo puedes ingresar números"),

    check('mark')
    .notEmpty()
    .withMessage("El campo nombre no puede ir vacío"),

    check('category')
    .notEmpty()
    .withMessage("El campo nombre no puede ir vacío"),

    check('subCategory')
    .notEmpty()
    .withMessage("El campo nombre no puede ir vacío"),

]