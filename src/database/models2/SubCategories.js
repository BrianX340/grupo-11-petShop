const { Model, DataTypes } = require('sequelize');

class SubCategory extends Model {

    static init(connection) {

        super.init({

            name: DataTypes.STRING,

        }, {
            tableName: 'subcategories',
            sequelize: connection
        });
    }

    static associate(models) {

        this.hasMany(models.Product, {
            foreignKey: 'subCategoryId',
            as: 'products'
        });
    }
}

module.exports = SubCategory