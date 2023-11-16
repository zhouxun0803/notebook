// pages/user_info/user_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}, //用于存放获取的用户信息
  },

  formSubmit(e) {
    wx.setStorageSync('userInfo', e.detail.value);
    wx.showToast({
      title: '成功',
      icon: 'none',
      duration: 2000
    })
    wx.switchTab({
      url: '/pages/message/message',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const userInfo = wx.getStorageSync('userInfo');
    this.setData({
      userInfo: {
        nickName: userInfo.nickName || "勋染",
        introduce: userInfo.introduce || "地表最强工具箱",
        gender: userInfo.gender || 1,
      },
    })
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