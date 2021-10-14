module.exports = (sequalize, dataTypes) => {

    let { INTEGER, FLOAT } = dataTypes

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
        Favorites.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'users'
        });

        Favorites.belongsToMany(models.Product, {
            through: FavoriteProduct,
            foreignKey: 'favoriteId',
            as: 'products'
        });
    }

    return Favorites
}