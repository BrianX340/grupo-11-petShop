const db = require('./models')
const sequelize = require('sequelize')

module.exports = {
    getPromotions: () => {
        return db.Product.findAll({
            where: {
                isInPromotion: 1
            }
        }).then(products => {
            return products
        })
    },
    getAllProductsNotPromotion: () => {
        return db.Product.findAll({
            where: {
                isInPromotion: 0
            }
        }).then(products => {
            return products
        })
    },
    updateUser: (id, data, callback) => {

        avatarId = data.avatarId
        addressId = data.addressId
        addressData = {
            address: data.address,
            state: data.state,
            city: data.city,
            country: data.country,
            cp: data.cp,
        }

        delete data.cp
        delete data.city
        delete data.state
        delete data.address
        delete data.province
        delete data.avatarId
        delete data.addressId

        addressQuery = db.Address.update({...addressData }, { where: { id: addressId } })
        userQuery = db.User.update({...data }, { where: { id: id } })


        Promise.all([
                addressQuery,
                userQuery
            ])
            .then(([user, address]) => {
                db.User.findOne({
                    where: { id: id },
                    include: [{
                            model: Avatars,
                            as: 'avatar'
                        },
                        {
                            model: Address,
                            as: 'address'
                        }
                    ]
                }).then(user => {
                    callback(0, user)
                })
            })
            .catch(error => {
                return 0
            })
    },
    userCreate: (userData) => {

        return db.Address.create({
                address: '',
                city: '',
                state: '',
                country: '',
                cp: 0,
            })
            .then(address => {
                return db.Avatars.findOne().then(avatar => {
                    userData.addressId = address.id
                    userData.avatarId = avatar.id
                    return db.User.create(userData)
                        .then(user => {
                            if (user[0]) {
                                return user[0]
                            } else {
                                return false
                            }
                        }).catch(err => {
                            console.log('ERROR AL CREAR USUARIO', err)
                        })
                })
            }).catch(err => {
                console.log(err)
                return false
            })

    },
    productCreate: (productData) => {
        return db.Product.create({
            ...productData,
            totalViews: 0,
            totalSells: 0,
            isInPromotion: 0,
            isNews: 0,
        }).then(product => {
            return product
        }).catch(err => {
            return false
        })
    },
    searchProductsByName: (productName) => {
        //Filtramos la base de datos, devolvera los resultados que incluyan el texto recibido por parametro
        return db.Product.findAll({
            where: {
                name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + productName + '%')
            }
        }).then(search => {
            return search
        }).catch(err => {
            console.log(err)
            return false
        })
    },
    searcherByPetsubCategory: (pet, subCategory, callback) => {

        if (subCategory == 'all') {
            if (pet == 'all') {
                //retornamos la busqueda
                return db.Product.findAll({
                    limit: 60
                }).then(search => {
                    return search
                }).catch(err => {
                    console.log(err)
                    return false
                })
            } else if (pet == '1' || pet == '2') {
                //retornamos la busqueda filtrando todo lo de gato
                return db.Product.findAll({
                    limit: 60,
                    where: {
                        categoryId: pet
                    }
                }).then(search => {
                    return search
                }).catch(err => {
                    console.log(err)
                    return false
                })
            }
        } else if (subCategory => 1 && subCategory <= 4) {
            if (pet == 'all') {
                //retornamos la busqueda
                return db.Product.findAll({
                    limit: 60
                }).then(search => {
                    return search
                }).catch(err => {
                    console.log(err)
                    return false
                })
            } else if (pet == '1' || pet == '2') {
                //retornamos la busqueda filtrando todo lo de gato o perro
                return db.Product.findAll({
                    limit: 60,
                    where: {
                        categoryId: pet,
                        subCategoryId: subCategory
                    }
                }).then(search => {
                    return search
                }).catch(err => {
                    console.log(err)
                    return false
                })
            }
        }

    },
    searchProductById: (productId) => {
        try {
            //Filtramos la base de datos, devolvera los resultados que incluyan el texto recibido por parametro
            return db.Product.findByPk(+productId)
                .then(product => {
                    return product
                }).catch(err => {
                    console.log(err)
                    return false
                })
        } catch {
            return false
        }
    },
    productUpdate: (productId, productData, callback) => {
        Promise.all([
                db.Product.update({...productData }, { where: { id: productId } })
            ])
            .then(([productUpdated]) => {
                callback(0)
            }).catch(err => {
                console.log(err)
                callback(1)
            })
    },
    getAllProducts: () => {
        return db.Product.findAll({
            limit: 60
        }).then(products => {
            return products
        })
    },
    deleteOneProduct: (productId) => {
        return db.Product.destroy({
            where: {
                id: +productId
            }
        }).then(product => {
            return product
        })
    },
    getAllPromotions: () => {
        return db.Product.findAll({
            limit: 60,
            where: {
                isInPromotion: 1
            }
        }).then(products => {
            return products
        }).catch(err => {
            console.log(err)
            return false
        })
    },


    productBestSellToogle: (productId) => {
        return db.Product.findByPk(+productId)
            .then(product => {
                product.toogleBestSell()
                return true
            }).catch(err => {
                console.log(err)
                return false
            })
    },

    isInPromotionToogle: (productId) => {
        return db.Product.findByPk(+productId)
            .then(product => {
                return product.toogleInPromotion()
            }).catch(err => {
                console.log(err)
                return false
            })
    },








    getBestSells: () => {
        return dbBestSellsProducts
    },
    getAvatarList: () => {
        return Avatars.findAll()
            .then(avatares => {
                return avatares
            })
    },
    addUserFavorite: (userId, productId) => {
        dbUsers.find(user => {

            if (user.id == userId) {
                user.favorites[productId] = true

                saveDB(dbUsers, 'users.json')
            }
        })
        return true
    },
    deleteUserFavorite: (userId, productId) => {
        dbUsers.find(user => {

            if (user.id == userId) {
                delete user.favorites[productId]

                saveDB(dbUsers, 'users.json')
            }
        })
        return true
    },
    writeUsersJSON: (dbUsers) => {
        fs.writeFileSync(`./src/database/users.json`, JSON.stringify(dbUsers), "utf-8")
    },
    getUsers: () => {
        return dbUsers
    },


}