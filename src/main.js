// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// import impression from 'vue-impression' // 新达达 Vue 组件库
import impression from './assets/scripts/components/index' // 新达达 Vue 组件库 源码定制

import App from './App'
import router from './router'
import store from './store'
// import 'vue-impression/dist/styles/index' // 外部样式引用，导入的代码库中的样式，好多样式不适合
// import './assets/styles/index' // Vue组件库自定义样式 取代上面的库样式

// 全局配置
// Vue 启动时阻止提示
Vue.config.productionTip = false

Vue.use(impression)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
