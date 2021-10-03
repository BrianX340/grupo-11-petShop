module.exports = (sequalize, dataTypes) => {

    let { INTEGER, STRING } = dataTypes

    return sequalize.define('Users', {
        id: {
            type: INTEGER(6),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userName: {
            type: STRING(),
            allowNull: false
        },
        name: {
            type: STRING(),
            allowNull: false
        },
        last_name: {
            type: STRING(),
            allowNull: false
        },
        email: {
            type: STRING(),
            allowNull: false
        },
        pass: {
            type: STRING(),
            allowNull: false
        },
        terms: {
            type: STRING(),
            allowNull: false
        },
        rol: {
            type: STRING(),
            allowNull: false
        },
        avatar: {
            type: STRING(),
            allowNull: false
        },
        tel: {
            type: INTEGER(),
            allowNull: false
        },
        address: {
            type: STRING(),
            allowNull: false
        },
        province: {
            type: STRING(),
            allowNull: false
        },
        city: {
            type: STRING(),
            allowNull: false
        },
        favorites: {
            type: INTEGER(),
            allowNull: false
        },
        carrito: {
            type: INTEGER()
        }
    }, {
        tableName: "usuarios",
        timestamps: true
    })
}