const Article = require('../models/article');

const pagination = require('mongoose-sex-page')

module.exports.getArticle = (req, res) => {
    Article.find().then(data => {
        console.log(data)
    })

    let result = await mongooseSexPage(Article).page(1).size(6).display().find().populate("author").exec();

    res.send({
        code:200,
        msg:'数据获取成功',
        data:result
    })
}
