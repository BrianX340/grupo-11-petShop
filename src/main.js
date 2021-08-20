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
productDetailRouter = require('./routes/productDetailRouter')
historialRouter = require('./routes/historialRouter')
carritoRouter = require('./routes/carritoRouter')
adminRouter = require('./routes/adminRouter')
errorRouter = require('./routes/errorRouter')
formsRouter = require('./routes/formsRouter')
homeRouter = require('./routes/homeRouter')
formsProductsRouter = require('./routes/formsProductsRouter')

/* ROUTES */
app.use('/',homeRouter)
app.use('/forms',formsRouter)
app.use('/admin', adminRouter)
app.use('/carrito',carritoRouter)
app.use('/historial', historialRouter)
app.use('/productDetail', productDetailRouter)
app.use('/formsProducts', formsProductsRouter)
app.use('*', errorRouter)

app.listen(3000, ()=>{
    console.log('Se esta ejecutando el servidor en localhost:3000')
})
