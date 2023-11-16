// app.js
App({
  onLaunch() {
    const userInfo = wx.getStorageSync('userInfo');
    wx.setStorageSync('userInfo', {
      nickName: userInfo.nickName || "勋染",
      introduce: userInfo.introduce || "地表最强工具箱",
      gender: userInfo.gender || 1,
    });

    this.overShare();
  },
  overShare: function () {
    // 监听路由切换
    wx.onAppRoute(function (res) {
      let pages = getCurrentPages()
      let view = pages[pages.length - 1]
      if (view) {
        wx.showShareMenu({
          withShareTicket: true,
          menus: ['shareAppMessage', 'shareTimeline']
        })
      }
    })
  },
  globalData: {}
})