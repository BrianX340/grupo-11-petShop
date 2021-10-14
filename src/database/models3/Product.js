const { FLOAT } = require("sequelize")

module.exports = (sequalize, dataTypes) => {

    let { INTEGER, STRING, FLOAT } = dataTypes

    Product = sequalize.define('Product', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: STRING(50),
            allowNull: false
        },
        buyPrice: {
            type: FLOAT(),
            allowNull: false
        },
        sellPrice: {
            type: FLOAT(),
            allowNull: false
        },
        discount: {
            type: INTEGER(),
            allowNull: false
        },
        valoration: {
            type: INTEGER(),
            allowNull: false
        },
        stock: {
            type: INTEGER(),
            allowNull: false
        },
        description: {
            type: STRING(),
            allowNull: false
        },
        barcode: {
            type: INTEGER(),
            allowNull: false
        },
        imgPath: {
            type: STRING(),
            allowNull: false
        },
        totalSells: {
            type: INTEGER(),
            allowNull: false
        },
        totalViews: {
            type: INTEGER(),
            allowNull: false
        }
    }, {
        tableName: "product",
        timestamps: true
    })

    Product.associate = (models) => {
        Product.hasMany(models.Favorites, {
            as: 'favorites',
            foreignKey: 'productId'
        })

        Product.hasMany(models.Cart, {
            as: 'cart',
            foreignKey: 'productId'
        })

        /* 
        Product.belongsToMany(models.Favorites, {
            as: "favorites",
            foreignKey:"productId",
            through: "FavoritesProducts"
        })
        Product.belongsToMany(models.Item, {
            as: "item",
            foreignKey:"productId",
            through: "ItemProduct"
        })
        Product.belongsTo(models.Categories, {
            as: "products",
            foreignKey:"categoryId"
        })
        Product.belongsTo(models.SubCategories, {
            as: "products",
            foreignKey:"subCategoryId"
        })
        Product.belongsTo(models.Brand, {
            as: "products",
            foreignKey:"brandId"
        }) */
    }

    return Product
}