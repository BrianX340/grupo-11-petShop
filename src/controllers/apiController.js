module.exports = {
    addFavorite: (req, res) => {
        addUserFavorite(req.query.userId, req.query.productId)
            .then(response => {
                if (response) {

                }
            })
        res.send({ status: "ok" })
    },
    deleteFavorite: (req, res) => {
        deleteUserFavorite(req.query.userId, req.query.productId)
        res.send({ status: "oki" })
    }
}

//regex fort metrics "10x20"=true "20xx20"= false withouth letters
regex = /^[0-9]*x[0-9]*$/