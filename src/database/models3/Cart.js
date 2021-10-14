const { DataTypes } = require('sequelize')

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
        },
        userId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER
    }, {
        tableName: "cart",
        timestamps: true
    })

    return Cart
}