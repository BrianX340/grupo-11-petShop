const db = require('./models')

module.exports = {
    userCreate: (userData) => {
        return db.User.create(userData)
            .then(user => {
                if (user[0]) {
                    return user[0]
                } else {
                    return false
                }
            }).catch(err => {
                console.log('ERROR RARO', err)
            })
    },
    getPromotions: () => {
        return dbPromotionsProducts
    },
    getBestSells: () => {
        return dbBestSellsProducts
    },
    getAvatarList: () => {
        nombreAvatares = [...dbPetshop.avatares.gatos, ...dbPetshop.avatares.perros]
        return nombreAvatares
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

    oneProduct: (productId) => {
        getProduct = db.filter(product => product.id == productId)
        return db.Product.findOne({
            where: {
                id: productId
            }
        }).then(product => {
            if (product[0]) {
                return product[0]
            } else {
                return false
            }
        }).catch(err => {
            console.log(err)
        })


    },
    saveOneProduct: (product) => {
        return db.Product.create({
            nombre: req.body.name.trim(),
            precio: Number(req.body.price.trim()),
            descripcion: descriptionReplaced,
            descuento: Number(req.body.discount.trim()),
            subcategoria_id: Number(req.body.subcategory),
        }).then(product => {
            return product
        }).catch(err => {
            return false
        })
    },
    getAllProducts: () => {
        return db //devolvemos la base de datos completa PRODUCTOS
    },

    searchProductByName: (productName) => {
        //Filtramos la base de datos, devolvera los resultados que incluyan el texto recibido por parametro
        return db.filter((product) => product.name.toLowerCase().includes(productName.toLowerCase()))
    },

    searchOne: (id) => {
        //return db.find()
    },

    searcherByPetsubCategory: (pet, subCategory) => {
        switch (subCategory) {
            case 'all':
                if (pet == 'all') {
                    //retornamos la busqueda
                    return db
                } else if (pet == 'cat' || pet == 'dog') {
                    //retornamos la busqueda filtrando todo lo de gato
                    return db.filter(producto => producto.pet == pet)
                }
                break

            case 'Alimentos':
            case 'Higiene':
            case 'Juguetes':
            case 'Camas':
                if (pet == 'all') {
                    //retornamos la busqueda
                    return db
                } else if (pet == 'cat' || pet == 'dog') {
                    //retornamos la busqueda filtrando todo lo de gato o perro
                    return db.filter(producto => producto.subCategory == subCategory && producto.pet == pet)
                }
                break
        }
    }
}