

// 导包
const express = require('express')
const path = require('path')
// 导入路由模块
const router = require('./routes')
// 设置包
const app = express()
app.use(express.static(path.join(__dirname,'public')))
// 连接数据库
require('./models/dbContent')
// 处理请求
// 挂在路由
app.use(router)


// 指定端口
app.listen(80,()=>{
    console.log('服务器启动http://localhost')
})
