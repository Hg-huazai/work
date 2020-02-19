// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndexNav: 0,
    currentIndexTab: 0,
    status: 1,
    showdow: false,
    current1: 0,
    current2: 0,
    current3: 0,
    recommend: [
      { post: "全部岗位", status: 1},
      { post: "全部岗位", status: 2},
      { post: "全部岗位", status: 3},
      { post: "全部岗位", status: 4},
      { post: "全部岗位", status: 5},
      { post: "全部岗位", status: 6},
      { post: "全部岗位", status: 7}
    ],
    tab: [
      {sore: "推荐列表", status: 1},
      {sore: "离我最近", status: 2},
      {sore: "工资最高", status: 3},
      {sore: "最新发布", status: 4},
    ],
    employeInfo: [
      {
        status: 1,
        img: "../../static/img/work/item_07.png",
        staff: "服务员",
        wages: "3200-3500元/月",
        discount: "免费培训|包吃",
        name: "梅姨海鲜大排档",
        distance: "阳西县 25km"
      },
      {
        status: 1,
        img: "../../static/img/work/item_07.png",
        staff: "厨师",
        wages: "3200-3500元/月",
        discount: "免费培训|包吃",
        name: "一品香",
        distance: "阳西县 25km"
      },
      {
        status: 2,
        img: "../../static/img/work/item_07.png",
        staff: "web前端",
        wages: "7000-12000元/月",
        discount: "免费培训|包吃",
        name: "华哥大排档",
        distance: "阳西县 25km"
      }
    ],
    choice: [
      {name:"不限"},
      { name: "不限" },
      { name: "不限" },
      { name: "不限" },
      { name: "不限" },
      { name: "不限" }
    ],
    city: "阳江"
  },

  activerecommend: function (e){
    console.log(e);
    this.setData({
      currentIndexNav: e.target.dataset.index,
      status: e.target.dataset.status
    })
    // console.log(e.target.dataset.index);
  },
  activetab: function (e){
    // console.log(e.target.dataset.index);
    this.setData({
      currentIndexTab: e.target.dataset.index
    })
  },
  scrollshow: function() {
    console.log('scroll-show');
    this.setData({
      showdow: true
    })
    let that = this
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
  showclose: function(){
    this.setData({
      showdow: false
    })
  },

  // 筛选点击
  choicetap1(e){
    console.log(e)
    this.setData({
      current1:e.currentTarget.dataset.aid
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

  // 禁止滚动
  noneEnoughPeople: function(){
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