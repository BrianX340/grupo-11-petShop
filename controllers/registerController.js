const path = require('path')

module.exports = {
    register: (req,res) =>{
        res.sendFile(path.join(__dirname, '../views/desktop-register.html'))
    }
}