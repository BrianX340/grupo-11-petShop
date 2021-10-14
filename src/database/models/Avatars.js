module.exports = (sequalize, dataTypes) => {

    let { INTEGER, STRING } = dataTypes

    Avatars = sequalize.define('Avatars', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        path: STRING(50)
    }, {
        tableName: "avatars",
        timestamps: false
    })

    Avatars.associate = (models) => {
        Avatars.hasMany(models.User, {
            foreignKey: {
                name: 'avatarId',
                allowNull: false
            },
            as: 'users'
        })
    }

    return Avatars
}