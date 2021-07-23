const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'views/mobile-home.html'))
})

app.listen(3000, ()=>{
    console.log('Se esta ejecutando el servidor en localhost:3000')
})