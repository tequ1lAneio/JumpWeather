// views/index/index.js
Page({
  data: {
    name: 'hello',
    current: 1,
    currentCity: '',
    list: [
      {
        text: '首页',
        iconPath: '',
        selectIconPath: ''
      },
      {
        text: '我的',
        iconPath: '',
        selectIconPath: '',
        badge: 'New'
      }
    ]
  },
  onLoad() {
    this.getWeather()
    this.setData({
      name: 'test'
    })
  },

  tabChange() {

  },
  getWeather() {
    let config = require('../../config/config.js')
    wx.getLocation({
      success(location) {
        Object.assign(config, {
          location: `${location.latitude}:${location.longitude}`
        })
        wx.request({
          url: 'https://api.seniverse.com/v3/weather/now.json',
          method: 'get',
          data: config,
          success(res) {
            console.log(res)
          }
        })
      }
    })
    
  },
  getLocation() {
    wx.getLocation({
      success(location) {
        // wx.request({
        //   url: 'https://api.map.baidu.com/geocoder',
        //   method: 'get',
        //   data: {
        //     location: `${location.latitude},${location.longitude}`,
        //     output: 'json',
        //   },
        //   success(cityInfo) {
        //     let city = addressComponent.cityInfo.data.result
        //     if (city) this.getWeather(city)
        //   }
        // })
      }
    })
  }
})