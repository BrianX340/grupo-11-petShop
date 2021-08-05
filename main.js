const express = require('express')
const path = require('path')
const router = express.Router()

const app = express()
app.use(express.static(__dirname + '/public'));


/* ROUTERS */
homeRouter = require('./routes/homeRouter')
formsRouter = require('./routes/formsRouter')
carritoRouter = require('./routes/carritoRouter')

/* ROUTES */
app.use('/',homeRouter)
app.use('/forms',formsRouter)
app.use('/carrito',carritoRouter)


app.listen(3000, ()=>{
    console.log('Se esta ejecutando el servidor en localhost:3000')
})