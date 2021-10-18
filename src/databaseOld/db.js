let fs = require('fs');
const path = require('path')

db = JSON.parse(fs.readFileSync('./src/database/products.json', "utf-8"))
dbUsers = JSON.parse(fs.readFileSync('./src/database/users.json', "utf-8"))
dbPetshop = JSON.parse(fs.readFileSync('./src/database/petshop.json', "utf-8"))[0]

dbBestSellsProducts = JSON.parse(fs.readFileSync('./src/database/bestSellsProducts.json', "utf-8"))
dbPromotionsProducts = JSON.parse(fs.readFileSync('./src/database/promotionsProducts.json', "utf-8"))


function saveDB(db, nameFile){   
    fs.writeFileSync(path.join(__dirname, `../database/${nameFile}`), JSON.stringify(db), "utf-8")
}


module.exports = {
    getPromotions: ()=>{
        return dbPromotionsProducts
    },
    getBestSells: ()=>{
        return dbBestSellsProducts
    },
    getAvatarList: ()=>{
        nombreAvatares = [...dbPetshop.avatares.gatos,...dbPetshop.avatares.perros]
        return nombreAvatares
    },
    addUserFavorite : (userId, productId) => {
        dbUsers.find(user => {
           
            if (user.id == userId) {
                user.favorites[productId] = true 
                
                saveDB(dbUsers, 'users.json')
            } 
        })
        return true
    },
    deleteUserFavorite : (userId, productId) => {
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

    oneProduct: (productId)=>{
        getProduct = db.filter(product => product.id == productId)
        if (getProduct[0]){
            return getProduct[0]
        } else {
            return false
        }
    },
    saveOneProduct: (product)=>{
        try{
            db.push(product)
            saveDB(db, 'products.json')
            return true
        }
        catch{
            return false
        }
    },
    getAllProducts: ()=>{
        return db //devolvemos la base de datos completa PRODUCTOS
    },
    
    searchProductsByName: (productName)=>{
        //Filtramos la base de datos, devolvera los resultados que incluyan el texto recibido por parametro
        return db.filter((product)=> product.name.toLowerCase().includes(productName.toLowerCase()) )
    },

    searchOne: (id)=>{
        //return db.find()
    },

    searcherByPetsubCategory: (pet,subCategory)=>{
        switch (subCategory){
            case 'all':
                if (pet == 'all'){
                    //retornamos la busqueda
                    return db
                } else if (pet == 'cat' || pet == 'dog'){
                    //retornamos la busqueda filtrando todo lo de gato
                    return db.filter(producto => producto.pet == pet)
                }
                break
            
            case 'Alimentos':
            case 'Higiene':
            case 'Juguetes':
            case 'Camas':
                if (pet == 'all'){
                    //retornamos la busqueda
                    return db
                } else if (pet == 'cat' || pet == 'dog'){
                    //retornamos la busqueda filtrando todo lo de gato o perro
                    return db.filter(producto => producto.subCategory == subCategory && producto.pet == pet)
                }
                break
        }
    }
}