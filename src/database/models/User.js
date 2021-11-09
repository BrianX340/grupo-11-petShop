let bcrypt = require('bcryptjs')
const db = require('.')

module.exports = (sequalize, dataTypes) => {

    let { INTEGER, STRING } = dataTypes

    User = sequalize.define('User', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        lastName: STRING(50),
        email: STRING(50),
        name: STRING(50),
        role: INTEGER(),
        pass: STRING(),
        tel: INTEGER(),
        avatarId: INTEGER(),
        addressId: INTEGER()
    }, {
        tableName: "user",
        timestamps: false
    })

    User.associate = (models) => {
        User.belongsTo(models.Avatars, {
            foreignKey: {
                name: 'avatarId',
                allowNull: false
            },
            as: 'avatar'
        })
        User.belongsTo(models.Address, {
            foreignKey: {
                name: 'addressId',
                allowNull: false
            },
            as: 'address'
        })
    }

    User.prototype.verifyPassword = function(password) {
        return bcrypt.compareSync(password, this.pass)
    }

    /* User.prototype.updateName = function (newName) {
        this.update({ name: newName })
    } */

    return User
}