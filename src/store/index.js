import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import mutations from './mutations'
import actions from './actions'
import * as getters from './getters'
import interceptors from './interceptors' // 请求拦截器
import './api' // 请求增强函数
import util from './util'
console.log(mutations)
console.log(util)

Vue.use(Vuex)

// 状态树
const state = {
  miniCartInfo: {
    buttonName: '去结算',
    buttonState: 1,
    itemList: []
  },
  currentStore: {},
  isLoading: false
}

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

//  增加 http 拦截器
interceptors(store)

if (module.hot) {
  module.hot.accept([
    './mutations',
    './getters',
    './actions'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
