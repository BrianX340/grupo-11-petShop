module.exports = {
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
}