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
        isNews: INTEGER(),
        subCategoryId: INTEGER(),
        isInPromotion: INTEGER(),
    }, {
        tableName: "product",
        timestamps: false
    })


    Product.prototype.toogleBestSell = function() {
        this.update({ isNews: !this.isNews })
    }

    Product.prototype.toogleInPromotion = function() {
        return this.update({ isInPromotion: !this.isInPromotion }).then(() => {
            return 1
        }).catch(err => {
            return 0
        })
    }

    Product.prototype.toogleInNews = function() {
        return this.update({ isNews: !this.isNews }).then(() => {
            return 1
        }).catch(err => {
            return 0
        })
    }

    return Product
}