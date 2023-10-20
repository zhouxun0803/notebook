Page({
  data: {
    menu_list: [{
      path: "/pages/calculate/calculate",
      image: "/assets/image/calculate-icon.png",
      title: "加减乘除速算",
      remark: "速算的本质是记忆力和计算力",
    }, {
      path: "/pages/snake_begin/snake_begin",
      image: "/assets/image/snake-icon.png",
      title: "贪吃蛇",
      remark: "好玩的贪吃蛇，快来看看你能闯几关吧！",
    }, ],
  },
  jumpPage(e) {
    wx.setNavigationBarTitle({
      title: e.currentTarget.dataset.title
    })
  },
  onLoad() {},
})