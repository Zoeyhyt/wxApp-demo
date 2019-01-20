// pages/signIn/signIn.js
const app = getApp()
const rule = {
  lat: 23.384441375732422,//公司的经度
  lng: 110.07088470458984,//公司的纬度
  maxDistance:2000000,//最大允许距离偏差
  bssid:'',//公司指定Wifi的bssid
}

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    locationChecked:false,
    distance:'',
    wifiChecked:false,
    isChecked:false
  },
  bindViewTap:function(){
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  bindGetLocationTap:function(){
    let that = this;
    wx.getLocation({
      success: function(res) {
        let distance = that.getDistance(res.latitude,res.longitude)
        console.log(res)
        console.log(distance)
        if(distance <= rule.maxDistance){
          that.setData({
            distance:Math.floor(distance),
            locationChecked:true
          })
          that.openWift()
        }else{
          wx.showModal({
            title: '提示',
            content: '当前位置已超出允许范围',
          })
        }
      },
    })
  },
  //获取当前位置
  getDistance:function(lat,lng){
    let distance = 0;
    const radLat1 = lat * Math.PI/180;
    const radLat2 = rule.lat * Math.PI/180;
    const deltaLat = radLat1 - radLat2;
    const deltaLng = lng * Math.PI/180- rule.lng * Math.PI/180;
    distance = 2 * Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(deltaLat/2),2) + Math.cos(radLat1) * Math.cos(radLat1) * Math.pow(Math.sin(deltaLng/2),2)
      )
    );
    return distance * 6378137;
  },
  //开启Wifi
  openWift:function(){
    let that = this
    wx.startWifi({
      success:function(res){
        console.log(res)
        that.getCurrentWifi()
      },
      fail:function(){
        wx.showModal({
          title: '提示',
          content: '未开启Wifi，请打开Wifi重试',
        })
      }
    })
  },
  //获取当前Wifi
  getCurrentWifi:function(){
    let that = this
    wx.getConnectedWifi({
      success:function(res){
        console.log(res)
        that.checkedCurrentWifi(res.wifi)
      },
      fail:function(){
        wx.showModal({
          title: '提示',
          content: '未连接Wifi',
        })
      }
    })
  },
  //判断当前连接Wifi是否是公司指定连接的Wifi
  checkedCurrentWifi:function(wifi){
    if(rule.bssid === wifi.BSSID){
      this.setData({
        wifiChecked:true,
        isChecked:true
      })
      wx.showModal({
        title: '提示',
        content: '您已经完成了打卡',
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '您并没有连接到指定路由器,Wifi认证失败',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(){
    if(app.globalData.userInfo){
      this.setData({
        userInfo:app.globalData.userInfo,
        hasUserInfo:true
      })
    }else if(this.data.canIUse){
      app.userInfoReadyCallback = res =>{

      }
    }
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