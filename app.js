// app.js
App({
  onLaunch() {
    this.overShare()
    // 展示本地存储能力
    // let userInfo = {
    //   nickName: "开发者",
    //   avatarUrl: "../../assets/image/portrait.png",
    //   introduce: "",
    // };
    // if (!Object.keys(wx.getStorageSync('userInfo')).length) {
    //   wx.setStorageSync('userInfo', userInfo)
    // }

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
  },
  overShare: function () {
    // 监听路由切换
    wx.onAppRoute(function (res) {
      console.log('route', res)
      let pages = getCurrentPages()
      console.log(pages, 333)
      let view = pages[pages.length - 1]
      if (view) {
        wx.showShareMenu({
          withShareTicket: true,
          menus: ['shareAppMessage', 'shareTimeline']
        })
      }
    })
  },
  globalData: {
    // userInfo: wx.getStorageSync('userInfo') || {},
  }
})