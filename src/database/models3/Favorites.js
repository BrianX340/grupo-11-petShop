const { DataTypes } = require('sequelize')

module.exports = (sequalize, dataTypes) => {

    let { INTEGER } = dataTypes

    Favorites = sequalize.define('Favorites', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER
    }, {
        tableName: "favorites",
        timestamps: true
    })

    return Favorites
}