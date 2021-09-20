const { getUsers, writeUsersJSON, getAvatarList } = require('../database/db')
const { validationResult } = require('express-validator')
let bcrypt = require('bcryptjs')

module.exports = {
    carritoCompras: (req,res) =>{
        res.render('users//carritoPage',
        {session: req.session ? req.session : ""})
    },
    /* Formulario de registro */
    register: (req,res) =>{
        res.render('users//register',
        {session: req.session ? req.session : ""})
    },
    /* Formulario de inicio de sesión */
    login: (req,res) =>{
        res.render('users//login',
        {session: req.session ? req.session : ""})
    },
    //historialCompras: (req,res) =>{
    //    res.render('users//historial')
    //},
    //FAVORITOS


    /* Perfil de usuario */
    profile: (req, res) =>{
        let user = getUsers().find(user => user.id === req.session.user.id)
        res.render('users//userProfile', {
            user,
            session: req.session ? req.session : ""
        })
    },

    /* Edición de perfil */
    profileEdit: (req, res) => {
        let user = getUsers().find(user => user.id === req.session.user.id)
        /* res.send(user) */
        res.render('users//editProfile', //renderizar formulario
            {
                user,
                session: req.session ? req.session : "",
                avatarList: getAvatarList()
            }
        )
    },
    
    /* actualización de perfil */
    updateProfile: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let user = getUsers().find(user => user.id === +req.params.id)
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
            user.avatar = req.file ? req.file.filename : user.avatar 

            writeUsersJSON(getUsers())


            req.session.user = user
            

            res.redirect('/ps/profile')

        }else{
            res.render('users/editProfile', {
                errors: errors.mapped(),
                old:req.body,
                session: req.session ? req.session : ""
            })
        }
    },
    processLogin: (req, res) => {
        let errors = validationResult(req)

        if(errors.isEmpty()) {
            let user = getUsers().find(user => user.email === req.body.email)
            

            req.session.user = {
                id: user.id,
                user: user.userName,
                name: user.name,
                last_name : user.last_name,
                email: user.email,
                avatar: user.avatar,
                favorites : user.favorites,
                rol: user.rol
            }

            let time = 1000 * 60 * 60 *24
            
             if(req.body.remember){
                res.cookie("usersPet", req.session.user, {expires: new Date(Date.now() + time), httpOnly : true})
            }   

            res.locals.user = req.session.user

           /*  res.send(req.session.user) */

            res.redirect('/')  

        }else{
            res.render('users//login', {
                errors: errors.mapped(),
                session: req.session ? req.session : ""
            })
        }
    },

    processRegister: (req, res) => {
        let errors = validationResult(req)
        
        if (errors.isEmpty()) {
            
            let lastId = 0;
            
            getUsers().forEach(user => {
                if(user.id > lastId){
                    lastId = user.id
                }
            })

            let newUser = {
                id: lastId +1,
                ...req.body,
                rol: "USER",
                avatar: "cat01.svg",
                tel: "",
                address: "",
                pc: "",
                province: "",
                city:"",
                favorites: {}
            }
            delete newUser.pass2
            newUser.pass = bcrypt.hashSync(newUser.pass, 10)
            

            getUsers().push(newUser)

            writeUsersJSON(getUsers())

            res.redirect('/ps/login')

        } else {
            res.render('users//register', {
                errors: errors.mapped(),
                old: req.body,
                session: req.session ? req.session : ""
            })
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        if(req.cookies.usersPet){
            res.cookie('usersPet', '', {maxAge: -1})
        }
        res.redirect('/')
    } 

}