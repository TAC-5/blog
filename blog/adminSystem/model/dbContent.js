const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("数据库连接成功");
}).catch((err) => {
    console.log(err);
})
