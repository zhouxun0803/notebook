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
    })
    wx.nextTick(() => {
      this.getRandomNumbers(this.data.type);
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
      this.getResult();
      return;
    }
    if (type == '-' && front - queen == result) {
      this.getResult();
      return;
    }
    if (type == '*' && front * queen == result) {
      this.getResult();
      return;
    }
    if (type == '/' && front / queen == result) {
      this.getResult();
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

  getResult() {
    this.setData({
      result: "",
      grade: this.data.grade + 1,
    })
    const grades = wx.getStorageSync('grades') || {};
    grades[this.data.id] = this.data.grade;
    wx.setStorageSync('grades', grades);
    wx.nextTick(() => {
      this.getRandomNumbers(this.data.type);
    })
  },

  getRandomNumbers(type) {
    let num1, num2;
    if (type === "/") {
      let min = 1;
      let max = 100;
      // 生成两个随机的数，保证它们的商为正整数
      num1 = Math.floor(Math.random() * (max - min + 1)) + min;
      num2 = Math.floor(Math.random() * (max - min + 1)) + min;
      while (num1 % num2 !== 0) {
        num2 = Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
    wx.nextTick(() => {
      this.setData({
        front: num1 || Math.round(Math.random() * 89) + 10,
        queen: num2 || Math.round(Math.random() * 8) + 1,
      })
    })
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