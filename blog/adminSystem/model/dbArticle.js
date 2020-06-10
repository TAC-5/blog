const mongoose = require('mongoose');
let Article = new mongoose.model("Article", new mongoose.Schema({
    // 标题
    title: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 1
    },
    // 作者
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // 发布时间
    publishDate: {
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
}));
module.exports = Article;