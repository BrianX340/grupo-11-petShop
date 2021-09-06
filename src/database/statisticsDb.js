let fs = require('fs');

db = JSON.parse(fs.readFileSync('./src/database/dataForStatistics.json', "utf-8"))



function saveDatabase(){
    fs.writeFileSync(`./src/database/dataForStatistics.json`, JSON.stringify(db), "utf-8")
}


module.exports = {
    generoData: ()=>{
        hombresTotales = 0
        mujeresTotales = 0
        for (semana of db){
            console.log(semana.generos.hombres)
            hombresTotales = hombresTotales+semana.generos.hombres
            mujeresTotales = mujeresTotales+semana.generos.mujeres

        }
        return {
            hombres:hombresTotales,
            mujeres:mujeresTotales
        }

    },
    saveOneProduct: (product)=>{
        try{
            db.push(product)
            saveDatabase()
            return true
        }
        catch{
            return false
        }
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
    }

}