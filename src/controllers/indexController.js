
module.exports = {
    home: (req,res) =>{
        res.render('index//home')
    },
    productDetail: (req,res) =>{
        //idProducto = req.params.id
        //res.render('index//productDetail',{producto})
        res.render('index//productDetail')
    },
}