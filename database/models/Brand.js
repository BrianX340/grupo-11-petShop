module.exports = (sequalize, dataTypes) => {

    let { INTEGER, STRING } = dataTypes

    Brand = sequalize.define('Brand', {
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
        productsId: {
            type: INTEGER(),
            allowNull: false
        }
    }, {
        tableName: "brand",
        timestamps: true
    })

    Brand.associate = (models) => {
        Brand.hasMany(models.Product, {
            as: "products",
            foreignKey:"brandId"
        })
    }

    return Brand
}