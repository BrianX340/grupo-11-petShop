module.exports = function (req, res, next) {
    if(req.cookies.usersPet){
        req.session.user = req.cookies.usersPet
        res.locals.user = req.session.user
    }
    next()
}