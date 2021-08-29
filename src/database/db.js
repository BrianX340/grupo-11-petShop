let fs = require('fs');

db = JSON.parse(fs.readFileSync('./src/database/db.json', "utf-8"))



module.exports = {
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
        fs.writeFileSync(`./src/database/db.json`, JSON.stringify(dataBase), "utf-8")
    },
    searcherByPetTag: (pet,tag)=>{
        switch (tag){
            case 'all':
                if (pet == 'all'){
                    //retornamos la busqueda
                    return db
                } else if (pet == 'cat' || pet == 'dog'){
                    //retornamos la busqueda filtrando todo lo de gato
                    return db.filter(producto => producto.pet == pet)
                }
                break
            
            case 'food':
            case 'hygiene':
            case 'toys':
            case 'bed':
                if (pet == 'all'){
                    //retornamos la busqueda
                    return db
                } else if (pet == 'cat' || pet == 'dog'){
                    //retornamos la busqueda filtrando todo lo de gato o perro
                    return db.filter(producto => producto.tag == tag && producto.pet == pet)
                }
                break
        }
    }
}