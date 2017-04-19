// import './util'
// import * as minicart from './minicart'

// const api = {
//   ...minicart
// }
// export default api
import Vue from 'vue'

// 公共参数
const commonParams = {platCode: 'H5', appName: 'paidaojia', appVersion: '3.9.0'}
const url = '/client'
// GET 请求
Vue.getAPI = Vue.prototype.$getAPI = (params) => {
  params.body = JSON.stringify(params.body)

  var data = {
    params: {
      ...params,
      ...commonParams
    }
  }
  return Vue.http.get(url, data)
}

// POST 请求
Vue.postAPI = Vue.prototype.$postAPI = (params) => {
  params.body = JSON.stringify(params.body)
  var data = {
    ...params,
    ...commonParams
  }

  return Vue.http.post(url, data)
}
