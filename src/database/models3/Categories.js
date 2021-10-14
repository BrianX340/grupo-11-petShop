module.exports = (sequalize, dataTypes) => {

    let { INTEGER, STRING } = dataTypes

    Categories = sequalize.define('Categories', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: STRING(50),
            allowNull: false
        }
    }, {
        tableName: "categories",
        timestamps: true
    })

    /* Categories.associate = (models) => {
        Categories.hasMany(models.Product, {
            as: "products",
            foreignKey: "categoryId"
        })
    } */

    return Categories
}