const { Model, DataTypes } = require('sequelize');

class Category extends Model {

    static init(connection) {

        super.init({

            name: DataTypes.STRING,
            parent_id: DataTypes.INTEGER,

        }, {
            tableName: 'categories',
            sequelize: connection
        });
    }

    static associate(models) {

        this.hasMany(models.Product, {
            foreignKey: 'categoryId',
            as: 'products'
        });
    }
}

module.exports = Category