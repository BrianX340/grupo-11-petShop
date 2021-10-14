module.exports = (sequalize, dataTypes) => {

    let { INTEGER, STRING } = dataTypes

    Avatar = sequalize.define('Avatar', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        path: {
            type: STRING(),
            allowNull: false
        }
    }, {
        tableName: "avatar",
        timestamps: true
    })

    return Avatar
}