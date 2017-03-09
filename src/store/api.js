import Vue from 'vue'

// 公共参数
const commonParams = {platCode: 'H5', appName: 'paidaojia', appVersion: '3.9.0'}

// GET 请求
Vue.getAPI = Vue.prototype.$getAPI = (params) => {
  params.body = JSON.stringify(params.body)

  var data = {
    params: {
      ...params,
      ...commonParams
    }
  }
  return Vue.http.get('/client', data)
}

// POST 请求
Vue.postAPI = Vue.prototype.$postAPI = (params) => {
  params.body = JSON.stringify(params.body)
  var data = {
    ...params,
    ...commonParams
  }

  return Vue.http.post('/client', data)
}
