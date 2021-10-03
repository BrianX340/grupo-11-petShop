module.exports = (sequalize, dataTypes) => {

    let { INTEGER} = dataTypes

    Favorites = sequalize.define('Favorites', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, {
        tableName: "favorites",
        timestamps: true
    })

    Favorites.associate = (models) => {
        Favorites.belongsToMany(models.Product, {
            as: "products",
            foreignKey:"favoritesId",
            through: "FavoritesProducts"
        })
        Favorites.belongsTo(models.User, {
            as: "user",
            foreignKey:{ name : "userId", allowNull : false}
        })
    }
    return Favorites
}