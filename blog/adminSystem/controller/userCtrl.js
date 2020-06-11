// 引入用户集合
const User = require('../model/dbUser');
// 引入mongoose-sex-page
const mongooseSexPage = require('mongoose-sex-page');
// 显示用户页面
module.exports.showUser = (req, res) => {
  if (!req.session.username) {
    // 如果用户强行进入 /user这个路由 如果没有用户名 我们应该让页面跳转到登录页面让用户登录
    res.redirect('/')
  } else {
    res.render('user')
  }
}

// 查找所有用户
module.exports.findUsers = async (req, res) => {
  let { pageNum, pageSize } = req.query;
  // console.log(pageNum, pageSize);

  let result = await mongooseSexPage(User)
    .page(parseInt(pageNum))
    .size(parseInt(pageSize))
    .display(5)
    .find()
    .exec();

  // console.log(result);
  res.status(200).send({
    code: 200,
    msg: "数据获取成功",
    data: result
  })
}

// 删除用户
module.exports.deleteUser = async (req, res) => {
  let { id } = req.query;
  let result = await User.findOneAndUpdate({
    _id: id
  }, {
    status: false
  })

  // console.log(result);
  res.status(200).send({
    code: 200,
    msg: "用户删除成功",
    data: result.username
  })
}

// 显示用户编辑页面
module.exports.editUser = (req, res) => {
  // res.send("用户编辑")
  res.render('user-edit')
}