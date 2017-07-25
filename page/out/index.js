//text.js
// var imageUtil = require('../../utils/util.js');  
var url = 'http://wangxc.club:8080/api/news';

var GetList = function (that) {
  that.setData({
    hidden: false
  });
  wx.request({
    url: url,
    success: function (res) {
      wx.stopPullDownRefresh() //停止下拉刷新
      // console.log(res.data.data)
      that.setData({
        hidden: true,
        list: res.data.data
      });
      wx.hideNavigationBarLoading();
      
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
        console.info(res.windowHeight);
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
  scroll: function (event) {
    // console.log(event.detail.scrollTop)
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },
  refresh: function (event) {
    wx.showNavigationBarLoading();
    this.setData({
      list: [],
      scrollTop: 0
    });
    GetList(this)
  },
  onPullDownRefresh: function () {
    // wx.showNavigationBarLoading() //在标题栏中显示加载
    //let newwords = [{ message: '从天而降', viewid: '-1', time: util.formatTime(new Date), greeting: 'hello' }].concat(this.data.words);
    GetList(this)
    // setTimeout(() => {
    //   this.setData({
    //     words: newwords
    //   })
    //   wx.hideNavigationBarLoading() //完成停止加载
    //   wx.stopPullDownRefresh() //停止下拉刷新
    // }, 2000) 
  },
  onReachBottom: function () {
    GetList(this)
  }  
})