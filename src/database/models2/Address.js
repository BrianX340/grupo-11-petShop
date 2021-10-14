const { DataTypes } = require('sequelize');

module.exports = (sequalize) => {

    Address = sequalize.define('Address', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        country: DataTypes.STRING,
        cp: DataTypes.INTEGER

    }, {
        tableName: "address",
        timestamps: true
    })

    Address.associate = (models) => {
        Address.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });
    }

    return Address
}