module.exports = (req, res, next) => {
    if(req.session.user){
        next()
    }else{
        res.redirect('/ps/login')
    }
}//verifica si el usuario está en sesion