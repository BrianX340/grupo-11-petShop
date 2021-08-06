const path = require('path')

module.exports = {
    forms: (req,res) =>{
        res.sendFile(path.join(__dirname, '../views/productDetail.html'))
    }
}