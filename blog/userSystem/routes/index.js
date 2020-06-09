// 导入express
const express = require('express')
// 创建路由
const router = express.Router()
// 导入Ctrl
const { getArticle } = require('../controller/indexCtrl')
// 接受前端请求
router.get('/api/article', getArticle)

// 导出路由
module.exports = router