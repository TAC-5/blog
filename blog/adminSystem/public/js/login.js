
$(function () {
  $("#login-form").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
      }
    },
    messages: {
      password: {
        required: "密码必须填写",
      },
      email: {
        required: "邮箱必须填写",
        email: "邮箱格式错误"
      }
    },
    // 提交处理
    submitHandler: function (form) {
      // console.log(form);
      let formdata = $(form).serialize();
      // console.log(formdata);
      $.ajax({
        type: 'POST',
        url: '/api/login',
        data: formdata,
        success: function (result) {
          if (result.code == 200) {
            location.href = "/user"
          }
        },
        error: function (err) {
          console.log(err);
          // console.log(err.responseJSON);
          if (JSON.parse(err.responseText).code == 400) {
            alert(JSON.parse(err.responseText).msg)
            $(form).find('input').val('');
          }
        }
      })
    }
  });
})