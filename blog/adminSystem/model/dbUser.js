const mongoose = require('mongoose');
// 创建并应用约束
let User = new mongoose.model("User", new mongoose.Schema({
    // 用户名(必填 长度在6-18位之间)
    username: {
        type: String,
        required: true,
        // 唯一
        unique: true,
        minlength: 6,
        maxlength: 18
    },
    // 密码(必填 长度再6-12位之间 包括字母和数字)
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 12
    },
    // 邮箱(一般很重要 找回密码 一般通过邮箱  邮箱要保证唯一 必选)
    email: {
        type: String,
        required: true,
        unique: true
    },
    // 状态(1 true: 用户正常, 0 false: 用户被禁用)
    status: {
        type: Boolean,
        default: true
    },
    // 角色(普通用户还是超级管理员 要求必选)
    role: {
        type: String,
        required: true
    }
}))
module.exports = User;