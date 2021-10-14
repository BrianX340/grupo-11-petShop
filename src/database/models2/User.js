const { DataTypes } = require('sequelize');
//const bcrypt = require('bcryptjs');

module.exports = (sequalize, dataTypes) => {

    let { INTEGER, FLOAT } = dataTypes

    User = sequalize.define('User', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        name: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        pass: DataTypes.STRING,
        role: DataTypes.BOOLEAN,
        tel: DataTypes.INTEGER,
        addressId: DataTypes.INTEGER,
        favoritesId: DataTypes.INTEGER,
        cartId: DataTypes.INTEGER,
        avatarId: DataTypes.INTEGER,
        reset_password_token: DataTypes.STRING,
        reset_password_expires: DataTypes.DATE,
    }, {
        tableName: "user",
        timestamps: true
    })

    User.associate = (models) => {
        User.hasMany(models.AddressModel, {
            foreignKey: 'userId',
            as: 'addresses'
        });

        User.hasMany(models.OrderModel, {
            foreignKey: 'userId',
            as: 'orders'
        });
    }

    /* checkPassword(password) {

        return bcrypt.compare(password, this.password);
    } */

    return User
}