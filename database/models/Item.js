module.exports = (sequalize, dataTypes) => {

    let { INTEGER, STRING, FLOAT } = dataTypes

    Item = sequalize.define('Item', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        productId: {
            type: INTEGER(),
            allowNull: false
        },
        qty: {
            type: INTEGER(),
            allowNull: false
        },
        price: {
            type: FLOAT(),
            allowNull: false
        },
        title: {
            type: STRING(100),
            allowNull: false
        },
        productCode: {
            type: INTEGER(),
            allowNull: false
        }
    }, {
        tableName: "item",
        timestamps: true
    })

    Item.associate = (models) => {
        Item.belongsTo(models.Cart, {
            as: "items",
            foreignKey:"cartId",
            timestamps: false
        })
        Item.belongsToMany(models.Product, {
            as: "products",
            foreignKey:"itemId",
            through: "ItemProduct"
        })
    }

    return Item
}