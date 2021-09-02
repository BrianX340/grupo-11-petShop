
const { } = require('express-validator')

module.exports = {
    carritoCompras: (req,res) =>{
        res.render('users//carritoPage')
    },
    registroLogin: (req,res) =>{
        res.render('users//registroLogin')
    },
    //historialCompras: (req,res) =>{
    //    res.render('users//historial')
    //},
    //FAVORITOS

    processRegister: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            
        } else {
            
        }
    },
}