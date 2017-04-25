import Vue from 'vue'
import VueResource from 'vue-resource'
// import * as MutationTypes from './mutation-types'

Vue.use(VueResource)

export default (store) => {
  // JSON对象参数化
  Vue.http.options.emulateJSON = true

  // 自定义请求头
  // Vue.http.headers.common['token'] = '' + Date.now()

  Vue.http.interceptors.push((request, next) => {
    // 请求前的处理逻辑
    // store.commit(MutationTypes.LOADING, true) // loading true
    next((response) => {
      // store.commit(MutationTypes.LOADING, false) // loading false
      let responseData = { ...response }

      // 请求失败，网络异常，404 等
      if (!responseData.ok) {
        Vue.$toast({message: '网络开小差，请稍后再试哦~[0001]'})
      }
      responseData.result = response.data.result
      // console.log(responseData)
      // debugger
      return responseData
    })
  })
}
