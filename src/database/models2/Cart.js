module.exports = (sequalize, dataTypes) => {

    let { INTEGER, FLOAT } = dataTypes

    Cart = sequalize.define('Cart', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        totalQty: {
            type: FLOAT(),
            allowNull: false
        },
        totalCost: {
            type: FLOAT(),
            allowNull: false
        }
    }, {
        tableName: "cart",
        timestamps: true
    })

    Cart.associate = (models) => {
        Cart.hasOne(models.User, { foreignKey: 'cartId' })
    }

    return Cart
}