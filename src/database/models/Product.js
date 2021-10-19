module.exports = (sequalize, dataTypes) => {

    let { INTEGER, STRING, FLOAT } = dataTypes

    Product = sequalize.define('Product', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: STRING(50),
        stock: INTEGER(),
        buyPrice: FLOAT(),
        sellPrice: FLOAT(),
        barcode: INTEGER(),
        imgPath: INTEGER(),
        discount: INTEGER(),
        valoration: INTEGER(),
        description: STRING(),
        categoryId: INTEGER(),
        totalViews: INTEGER(),
        totalSells: INTEGER(),
        isBestSell: INTEGER(),
        subCategoryId: INTEGER(),
        isInPromotion: INTEGER(),
    }, {
        tableName: "product",
        timestamps: false
    })


    Product.prototype.toogleBestSell = function() {
        this.update({ isBestSell: !this.isBestSell })
    }

    Product.prototype.toogleInPromotion = function() {
        this.update({ isInPromotion: !this.isInPromotion })
    }

    return Product
}