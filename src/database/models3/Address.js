module.exports = (sequalize, dataTypes) => {

    let { INTEGER, STRING } = dataTypes

    Address = sequalize.define('Address', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        address: {
            type: STRING(50),
            allowNull: false
        },
        city: {
            type: STRING(50),
            allowNull: false
        },
        state: {
            type: STRING(50),
            allowNull: false
        },
        country: {
            type: STRING(50),
            allowNull: false
        },
        cp: {
            type: INTEGER(),
            allowNull: false
        }
    }, {
        tableName: "address",
        timestamps: true
    })

    return Address
}