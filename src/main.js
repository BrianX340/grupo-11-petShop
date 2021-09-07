var methodOverride = require('method-override');
const express = require('express')
const path = require('path');
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

/* VIEWS */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/* MIDDLEWARES */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname.replace('src','public')));
app.use(cookieParser()); 
app.use(session(
    {secret: "mySecret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}
));

/* ROUTERS */
adminRouter = require('./routes/adminRouter')
indexRouter = require('./routes/indexRouter')
userRouter = require('./routes/userRouter')

/* ROUTES */
app.use('/', indexRouter)
app.use('/ps', userRouter)
app.use('/admin',adminRouter)


app.use((req,res, next)=>{
    res.status(404).render('index//error')
    next()
})


app.listen(3000, ()=>{
    console.log('Se esta ejecutando el servidor en: localhost:3000')
})