

// 获取数据的方法，具体怎么获取列表数据大家自行发挥
var GetList = function (that) {
  // that.data.hidden=false;
  wx.request({
    url: 'http://wangyi.butterfly.mopaasapp.com/news/api?type=war&page=1&limit=10',
    data: {},
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      // console.log(res.data.list)
      that.setData({
        list: res.data.list
      });
      that.setData({
        hidden: true
      });
    }
  })
}
Page({
  data: {
    hidden: false,
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
  onShow: function () {
    //  在页面展示之后先获取一次数据
    var that = this;
    GetList(that);
  },
   onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  scroll:function(){
    // console.log("scroll")
  },
  onPullDownRefresh: function(){
    console.log("refresh")
  }
})