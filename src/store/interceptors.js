import Vue from 'vue'
import VueResource from 'vue-resource'
import * as MutationTypes from './mutation-types'

Vue.use(VueResource)

export default (store) => {
  // JSON对象参数化
  Vue.http.options.emulateJSON = true

  // 自定义请求头
  // Vue.http.headers.common['token'] = '' + Date.now()

  Vue.http.interceptors.push((request, next) => {
    // 请求前的处理逻辑
    //
    // 增加公共参数
    // request.params.body = JSON.stringify(request.params.body)
    // request.params = {...request.params, platCode: 'H5', appName: 'paidaojia', appVersion: '3.8.0'}

    store.commit(MutationTypes.LOADING, true) // loading true
    next((response) => {
      store.commit(MutationTypes.LOADING, false) // loading false
      let responseData = { ...response }
      // if (response.data.success) {
      //   console.log('接口成功')
      // } else {
      //   console.log('接口失败')
      //   responseData.status = 404
      // }
      responseData.result = response.data.result
      // console.log(responseData)
      // debugger
      return responseData
    })
  })
}
