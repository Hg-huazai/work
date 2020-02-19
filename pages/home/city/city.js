//先引用城市数据文件
var city = require('./city1.js')
var lineHeight = 0;
var endWords = "";
var isNum;
Page({
  data: {
    "hidden": true,
    cityName: "", //获取选中的城市名
    name: "阳江"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //初始化封装的城市数据
    var cityChild = city.City[0];
    console.log(cityChild)
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        //lineHeight是右侧A B C D的行高，这个可以根据需要自行设置，我在第二个demo中重新设置
        lineHeight = (res.windowHeight - 100) / 22;
        console.log(res.windowHeight - 100)
        that.setData({
          city: cityChild,
          winHeight: res.windowHeight - 2,
          lineHeight: lineHeight
        })
      }
    })
  },

  //触发全部开始选择
  chStart: function () {
    console.log('触发全部开始选择')
    //trans是代表右侧字母列表背景的透明度，在演示中可以看到效果，
    //点击右侧列表时呈现灰色背景，点击结束后透明度为0,同时显示页面最下面定义的showWords的显示
    this.setData({
      trans: ".3",
      hidden: false
    })
  },
  //触发结束选择
  chEnd: function () {
    console.log('触发结束选择')
    this.setData({
      trans: "0",
      hidden: true,
      scrollTopId: this.endWords
    })
  },
  //获取文字信息
  getWords: function (e) {
    console.log('获取文字信息')
    var id = e.target.id;
    this.endWords = id;
    isNum = id;
    this.setData({
      showwords: this.endWords
    })
  },
  //设置文字信息
  setWords: function (e) {
    console.log('设置文字信息')
    var id = e.target.id;
    this.setData({
      scrollTopId: id
    })
  },
  //选择城市，并让选中的值显示在文本框里
  bindCity: function (e) {
    console.log(e.currentTarget.dataset.city);
    var cityName = e.currentTarget.dataset.city;
    wx.navigateBack({
      delta: 1
    }),
    wx.showToast({
      title: '您选择了' + cityName,
    })
    console.log(e);
    const that = this
    this.setData({
      name: e.currentTarget.dataset.city
    })

    
  },
  // 页面退出
  onUnload(){
    //1.获取首页的页面对象
    //getCurrentPages当前所以页面的对象
    const pages = getCurrentPages()
    const home = pages[pages.length-2]
    // console.log(pages)

    // 2.调用页面对象的setData
    home.setData({
      city: this.data.name
    })

  }
})