import {
  request
} from "../../utils/http"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {},
    title: "",
    remark: "",
  },

  formSubmit(e) {
    this.setData({
      data: [],
    })
    let sourceText = e.detail.value.sourceText;
    const params = {
      url: "https://api.oioweb.cn/api/txt/QQFanyi",
      data: {
        sourceText,
      }
    }
    request(params).then(res => {
      console.log(res.data.result)
      this.setData({
        data: res.data.result,
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