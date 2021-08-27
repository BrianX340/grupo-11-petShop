const express = require('express')
const path = require('path');
const app = express()

/* VIEWS */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/* MIDDLEWARES */
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname.replace('src','public')));

/* ROUTERS */
errorRouter = require('./routes/errorRouter')
adminRouter = require('./routes/adminRouter')
indexRouter = require('./routes/indexRouter')
userRouter = require('./routes/userRouter')

/* ROUTES */
app.use('/', indexRouter)
app.use('/ps', userRouter)
app.use('/admin',adminRouter)

app.use('*', errorRouter)


app.listen(3000, ()=>{
    console.log('Se esta ejecutando el servidor en localhost:3000')
})
