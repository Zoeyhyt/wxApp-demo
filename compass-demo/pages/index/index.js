//index.js

Page({
  data:{
    //旋转角度
    rotate:0,
    //方向
    direction:"--",
    //显示角度
    angle:"--"
  },
  //页面加载完成
  onLoad:function(){
    var that = this;
    //获取罗盘数据
    wx.onCompassChange(function(res){
      var value = res.direction;
      that.setData({
        rotate: -value,
        direction:that.getDirectionText(value),
        angle:value.toFixed(2)
      })
    })
    setTimeout(function(){
      if(that.data.direction === '--' && that.data.angle === '--'){
        wx.showToast({
          title: '您的手机不支持电子罗盘，或者已经被禁用',
          icon:'loading',
          duration:5000
        })
      }
    },5000)
  },
  getDirectionText:function(value){
    var dir = '正北 东北 正东 东南 正南 西南 正西 西北'.split(' ');
    var dirAngle = 360 / 8;
    var index = Math.floor((value + dirAngle / 2) / dirAngle % 8);
    return dir[index]
  }
})
