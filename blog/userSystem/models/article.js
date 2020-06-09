const mongoose = require('mongoose')

// 数据库连接
// mongoose.connect('mongodb://localhost/ZPY_blog', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('数据库连接成功')
// }).catch((err) => {
//     console.log(err)
// })

let Article = new mongoose.model('Article', new mongoose.Schema({
    // 标题
    title: {
        type: String,
        requires: true,
        maxlength: 20,
        minlength: 1
    },
    // 作者
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'username',
        requires: true
    },
    // 时间
    publishTime: {
        type: Date,
        default: Date.now
    },
    // 封面图片
    cover: {
        type: String,
        default: null
    },
    // 内容
    content: {
        type: String,
        required: true
    }
}))

// Article.create({
//     // 用户名
//     title: 'ZhengPengYang',
//     // 密码
//     author: '5ed8c4a413051316246f42f6',
//     // 内容
//     content: '山上的庙里有个老杨在讲课'
// })

module.exports = Article