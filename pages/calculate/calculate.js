Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    remark: "",
    id: "",
    bgImg: "",
    dialogVisible: false,
    type: "",
    front: "",
    queen: "",
    result: "",
    grade: "",
  },

  openDialog(e) {
    let type = e.target.dataset.type;
    if (type == "random") {
      var operation = ["+", "-", "*", "/"];
      var index = Math.round(Math.random() * operation.length);
    }
    this.setData({
      dialogVisible: true,
      type: type == "random" ? operation[index] : type,
      front: Math.round(Math.random() * 89) + 10,
      queen: Math.round(Math.random() * 8) + 1,
    })
  },

  close() {
    this.setData({
      dialogVisible: false,
    })
  },

  formSubmit(e) {
    let result = e.detail.value.result;
    let {
      front,
      type,
      queen
    } = this.data;
    if (type == '+' && front + queen == result) {
      this.getRandom();
      return;
    }
    if (type == '-' && front - queen == result) {
      this.getRandom();
      return;
    }
    if (type == '*' && front * queen == result) {
      this.getRandom();
      return;
    }
    if (type == '/' && front / queen == result) {
      this.getRandom();
      return;
    }
    this.setData({
      result: "",
    })
    wx.showToast({
      title: "错误",
      icon: 'error',
    })
  },

  getRandom() {
    this.setData({
      result: "",
      front: Math.round(Math.random() * 89) + 10,
      queen: Math.round(Math.random() * 8) + 1,
      grade: this.data.grade + 1,
    })
    const grades = wx.getStorageSync('grades') || {};
    grades[this.data.id] = this.data.grade;
    wx.setStorageSync('grades', grades);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      title: options.title,
      remark: options.remark,
      bgImg: options.bgImg,
      grade: wx.getStorageSync('grades')[options.id] || 0,
      id: options.id,
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