module.exports = (sequalize, dataTypes) => {

    let { INTEGER, STRING } = dataTypes

    SubCategories = sequalize.define('SubCategories', {
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
        tableName: "subCategories",
        timestamps: true
    })

    SubCategories.associate = (models) => {
        SubCategories.hasMany(models.Product, {
            as: "products",
            foreignKey:"subCategoryId"
        })
    }

    return SubCategories
}