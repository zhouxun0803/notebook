Page({
  data: {
    menu_list: [{
      path: "/pages/calculate/calculate",
      image: "/assets/image/calculate-icon.png",
      bgImg: "/assets/image/calculate-bg.png",
      title: "加减乘除速算",
      remark: "速算的本质是记忆力和计算力",
    }, ],
  },
  jumpPage(e) {
    wx.setNavigationBarTitle({
      title: e.currentTarget.dataset.title
    })
  },
  onLoad() {},
})