const ui = require('./ui');
// const BASE_URL = 'https://zx.com'
/**
 * 网络请求request
 * url 请求的接口路径 
 * data 请求接口需要传递的数据
 * method 请求的方法  默认为GET
 * showLoading 控制是否显示加载Loading 默认为false不显示
 * message 加载数据提示语
 * contentType 默认为 application/json
 */
function request({
  url,
  data,
  method,
  showLoading = true,
  message,
  contentType
}) {
  return new Promise(function (resolve, reject) {
    if (showLoading) {
      ui.showLoading(message ? message : '加载中...');
    }

    wx.request({
      url: url,
      data: data,
      method: method || "GET",
      //添加请求头
      header: {
        'Content-Type': contentType || 'application/json',
        'token': wx.getStorageSync('token') //获取保存的token
      },
      //请求成功
      success: function (res) {
        console.log('===============================================================================================')
        console.log('==    接口地址：' + url);
        console.log('==    接口参数：' + JSON.stringify(data));
        console.log('==    请求类型：' + method);
        console.log("==    接口状态：" + res.statusCode);
        console.log("==    接口数据：" + JSON.stringify(res.data));
        console.log('===============================================================================================')

        if (res.statusCode == 200) {
          if (res.data.code == 200 || res.data.reason == "success!") {
            resolve(res);
          } else {
            ui.showToast(res.data.msg || res.data.reason);
          }
        } else {
          ui.showToast(res.data.msg);
        }
      },
      fail: function (err) {
        //服务器连接异常
        ui.showToast("服务器连接异常，请检查网络再试");
      },
      complete: function () {
        ui.hideLoading();
      }
    })
  });
}

module.exports = {
  request,
}