module.exports = (sequalize, dataTypes) => {

    let { INTEGER } = dataTypes

    return sequalize.define('ItemProduct', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        itemId: {
            type: INTEGER(),
            allowNull: false
        },
        productId: {
            type: INTEGER(),
            allowNull: false
        }
    }, {
        timestamps: false
    })
    
}