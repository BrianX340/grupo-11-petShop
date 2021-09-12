module.export = (req, res, next) => {
    if(req.session.user && req.session.user.rol === "ROL_ADMIN"){
        //hay un usuario en sesion y además que el rol de este sea de administrador?
        next()
    }else{
        res.redirect('/ps/login')
    }
}