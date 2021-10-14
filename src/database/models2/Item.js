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
        Item.belongsTo(models.Product, { foreignKey: 'itemId', as: 'item' })
    }

    return Item
}