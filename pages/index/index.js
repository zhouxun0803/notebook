// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    data: [{
      title: "uniapp和小程序面试题",
      url: "/pages/link/link",
      src: "https://blog.csdn.net/dev_zx/article/details/118764372"
    }],
  },
  // 事件处理函数
  bindTo(e) {
    console.log(e.currentTarget.dataset.item)
    let {
      title,
      url,
      src
    } = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: `${url}?src=${encodeURIComponent(src)}&title=${title}`
    })
  },
  onLoad() {},
})