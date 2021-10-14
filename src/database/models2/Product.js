const { Model, DataTypes } = require('sequelize');
class Products extends Model {

    static init(connection) {

        super.init({

            name: DataTypes.STRING,
            buyPrice: DataTypes.DECIMAL,
            sellPrice: DataTypes.DECIMAL,
            price: DataTypes.DECIMAL,
            discount: DataTypes.INTEGER,
            valoration: DataTypes.INTEGER,
            stock: DataTypes.INTEGER,
            description: DataTypes.STRING,
            barcode: DataTypes.INTEGER,
            imgPath: DataTypes.STRING,
            totalSells: DataTypes.INTEGER,
            totalViews: DataTypes.INTEGER,

            dateNow: DataTypes.DATE,

        }, {
            tableName: 'products',
            sequelize: connection,
            paranoid: true,
        });
    }

    ///////////////////////////////////////

    static associate(models) {

        this.belongsToMany(models.Favorites, {
            through: FavoriteProduct,
            foreignKey: 'productId',
            as: 'favorites'
        })

        this.belongsTo(models.Categories, {
            foreignKey: 'categoryId',
            as: 'category'
        })

        this.belongsTo(models.SubCategories, {
            foreignKey: 'subCategoryId',
            as: 'category'
        })

    }
}

module.exports = Products;