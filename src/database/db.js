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
    }
}