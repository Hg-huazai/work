// pages/member/info/personal-data/personal-data.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items1: [
      { name: 'USA', value: '男' },
      { name: 'CHN', value: '女', checked: 'true' }
    ],
    items2: [
      { name: 'USA', value: '学生' },
      { name: 'CHN', value: '社会', checked: 'true' }
    ],
    url: "../../../../static/img/mine/mine_03.png"
  },
  addImg (){
    // console.log("33");
    let that = this;
    let url = that.data.url;
    wx.chooseImage({
      count:1,
      success: function(res) {
        that.setData ({
          url:res.tempFilePaths[0]
        })
        // console.log(res);
      },
    })
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