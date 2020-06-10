// 1.引入express
const express = require('express');
// 2.使用express的方法来创建路由
const { showArticle, editArticle } = require('../controller/articleCtrl')
const articleRouter = express.Router();
// 3.创建路由
articleRouter.get('/', showArticle)
articleRouter.get('/edit', editArticle)
// 4.导出
module.exports = articleRouter;