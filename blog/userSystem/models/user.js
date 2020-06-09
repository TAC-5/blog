const mongoose = require('mongoose')

// // 数据库连接
// mongoose.connect('mongodb://localhost/ZPY_blog', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('数据库连接成功')
// }).catch((err) => {
//     console.log(err)
// })

let User = new mongoose.model('User', new mongoose.Schema({
    // 用户名
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        maxlength: 18
    },
    // 密码
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 12
    },
    // 邮箱
    email: {
        type: String,
        required: true,
        unique: true
    },
    // 状态
    status: {
        type: String,
        required: true
    },
    // 角色
    role: {
        type: String,
        required: true
    }
}))
// 预先添加一个用户用于检测是否成功
// User.create({
//     // 用户名
//     username: 'ZhengPengYang',
//     // 密码
//     password: '1234567890',
//     // 邮箱
//     email: '3467913546@qq.com',
//     // 状态
//     status: true,
//     // 角色
//     role: '超管'
// })

module.exports = User