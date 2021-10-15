module.exports = (sequalize, dataTypes) => {

    let { INTEGER, STRING, FLOAT } = dataTypes

    Product = sequalize.define('Product', {
        id: {
            type: INTEGER(),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: STRING(50),
        stock: INTEGER(),
        buyPrice: FLOAT(),
        sellPrice: FLOAT(),
        barcode: INTEGER(),
        imgPath: INTEGER(),
        discount: INTEGER(),
        valoration: INTEGER(),
        description: STRING(),
        categoryId: INTEGER(),
        totalViews: INTEGER(),
        totalSells: INTEGER(),
        subCategoryId: INTEGER()
    }, {
        tableName: "product",
        timestamps: false
    })

    Product.associate = (models) => {
        /* Product.belongsTo(models.Avatars, {
            foreignKey: {
                name: 'avatarId',
                allowNull: false
            },
            as: 'avatar'
        })
        Product.belongsTo(models.Address, {
            foreignKey: {
                name: 'addressId',
                allowNull: false
            },
            as: 'address'
        }) */
    }

    return User
}