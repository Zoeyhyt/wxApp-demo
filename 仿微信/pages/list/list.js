// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus:[
      { icon:"newFriends.png", title:"新的朋友",unread:1},
      { icon: "groupTalk.png", title: "群聊" },
      { icon: "tabs.png", title: "标签" },
      { icon: "subscription.png", title: "公众号" },
    ],
    friends:[
      { header:true, name:'A'},
      { avatar:'阿乖.jpg', name:'阿乖'},
      { avatar:'阿壳儿.jpg', name:'阿壳儿'},
      { header:true , name:'B'},
      { avatar:'大熊.jpg', name:'大熊'},
      { avatar:'北北.jpg', name:'北北'},
      { avatar:'贝贝.jpg', name:'贝贝'},
      { avatar:'丁丁.jpg', name:'丁丁'},
      { avatar:'豆豆.jpg', name:'豆豆'},
      { avatar:'毒液.jpg', name:'毒液'},
      { header:true, name:'M'},
      { avatar:'咪宝.jpg', name:'咪宝'},
      { header:true, name:'T'},
      { avatar:'兔子.jpg', name:'兔子'},
      { header:true, name:'W'},
      { avatar:'汪汪.jpg', name:'汪汪'}
    ]
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