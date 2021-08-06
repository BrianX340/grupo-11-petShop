const path = require('path')

module.exports = {
    error: (req,res) =>{
        res.sendFile(path.join(__dirname, '../views/error.html'))
    }
}