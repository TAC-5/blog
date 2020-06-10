module.exports.showArticle = (req, res) => {
    res.render('article')
}

module.exports.editArticle = (req, res) => {
    // res.send("用户编辑")
    res.render('article-edit')
}