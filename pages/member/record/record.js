// pages/member/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    record: [
      { theme: "全部",state:1},
      { theme: "通过筛选", state: 2 },
      { theme: "待面试", state: 3 },
      { theme: "已录用", state: 4 },
      { theme: "不合适", state: 5 }
    ],
    employeInfo: [
      {
        status: 1,
        img: "../../../static/img/work/item_07.png",
        staff: "服务员",
        wages: "3200-3500元/月",
        discount: "免费培训|包吃",
        name: "梅姨海鲜大排档",
        distance: "报名日期： 02-18"
      },
      {
        status: 1,
        img: "../../../static/img/work/item_07.png",
        staff: "厨师",
        wages: "3200-3500元/月",
        discount: "免费培训|包吃",
        name: "一品香",
        distance: "报名日期： 02-18"
      },
      {
        status: 2,
        img: "../../../static/img/work/item_07.png",
        staff: "web前端",
        wages: "7000-12000元/月",
        discount: "免费培训|包吃",
        name: "华哥大排档",
        distance: "报名日期： 02-18"
      }
    ],
    curren: 0
  },
  recordtap (e){
    this.setData ({
      curren:e.currentTarget.dataset.index
    })
    // console.log(e);
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