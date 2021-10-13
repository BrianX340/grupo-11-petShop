module.exports = (sequalize, dataTypes) => {

    let { INTEGER, STRING } = dataTypes

    User = sequalize.define('User', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: STRING(50),
            allowNull: false
        },
        lastName: {
            type: STRING(50),
            allowNull: false
        },
        email: {
            type: STRING(50),
            allowNull: false
        },
        pass: {
            type: STRING(),
            allowNull: false
        },
        salt: {
            type: STRING(),
            allowNull: false
        },
        role: {
            type: INTEGER(),
            allowNull: false
        },
        tel: {
            type: INTEGER(),
            allowNull: false
        }
    }, {
        tableName: "user",
        timestamps: false
    })

    User.associate = (models) => {
        User.hasOne(models.Address)
        User.hasOne(models.Favorites)
        User.hasOne(models.Cart)
        User.hasOne(models.Avatar)

        /* User.hasOne(models.Favorites, {
            as: "favorites",
            foreignKey: "userId",
            timestamps: false
        })
        User.hasOne(models.Cart, {
            as: "cart",
            foreignKey: "userId",
            timestamps: false
        })
        User.hasOne(models.Avatar, {
            as: "avatar",
            foreignKey: "userId",
            timestamps: false
        }) */
    }

    return User
}