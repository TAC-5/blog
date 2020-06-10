// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由
const { showUser, editUser } = require('../controller/userCtrl')
const userRouter = express.Router();
// 3.创建路由
userRouter.get('/', showUser)
userRouter.get('/edit', editUser);
// 4.导出
module.exports = userRouter;