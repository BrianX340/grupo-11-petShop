const { DataTypes } = require('sequelize');

module.exports = (sequalize) => {

    Avatar = sequalize.define('Avatar', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        path: DataTypes.STRING
    }, {
        tableName: "avatars",
        timestamps: true
    })

    Avatar.associate = (models) => {
        Avatar.hasMany(models.User, {
            foreignKey: 'avatarId',
            as: 'users'
        })
    }

    return Avatar
}