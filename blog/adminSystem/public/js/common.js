$(function () {
    // 点击退出按钮，退出登录
    $('.logout').on('click', 'a', function () {
        logout();
    })
})
// 用户退出
function logout() {
    $.ajax({
        type: 'GET',
        url: '/api/logout',
        data: null,
        success: function (data) {
            // console.log(data);
            if (data.code == 200) {
                location.href = '/'
            }
        }
    })
}