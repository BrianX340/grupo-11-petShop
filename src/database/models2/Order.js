module.exports = (sequalize, dataTypes) => {

    let { INTEGER } = dataTypes

    return sequalize.define('Order', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cartId: {
            type: INTEGER(),
            allowNull: false
        },
        userId: {
            type: INTEGER(),
            allowNull: false
        },
        address: {
            type: INTEGER(),
            allowNull: false
        },
        paymentId: {
            type: INTEGER(),
            allowNull: false
        },
        delivered: {
            type: INTEGER(),
            allowNull: false
        }
    }, {
        tableName: "order",
        timestamps: true
    })
}