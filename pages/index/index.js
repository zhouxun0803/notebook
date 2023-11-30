Page({
  data: {
    menu_list: [{
      path: "/pages/calculate/calculate",
      image: "/assets/image/calculate/calculate-icon.png",
      title: "加减乘除速算",
      remark: "速算的本质是记忆力和计算力",
    },{
      path: "/pages/dice/dice",
      image: "/assets/image/dice/5 point.png",
      title: "麻将筛子",
      remark: "打麻将、牌九、酒桌上都可以使用筛子",
    },{
      path: "/pages/graffiti/graffiti",
      image: "/assets/image/graffiti/images.png",
      title: "涂鸦",
      remark: "使用涂鸦来展现自己的想法、感受和创意",
    },{
      path: "/pages/calculator/index/index",
      image: "/assets/image/calculator/icon.png",
      title: "计算器",
      remark: "普通的加减乘除和一些高深的科学计算",
    },{
      path: "/pages/canvas_clock/canvas_clock",
      image: "/assets/image/canvas_clock/icon.png",
      title: "时钟",
      remark: "简单的时钟制作，可以用来查看时间",
    },{
      path: "/pages/qrcode/qrcode",
      image: "/assets/image/qr.jpg",
      title: "二维码生成器",
      remark: "能够快速、简便地生成二维码",
    },],
  },
  jumpPage(e) {
    wx.setNavigationBarTitle({
      title: e.currentTarget.dataset.title
    })
  },
  onLoad() {},
})