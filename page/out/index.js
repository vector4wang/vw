//text.js
// var imageUtil = require('../../utils/util.js');  
var url = 'http://60.205.191.82:8080/api/news';

var GetList = function (that) {
  that.setData({
    hidden: false
  });
  wx.request({
    url: url,
    success: function (res) {
      // console.log(res.data.data)
      that.setData({
        hidden: true,
        list: res.data.data
      });
    }
  })
}

Page({
  data: {
    hidden: true,
    list: [],
    scrollTop: 0,
    scrollHeight: 0
  },
  onLoad: function () {
    //  这里要非常注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        //  console.info(res);
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
  },
  // imageLoad: function (e) {
  //   var imageSize = imageUtil.imageUtil(e)
  //   this.setData({
  //     imagewidth: imageSize.imageWidth,
  //     imageheight: imageSize.imageHeight
  //   })  
  // },
  onShow: function () {
    //  在页面展示之后先获取一次数据
    var that = this;
    GetList(that);
  },
  onHide: function () {
    // 页面隐藏
  },
  bindDownLoad: function () {
    var that = this;
    GetList(that);
  },
  onUnload: function () {
    // 页面关闭
  },
  scroll: function () {
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },
  refresh: function (event) {
    this.setData({
      list: [],
      scrollTop: 0
    });
    GetList(this)
  },
  onPullDownRefresh: function () {
    console.log("下拉")
  },
  onReachBottom: function () {
    console.log("上拉");
  }  
})