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
            hombresTotales = hombresTotales+semana.generos.hombres
            mujeresTotales = mujeresTotales+semana.generos.mujeres

        }
        return {
            hombres:hombresTotales,
            mujeres:mujeresTotales
        }

    },
    mascotaData: ()=>{
        gatosTotales = 0
        perrosTotales = 0
        for (semana of db){
            gatosTotales = gatosTotales+semana.mascotas.gatos
            perrosTotales = perrosTotales+semana.mascotas.perros

        }
        console.log(gatosTotales,perrosTotales)
        return {
            gatos:gatosTotales,
            perros:perrosTotales
        }

    },
    ventasData: ()=>{
        alimentosTotales = 0
        higieneTotales = 0
        juguetesTotales = 0
        camasTotales = 0
        for (semana of db){
            alimentosTotales = alimentosTotales+semana.ventas.alimentos
            higieneTotales = higieneTotales+semana.ventas.higiene
            juguetesTotales = juguetesTotales+semana.ventas.juguetes
            camasTotales = camasTotales+semana.ventas.camas

        }
        console.log(gatosTotales,perrosTotales)
        return {
            alimentos:alimentosTotales,
            higiene:higieneTotales,
            juguetes:juguetesTotales,
            camas:camasTotales
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