let fs = require('fs');

db = JSON.parse(fs.readFileSync('./src/database/products.json', "utf-8"))



function saveDatabase(){
    fs.writeFileSync(`./src/database/products.json`, JSON.stringify(db), "utf-8")
}


module.exports = {
    oneProduct: (productId)=>{
        getProduct = db.filter(product => product.id == productId)
        if (getProduct[0]){
            return getProduct[0]
        } else {
            return false
        }
    },
    saveOneProduct: (product)=>{
        db.push(product)
        saveDatabase()
    },
    getAllProducts: ()=>{
        return db //devolvemos la base de datos completa PRODUCTOS
    },
    
    searchProductByName: (productName)=>{
        //Filtramos la base de datos, devolvera los resultados que incluyan el texto recibido por parametro
        return db.filter((product)=> product.name.toLowerCase().includes(productName.toLowerCase()) )
    },

    searchOne: (id)=>{
        //return db.find()
    },

    saveDb: ()=>{
        saveDatabase()
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