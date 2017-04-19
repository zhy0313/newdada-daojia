
import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/views/IndexView'
import AddressView from '@/views/AddressView'

Vue.use(Router)

export default new Router({
  model: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexView
    },
    {
      path: '/address',
      name: 'address',
      component: AddressView
    }
  ]
})
