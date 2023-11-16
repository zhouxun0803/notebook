// pages/version/version.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    versionList: [{
        version: "1.1.8",
        date: "2023-11-16",
        branch: "Hotfix",
        description: ["去掉获取用户信息", "基本信息优化"]
      },
      {
        version: "1.1.7",
        date: "2023-10-23",
        branch: "Hotfix",
        description: ["加减乘除速算功能优化"]
      }, {
        version: "1.1.6",
        date: "2023-10-20",
        branch: "Features",
        description: ["加减乘除速算功能开发"]
      }, {
        version: "1.1.5",
        date: "2023-10-19",
        branch: "Features",
        description: ["帮助文档开发"]
      }, {
        version: "1.1.4",
        date: "2023-10-18",
        branch: "Features",
        description: ["首页页面功能开发"]
      },
      {
        version: "1.1.3",
        date: "2023-04-20",
        branch: "Features",
        description: ["我的页面-储存空间"]
      },
      {
        version: "1.1.2",
        date: "2023-04-19",
        branch: "Hotfix",
        description: ["我的页面-基本信息"]
      },
      {
        version: "1.1.1",
        date: "2023-04-17",
        branch: "Features",
        description: ["首次发布"]
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})