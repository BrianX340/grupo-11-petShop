const { DataTypes } = require('sequelize');

module.exports = (sequalize) => {

    Brand = sequalize.define('Brand', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: DataTypes.STRING
    }, {
        tableName: "brand",
        timestamps: true
    })

    Brand.associate = (models) => {
        Brand.hasMany(models.User, {
            foreignKey: 'brandId',
            as: 'users'
        })
    }

    return Brand
}