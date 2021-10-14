const { Model, DataTypes } = require('sequelize');

class FavoriteProduct extends Model {

    static init(connection) {

        super.init({
            favoriteId: DataTypes.INTEGER,
            productId: DataTypes.INTEGER
        }, {
            tableName: 'FavoriteProduct',
            modelName: 'FavoriteProduct',
            sequelize: connection
        })
    }
}

module.exports = FavoriteProduct;