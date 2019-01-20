// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      { icon: 'wallet.png', content: '钱包' }, 
      { header: true, title: '' },
      { icon: 'favorites.png', content: '收藏' }, 
      { icon: 'myPosts.png', content: '相册' },
      { icon: 'cards&offers.png', content: '卡包' },
      { icon: 'stickerGallery.png', content: '表情' },
      { header: true, title: '' },
      { icon: 'settings.png', content: '设置' },
      { header: true, title: '' },
      { icon: 'signIn.png', content: '打卡' }
    ]
  },

  bindNavigation:function(e){
    console.log(e.currentTarget.dataset.index)
    if(e.currentTarget.dataset.index === 0){
      wx.navigateTo({
        url: '/pages/money/money',
      })
    }
    if(e.currentTarget.dataset.index === 9){
      wx.navigateTo({
        url:'/pages/signIn/signIn'
      })
    }
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