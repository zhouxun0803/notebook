// pages/user_info/user_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: wx.getStorageSync('userInfo') || {}, //用于存放获取的用户信息
    genderList: [{
        id: 1,
        name: '男',
        checked: false,
      },
      {
        id: 2,
        name: '女',
        checked: false,
      }
    ],
  },

  introduceInput(e) {
    this.setData({
      'userInfo.introduce': e.detail.value,
    })
  },

  genderRadioChange(e) {
    this.setData({
      'userInfo.gender': e.detail.value,
    })
  },

  formSubmit(e) {
    wx.setStorageSync('userInfo', this.data.userInfo);
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
    this.setData({
      userInfo: wx.getStorageSync('userInfo') || {},
    })
    let newGenderList = this.data.genderList.map(item => {
      if (item.id == this.data.userInfo.gender) item.checked = true;
      return item
    })
    this.setData({
      genderList: newGenderList,
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