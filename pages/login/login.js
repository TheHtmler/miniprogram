Page({
  data: {

  },
  formSubmit: function(e) {
    console.log(e.detail.value)
    let data = {...e.detail.value}
    wx.request({
      url: 'http://www.alifather.cn:5002/api/users/login',
      data: { ...data},
      header: {
        'Content-Type': 'Application/json'
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  }
})