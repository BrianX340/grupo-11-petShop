const path = require('path')

module.exports = {
    carrito: (req,res) =>{
        res.sendFile(path.join(__dirname, '../views/error.html'))
    }
}