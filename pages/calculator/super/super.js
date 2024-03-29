//index.js
var app = getApp()
var util = require('../../../utils/util.js');
var calc = require('../../../utils/calc.js');
var core = require('../../../utils/core.js');
Page({
  data: {
    layout: [
      [{
          opt: "bindViewTapOpt",
          color: "#000000",
          bg: "#f2f2f2",
          id: "!",
          value: "!",
        },
        {
          opt: "bindViewTapOpt",
          color: "#000000",
          bg: "#f2f2f2",
          id: "^",
          value: "^",
        },
        {
          opt: "bindViewTapOpt",
          color: "#000000",
          bg: "#f2f2f2",
          id: "√",
          value: "√",
        },
        {
          opt: "bindViewTapOpt",
          color: "#000000",
          bg: "#f2f2f2",
          id: "π",
          value: "π",
        },
        {
          opt: "bindViewTapOpt",
          color: "#ffffff",
          bg: "#fa5151",
          id: "c",
          value: "C",
        }
      ],
      [{
          opt: "bindViewTapOpt",
          color: "#000000",
          bg: "#f2f2f2",
          id: "sin",
          value: "sin",
        },
        {
          opt: "bindViewTapOpt",
          color: "#000000",
          bg: "#f2f2f2",
          id: "(",
          value: "(",
        },
        {
          opt: "bindViewTapOpt",
          color: "#000000",
          bg: "#f2f2f2",
          id: ")",
          value: ")",
        },
        {
          opt: "bindViewTapOpt",
          color: "#000000",
          bg: "#f2f2f2",
          id: "e",
          value: "e",
        },
        {
          opt: "bindViewTapOpt",
          color: "#ffffff",
          bg: "#fa5151",
          id: "ac",
          value: "AC",
        }
      ],
      [{
          opt: "bindViewTapOpt",
          color: "#000000",
          bg: "#f2f2f2",
          id: "cos",
          value: "cos",
        },
        {
          opt: "bindViewTapInput",
          color: "#000000",
          bg: "#f2f2f2",
          id: "7",
          value: "7",
        },
        {
          opt: "bindViewTapInput",
          color: "#000000",
          bg: "#f2f2f2",
          id: "8",
          value: "8",
        },
        {
          opt: "bindViewTapInput",
          color: "#000000",
          bg: "#f2f2f2",
          id: "9",
          value: "9",
        },
        {
          opt: "bindViewTapOpt",
          color: "#ffffff",
          bg: "#07c160",
          id: "÷",
          value: "÷",
        }
      ],
      [{
          opt: "bindViewTapOpt",
          color: "#000000",
          bg: "#f2f2f2",
          id: "tan",
          value: "tan",
        },
        {
          opt: "bindViewTapInput",
          color: "#000000",
          bg: "#f2f2f2",
          id: "4",
          value: "4",
        },
        {
          opt: "bindViewTapInput",
          color: "#000000",
          bg: "#f2f2f2",
          id: "5",
          value: "5",
        },
        {
          opt: "bindViewTapInput",
          color: "#000000",
          bg: "#f2f2f2",
          id: "6",
          value: "6",
        },
        {
          opt: "bindViewTapOpt",
          color: "#ffffff",
          bg: "#07c160",
          id: "×",
          value: "×",
        }
      ],
      [{
          opt: "bindViewTapOpt",
          color: "#000000",
          bg: "#f2f2f2",
          id: "ln",
          value: "ln",
        },
        {
          opt: "bindViewTapInput",
          color: "#000000",
          bg: "#f2f2f2",
          id: "1",
          value: "1",
        },
        {
          opt: "bindViewTapInput",
          color: "#000000",
          bg: "#f2f2f2",
          id: "2",
          value: "2",
        },
        {
          opt: "bindViewTapInput",
          color: "#000000",
          bg: "#f2f2f2",
          id: "3",
          value: "3",
        },
        {
          opt: "bindViewTapOpt",
          color: "#ffffff",
          bg: "#07c160",
          id: "-",
          value: "-",
        }
      ],
      [{
          opt: "bindViewTapOpt",
          color: "#000000",
          bg: "#f2f2f2",
          id: "lg",
          value: "lg",
        },
        {
          opt: "bindViewTapInput",
          color: "#000000",
          bg: "#f2f2f2",
          id: "0",
          value: "0",
        },
        {
          opt: "bindViewTapInput",
          color: "#000000",
          bg: "#f2f2f2",
          id: ".",
          value: ".",
        },
        {
          opt: "bindViewTapOpt",
          color: "#ffffff",
          bg: "#fa5151",
          id: "=",
          value: "=",
        },
        {
          opt: "bindViewTapOpt",
          color: "#ffffff",
          bg: "#07c160",
          id: "+",
          value: "+",
        }
      ]
    ],
    lines: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      0
    ],
    power: 1,
    line: "--------------------------------",
    infix: "0"
  },
  onLoad: function () {
    //core.showToast();
    //core.showModal();
    //core.showActionSheet();
    this.clear();
  },
  onReady: function () {
    wx.showNavigationBarLoading();
    wx.hideNavigationBarLoading();
    wx.setNavigationBarTitle({
      title: '高级计算器'
    })
  },
  onShow: function () {},
  clear: function () {
    this.output([0]);
  },
  clearAll: function () {
    this.output(["", "", "", "", "", "", "", "", "", 0], true);
    this.setData({
      infix: "",
    });
  },
  calculator: function () {
    var infix = this.data.infix;
    var res = calc.calculate(infix);
    this.makeInfix("0", true);
    return res;
  },
  bindViewTapInput: function (e) {
    var content = e.currentTarget.id;
    this.getNumber(content);
  },
  bindViewTapOpt: function (e) {
    var content = e.currentTarget.id;
    //console.log(content);
    switch (content) {
      case 'c':
        this.clear();
        break;
      case 't':
        this.clearAll();
        console.log(util.formatTime(new Date()));
        this.output([util.formatTime(new Date())]);
        break;
      case 'of':
        this.setData({
          power: 0 - this.data.power
        });
        this.clearAll();
        break;
      case 'ac':
        this.clearAll();
        break;
      case '=':
        this.makeInfix();
        var res = this.calculator();
        this.output([this.data.line, res], true);
        break;
      default:
        this.makeInfix(content);
        this.output([content], true);
        break;
    }
  },
  makeInfix: function (content, flash) {
    //生成中缀表达式
    content = content ? content : "";
    var oldInfix = this.data.infix.toString();
    var lastNum = this.data.lines[(this.data.lines.length - 1)].toString();
    if (oldInfix == "0") {
      oldInfix = "";
    }
    if (!flash) {
      content = oldInfix + lastNum + content;
    }
    console.log(content);
    this.setData({
      infix: content
    });
  },
  getNumber: function (content) {
    var lines = this.data.lines;
    var move = false;
    var old = lines[(lines.length - 1)].toString();
    var newNum;
    if (content == "." && old.indexOf(".") != -1) {
      //当原字符串有小数点时再输入小数点无反应
      return false;
    }
    if (content == "0" && old == "0") {
      //当原字符串等于0再输入0无反应
      return false;
    }
    if (isNaN(old) && old != "0.") {
      //当原字符串是非数字即操作符(+-×÷)时新字符串另起一行为新数字
      //需要排除 0.  这个不是字符,但是需要继续拼接
      if (content == ".") {
        content = "0.";
      }
      newNum = content;
      //另起一行的标志
      move = true;
    } else {
      if (old == "0" && content != ".") {
        //当原字符串是0的时候又不是小数,需要把0去掉
        old = "";
      }
      newNum = old + content;
    }
    this.output([newNum], move);
  },
  output: function (content, move) {
    var lines = this.data.lines;
    if (move) {
      for (var index in content) {
        lines.shift();
        lines.push(content[index]);
      }
    } else {
      lines[(lines.length - 1)] = content[0];
    }

    if (this.data.power <= 0) {
      lines = ["", "", "", "", ""];
    }
    this.setData({
      lines: lines
    });
    //console.log(this.data);
  }
})