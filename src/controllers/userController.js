const { userCreate } = require('../database/db')
const { validationResult } = require('express-validator')
let bcrypt = require('bcryptjs')
const { User, Avatars } = require('../database/models')

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
        data = {
            session: req.session ? req.session : ""
        }
        res.render('users//userProfile', {
            data
        })
    },

    /* Edición de perfil */
    profileEdit: (req, res) => {

        /* res.send(user) */
        data = {
            session: req.session ? req.session : ""
        }

        //obtenemos los avatares
        Avatars.findAll()
            .then(avatares => {
                console.log(avatares)
                res.render('users//editProfile', //renderizar formulario
                    {
                        data,
                        avatarList: avatares
                    }
                )
            })

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
            User.findOne({
                where: {
                    email: req.body.email
                },
                include: [{
                    association: "avatar"
                }]
            }).then(user => {
                try {
                    if (user) {
                        req.session.user = user
                        res.locals.user = req.session.user
                        let time = 1000 * 60 * 60 * 24
                        if (req.body.remember) {
                            res.cookie("usersPet", req.session.user, { expires: new Date(Date.now() + time), httpOnly: true })
                        }

                        res.redirect('/')
                    } else {
                        res.redirect('/ps/register')
                    }
                } catch {
                    res.redirect('/ps/register')
                }
            }).catch(err => {
                console.log(err)
            })

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
            delete req.body.pass2
            req.body.pass = bcrypt.hashSync(req.body.pass, 10)

            newUser = userCreate({
                ...req.body,
                role: 1,
                avatarId: 1, //req.file ? req.file.filename : 1,
                tel: "",
                salt: ""
            })

            if (newUser) {
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