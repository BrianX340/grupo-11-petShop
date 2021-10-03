module.exports = (sequalize, dataTypes) => {

    let { INTEGER } = dataTypes

    return sequalize.define('FavoritesProducts', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        favoriteId: {
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