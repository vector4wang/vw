var WxParse = require('../../wxParse/wxParse.js');
var url = 'http://wangxc.club:8080/api/content';


// 需要渲染的Markdown文本
// var article = '<figure class="section img"><a class="img-wrap" style="padding-bottom:71.38%" href="https://04.imgmini.eastday.com/mobile/20170725/20170725205647_8be211ac727577ab276395c6125ed413_1.jpeg" data-size="608x434"><img width="100%" alt="" src="https://04.imgmini.eastday.com/mobile/20170725/20170725205647_8be211ac727577ab276395c6125ed413_1.jpeg" data-weight="608" data-width="608" data-height="434"></a></figure><p class="section txt">【环球网综合报道】乌克兰一名女顾客疑不满店铺所卖的海鲜品质，日前上门投诉，并与对方发生争执，继而动武，更用一条鱼多次袭击店员。据香港“东网”7月25日报道，有关视频片段被上传至网络后，人们普遍都支持该名顾客，有网民更直斥：“在市场工作的人都是骗子。”</p><p class="section txt">报道称，事发于乌克兰南部港口城市格尼奇斯克，从视频片段可见，身穿紫色裙的女子一开始就出手推开店员，又多次用“死鱼”拍向对方的脸部。店员用手保护自己，并称事件与她无关。此时，另一名女路人曾尝试从中调停，但该女子仍继续出手攻击店员。</p><p class="section txt">据报道，女顾客曾表示，其孙女食用店铺售出的海鲜后患病，又称店员当时更建议她如何烹调食物，但店员声称不记得有关对话，更指称是顾客犯错，没有闻过那些鱼就购买。</p>';
// page/new/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // console.log(options);
    wx.setNavigationBarTitle({
      title: options.title,
    })
    
    wx.request({
      url: url + "?url=" + options.url,
      success: function (res) {
        var content = res.data.data;
        // console.log(content.data);

        WxParse.wxParse('content', 'html', content, that, 5);

      }
    })
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