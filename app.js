// app.js
App({
  onLaunch() {
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
  globalData: {
  }
})