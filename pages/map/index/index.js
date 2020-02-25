// pages/map/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fuli: [
      { name: "不限" },
      { name: "包吃" },
      { name: "包住" },
      { name: "免费体验" },
      { name: "用餐体验" },
      { name: "用餐补贴" },
      { name: "住房补贴" },
      { name: "班车接送" },
      { name: "缴纳社保" },
      { name: "加班补助" },
      { name: "做五休二" },
      { name: "缴纳公积金" },
      { name: "带薪年假" },
      { name: "免费培训" },
      { name: "交通补助" }
    ],
    education: [
      { name: "不限" },
      { name: "小学及以下" },
      { name: "初中" },
      { name: "高中" },
      { name: "中专/技校" },
      { name: "大专" },
      { name: "本科" },
      { name: "硕士" },
      { name: "缴纳博士社保" }
    ],
    money: [
      { name: "不限" },
      { name: "3000以下" },
      { name: "3000-5000" },
      { name: "5000-8000" },
      { name: "8000以上" }
    ],
    current1: 0,
    current2: 0,
    current3: 0,
    height: '',
    topheight:'',
    centerheight: '',
    show: false,
    showdow: false
  },

  // 点击事件-----------------------------------------------------------------------
  closetap(){
    this.setData({
      show: true
    })
  },
  // 筛选点击
  choicetap1(e) {
    console.log(e)
    this.setData({
      current1: e.currentTarget.dataset.aid
    })
  },
  choicetap2(e) {
    console.log(e)
    this.setData({
      current2: e.currentTarget.dataset.bid
    })
  },
  choicetap3(e) {
    console.log(e)
    this.setData({
      current3: e.currentTarget.dataset.cid
    })
  },
  // 点击筛选显示
  showtap (){
    this.setData({
      show: true,
      showdow: true
    })
  },
  // 隐藏
  showclose: function () {
    this.setData({
      showdow: false
    })
  },

  // 禁止滚动
  noneEnoughPeople: function () {
    console.log(222);
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
    // 获取屏幕高度
    var h = wx.getSystemInfoSync().windowHeight;
    // console.log(h);

    // 获取组件的高度————————————————————————————————————————————————————————
    //创建节点选择器
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;
    query.select('.map-top').boundingClientRect(function (rect) {
      // console.log(rect.height)
      var topheight = rect.height
    }).exec();
    query.select('.map-center').boundingClientRect(function (rect) {
      // console.log(rect.height)
      var centerheight = rect.height
      // console.log(centerheight)
    }).exec();

    this.setData ({
      height: h
    })
    this.setData({
      topheight: that.topheight,
      centerheight: that.centerheight
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})