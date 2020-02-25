// component/h-join/h-join.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // show: {
    //   type: String,
    //   value: none
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    items: [
      { name: 'USA', value: '男' },
      { name: 'CHN', value: '女', checked: 'true' }
    ],
    show: false
  },
  
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closetap() {
      // this.setData({
      //   show: true
      // })
      // console.log("close");
      this.triggerEvent('closetap')
    }
  }
})
