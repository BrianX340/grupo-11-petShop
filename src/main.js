const express = require('express')
const path = require('path');
const productDetailController = require('./controllers/productDetailController');
const router = express.Router()

console.log(__dirname.replace('src','public'))

const app = express()

/* VIEWS */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/* MIDDLEWARES */


app.use(express.static(__dirname.replace('src','public')));
app.use(express.urlencoded({extended:false}))
app.use(express.json())


/* ROUTERS */
homeRouter = require('./routes/homeRouter')
errorRouter = require('./routes/errorRouter')
formsRouter = require('./routes/formsRouter')
carritoRouter = require('./routes/carritoRouter')
profileRouter = require('./routes/profileRouter')
productDetailRouter = require('./routes/productDetailRouter')

/* ROUTES */
app.use('/',homeRouter)
app.use('/forms',formsRouter)
app.use('/carrito',carritoRouter)
app.use('/profile', profileRouter)
app.use('/productDetail', productDetailRouter)
app.use('*', errorRouter)

app.listen(3000, ()=>{
    console.log('Se esta ejecutando el servidor en localhost:3000')
})