// index.js
const http = require('../.././utils/http')
const ui = require('../.././utils/ui')
Page({
  data: {
    menu_list: [{
        path: "/pages/phone/phone",
        image: "https://cdn.free-api.com/sjhmgsdjh.1.png",
        title: "手机号归属地查询",
        remark: "查询手机号归属地信息",
      },
      {
        path: "/pages/weather/weather",
        image: "https://cdn.free-api.com/tqybjh.webp",
        title: "天气查询-自定义地区",
        remark: "自定义地区天气信息查询",
      },
      {
        path: "/pages/headline/headline",
        image: "https://cdn.free-api.com/xwtt.webp",
        title: "新闻头条",
        remark: "新闻头条：最新新闻头条，各类社会、国内、国际、体育、娱乐、科技等资讯，更新周期5-30分钟",
      },
      {
        path: "/pages/url_revert/url_revert",
        image: "https://mkblog.cn/wp-content/uploads/2019/11/20191201_082402_25.png",
        title: "万能短网址还原",
        remark: "支持所有短网址还原真实网址",
      },
      {
        path: "/pages/ip_address/ip_address",
        image: "https://cdn.free-api.com/ipcxapi.webp",
        title: "IP地址查询",
        remark: "IP地址信息查询，支持IPV4、IPV6地址",
      },
      {
        path: "/pages/one_day_english/one_day_english",
        image: "https://cdn.free-api.com/a5cd5-kqzjc.webp",
        title: "每日一句英文",
        remark: "每日一句英文，新的一天行动起来吧",
      },
      {
        path: "/pages/fan_yi/fan_yi",
        image: "https://cdn.free-api.com/a2wh7-698er.webp",
        title: "英汉互译",
        remark: "单词释义，支持中英文",
      },
      {
        path: "/pages/qq_info/qq_info",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3y4v4Q9MXdPD7I1odJNHYzc2gL_N8PUAg8g&usqp=CAU",
        title: "QQ信息查询",
        remark: "根据QQ号返回QQ昵称，QQ等级等信息",
      },
      {
        path: "/pages/history/history",
        image: "https://picx.zhimg.com/v2-845e57b06c47889dc8f01abd53bb28fc_720w.jpg?source=172ae18b",
        title: "历史上的今天",
        remark: "历史上的今天都发生了哪些大事",
      },
      {
        path: "/pages/food_heat/food_heat",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/2e/2b/83/2e2b8360-a92c-38e6-d3c3-da9c04cb3873/source/512x512bb.jpg",
        title: "食物营养查询",
        remark: "食物营养查询，吃适合的食物",
      },
      {
        path: "/pages/emoticon/emoticon",
        image: "https://img.tusij.com/seek/qianku/ips_templ_preview/2021-05-20/lg_111746_1621494201_60a609b931b81.jpg!w390?auth_key=1721347200-0-0-8baca96431a6284972d81df091ed397d",
        title: "表情包搜索",
        remark: "再也不会缺图了",
      },
      // {
      //   path: "",
      //   image: "https://cdn.free-api.com/chepaichax.webp",
      //   title: "车牌号识别",
      //   remark: "车牌号识别：调用者传入一张图片文件或图片URL，检测并返回图片中车牌框并识别车牌颜色和车牌号。当传入图片中有多个车牌时，按照车牌框大小排序依次输出。",
      // },
      // {
      //   path: "",
      //   image: "https://cdn.free-api.com/aykik-bluj5.webp",
      //   title: "今日头条",
      //   remark: "今日头条：分享今日新鲜事，数据来源今日头条",
      // },
    ]
  },
  jumpPage(e) {
    wx.setNavigationBarTitle({
      title: e.currentTarget.dataset.title
    })
  },
  onLoad() {

  },
})