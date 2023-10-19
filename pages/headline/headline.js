import {
  request
} from "../../utils/http"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    title: "",
    remark: "",
  },

  formSubmit(e) {
    this.setData({
      data: [],
    })
    let type = e.detail.value.type;
    const params = {
      url: "https://v.juhe.cn/toutiao/index",
      data: {
        type,
        key: "d268884b9b07c0eb9d6093dc54116018",
      },
    }
    request(params).then(res => {
      console.log(res.data.result.data,33333)
      this.setData({
        data: res.data.result.data,
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