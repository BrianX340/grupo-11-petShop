const { userCreate } = require('../database/db')
const { validationResult } = require('express-validator')
let bcrypt = require('bcryptjs')
const db = require('../database/models')

module.exports = {
    carritoCompras: (req, res) => {
        data = {
            session: req.session ? req.session : ""
        }
        res.render('users//carritoPage', { data })
    },
    /* Formulario de registro */
    register: (req, res) => {
        data = {
            session: req.session ? req.session : ""
        }
        res.render('users//register', { data })
    },
    /* Formulario de inicio de sesión */
    login: (req, res) => {
        data = {
            session: req.session ? req.session : ""
        }
        res.render('users//login', { data })
    },
    //historialCompras: (req,res) =>{
    //    res.render('users//historial')
    //},
    //FAVORITOS


    /* Perfil de usuario */
    profile: (req, res) => {
        let user = getUsers().find(user => user.id === req.session.user.id)
        data = {
            session: req.session ? req.session : ""
        }
        res.render('users//userProfile', {
            user,
            data
        })
    },

    /* Edición de perfil */
    profileEdit: (req, res) => {
        let user = getUsers().find(user => user.id === req.session.user.id)
            /* res.send(user) */
        data = {
            session: req.session ? req.session : ""
        }
        res.render('users//editProfile', //renderizar formulario
            {
                user,
                data,
                avatarList: getAvatarList()
            }
        )
    },

    /* actualización de perfil */
    updateProfile: (req, res) => {
        let errors = validationResult(req)
        data = {
            session: req.session ? req.session : ""
        }
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

        } else {
            res.render('users/editProfile', {
                errors: errors.mapped(),
                old: req.body,
                data
            })
        }
    },
    processLogin: (req, res) => {
        let errors = validationResult(req)
        data = {
            session: req.session ? req.session : ""
        }
        if (errors.isEmpty()) {

            db.User.findOne({
                where: {
                    email: req.body.email
                }
            }).then(user => {
                /* console.log('aca')
                console.log(user)
                console.log('aca') */
                //req.session.user = user
            }).catch(err => {
                console.log(err)
            })


            let time = 1000 * 60 * 60 * 24

            if (req.body.remember) {
                res.cookie("usersPet", req.session.user, { expires: new Date(Date.now() + time), httpOnly: true })
            }

            res.locals.user = req.session.user

            /*  res.send(req.session.user) */

            res.redirect('/')

        } else {
            res.render('users//login', {
                errors: errors.mapped(),
                data
            })
        }
    },

    processRegister: (req, res) => {
        let errors = validationResult(req)
        data = {
            session: req.session ? req.session : ""
        }
        if (errors.isEmpty()) {

            newUser = {
                ...req.body,
                role: 1,
                avatar: "cat01.svg",
                tel: "",
                pc: "",
                salt: "",
                favorites: {}
            }

            delete newUser.pass2
            newUser.pass = bcrypt.hashSync(newUser.pass, 10)

            if (userCreate(newUser)) {
                res.redirect('/ps/login')
            } else {
                res.redirect('/')
            }

        } else {
            res.render('users//register', {
                errors: errors.mapped(),
                old: req.body,
                data
            })
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        if (req.cookies.usersPet) {
            res.cookie('usersPet', '', { maxAge: -1 })
        }
        res.redirect('/')
    }

}