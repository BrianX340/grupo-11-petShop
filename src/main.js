const express = require('express')
const path = require('path');
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
adminRouter = require('./routes/adminRouter')
carritoRouter = require('./routes/carritoRouter')
historialRouter = require('./routes/historialRouter')
formsProductsRouter = require('./routes/formsProductsRouter')
productDetailRouter = require('./routes/productDetailRouter')

/* ROUTES */
app.use('/formsProducts', formsProductsRouter)
app.use('/productDetail', productDetailRouter)
app.use('/historial', historialRouter)
app.use('/carrito',carritoRouter)
app.use('/forms',formsRouter)
app.use('/admin',adminRouter)
app.use('/',homeRouter)
app.use('*', errorRouter)

app.listen(3000, ()=>{
    console.log('Se esta ejecutando el servidor en localhost:3000')
})
