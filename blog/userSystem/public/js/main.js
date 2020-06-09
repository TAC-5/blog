$(function () {
    getListData()
    $('.page').on('click', 'a', function () {
        // console.log($(this).data('pagenum'));
        let pagenum = $(this).data('pagenum');
        getListData(pagenum);
    })
})

/**
 * 
 * @param {Number} pageNum // 第几页
 * @param {Number} pageSize // 多少数据
 */

function getListData(pageNum, pageSize) {
    $.ajax({
        type: 'GET',
        url: '/api/article',
        data: {
            pageNum: pageNum || 1,
            pageSize: pageSize || 6
        },
        success: function (result) {
            console.log(result.data);
            // 把时间戳 改成 yyyy-mm-dd
            for (let i = 0; i < result.data.records.length; i++) {
                // console.log(moment(result.data.records[i].publishDate).format('YYYY-MM-DD'))

                result.data.records[i].publishDate = moment(result.data.records[i].publishDate).format('YYYY-MM-DD')
            }
            let listStr = template('list_templ', result.data);

            $('.list').html(listStr)

            // 渲染分页
            let paginationStr = template('page_templ', result.data);
            $('.page').html(paginationStr);
        }
    })
}