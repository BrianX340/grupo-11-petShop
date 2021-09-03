
const { } = require('express-validator')
const bcrypt = require('bcryptjs')
module.exports = {
    carritoCompras: (req,res) =>{
        res.render('users//carritoPage')
    },
    registroLogin: (req,res) =>{
        res.render('users//registroLogin')
    },
    //historialCompras: (req,res) =>{
    //    res.render('users//historial')
    //},
    //FAVORITOS

    profile: (req, res) => {
        let user = user.find()
    },

    processLogin: (req, res) => {
        let errors = validationResult(req)

        if(errors.isEmpty()) {
            let user = users.find(user => user.email === req.body.email)

            req.session.user = {
                id: user.id,
                user: user.user,
                name: user.name,
                last_name: user.last_name,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }

            res.locals.user = req.session.user

            /* res.send(res.session.user) */
            res.redirect('/')

        }else{
            res.render('login', {
                categories,
                errors: errors.mapped(),
            })
        }
    },

    processRegister: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let lastId = 0;

            users.forEach(user => {
                if(user.id > lastId){
                    lastId = user.id
                }
            })
            let {
                user,
                name,
                last_name,
                email,
                pass1
            } = req.body

            let newUser = {
                id : lastId + 1,
                user,
                name,
                last_name,
                email,
                pass : bcrypt.hashSync(pass1, user.pass),
                avatar : req.file ? req.file.filename : "default-image.png",
                rol: "ROL_USER",
                tel: "",
                address: "",
                pc: "",
                province: "",
                city:"",
            }

            users.push(newUser)

            writeUsersJson(users)

            res.redirect('/users/login')

        } else {
            res.render('register'), {
                categories,
                errors: errors.mapped(),
                old: req.body
            }
        }
    },
}