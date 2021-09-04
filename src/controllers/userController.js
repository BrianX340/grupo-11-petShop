const { users, writeUsersJSON } = require('../database/db')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')

module.exports = {
    carritoCompras: (req,res) =>{
        res.render('users//carritoPage')
    },
    register: (req,res) =>{
        res.render('users//register')
    },
    login: (req,res) =>{
        res.render('users//login')
    },
    //historialCompras: (req,res) =>{
    //    res.render('users//historial')
    //},
    //FAVORITOS

    profile: (req, res) =>{
        let user = user.find(user => user.id === req.session.user.id)
        res.render('userProfile', {
            user,
            /* session, req.session */
        })
    },


    /* profileEdit: (req, res) => {
        let user = users.find(user => user.id === req.params.id)

        res.render('userProfileEdit', //renderizar formulario
        categories, //para header?
        session: req.session
        )
    },
    */

   /* updateProfile: (req, res) => {
    let errors = validationResult(req)

    if (errors.isEmpty()) {
        let user = users.find(user => user.id === +req.params.id)

        let {
            name,
            last_name,
            tel,
            address,
            pc,
            province,
            city,

        } = req.body

        user.name = name
        user.last_name = last_name
        user.tel = tel
        user.address = address
        user.pc = pc
        user.province = province
        user.city = city
        user.avatar =  req.file ? req.file.filename : user.avatar

        writeUsersJSON(users)

        delete user.pass

        req.session.user = user

        res.redirect('/users/profile')

    }else{
        res.render('userProfileEdit), {
            categories,
            errors: errors.mapped(),
            old:req.body,
            session: req.session
        }
    }
   }, */
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

            /* let time = 1000 * 60 * 60 *24
            
            if(req.body.remember){
                res.cookie("usersPet", req.session.user, {expires: new Date(Date.now() + 900000), httpOnly : true})
            } */

            res.locals.user = req.session.user

            /* res.send(res.session.user) */
            res.redirect('/')

        }else{
            res.render('users//login', {
                errors: errors.mapped()
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
                /* avatar : req.file ? req.file.filename : "default-image.png", */
                rol: "ROL_USER",
                tel: "",
                address: "",
                pc: "",
                province: "",
                city:"",
            }

            users.push(newUser)

            writeUsersJSON(users)

            res.redirect('users//login')

        } else {
            res.render('users//register'), {
                errors: errors.mapped(),
                old: req.body
            }
        }
    },

    /* logout: (req, res) => {
        req.session.destroy()

        if(req.cookies.usersPet){
            res.cookie('usersPet', '', {maxAge: -1})
        }
        res.redirect('/')
    } */

}