module.exports.showUser = (req, res) => {
    res.render('user', {
        username: req.session.username
    })
}

module.exports.editUser = (req, res) => {
    // res.send("用户编辑")
    res.render('user-edit')
}