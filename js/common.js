function loadingshow() {
    $(".loding").removeClass("hidden");
}

function loadinghied() {
    $(".loding").addClass("hidden");
}

function myAjaxSetup() {
    loadingshow();
    $.ajaxSetup({
        dataType: "json",
        contentType: "application/json",
        headers: {
            'token': $("#com_token").val(),
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        cache: false,
        // async: false,
        beforeSend: function () {
            //ajax请求之前
            // $(".loding").removeClass("hidden");
        },
        complete: function () {
            //ajax请求完成，不管成功失败
            loadinghied();
            // console.log(111)
        },
    });
}

function ajaxRequest(url, data, adt, callback, errCallBack) {
    myAjaxSetup();
    $.ajax({
        type: "POST",   //提交的方法
        url: url, //提交的地址
        data: data,// 序列化表单值
        dataType: "json",
        success: function (res) {  //成功
            // console.log(res);
            callback(res);
        },
        error: function (re) {
            console.log(re);
            if (typeof errCallBack != "undefined") {
                errCallBack(re);
            }
        }
    });
}