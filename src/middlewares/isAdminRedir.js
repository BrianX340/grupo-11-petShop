module.exports = (req, res, next) => {
    if (req.session.user && req.session.user.role === 0) {
        //hay un usuario en sesion y además que el rol de este sea de administrador?
        res.redirect('/admin')
    } else {
        next()
    }
}