// app.js
App({
  onLaunch() {
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
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    // userInfo: wx.getStorageSync('userInfo') || {},
  }
})