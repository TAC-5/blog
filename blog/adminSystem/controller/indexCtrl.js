// 用户登录
module.exports.login = (req, res) => {
  // 获取邮箱和密码
  console.log(req.body);
  // let email = req.body.email;
  // let password = req.body.password;
  // console.log(email, password);
  // let { email, password } = {
  //   email: '232323@qq.com',
  //   password: '235r42343'
  // }

  // console.log(email, password)

  let { email, password } = req.body;
  console.log(email, password);
}