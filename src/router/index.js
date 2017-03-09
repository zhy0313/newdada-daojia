
import Vue from 'vue'
import Router from 'vue-router'
import SearchView from '@/views/SearchView'
// 示例代码 START
import CounterView from '@/views/CounterView'
import SquareView from '@/views/SquareView'
import IndexView from '@/views/IndexView'
import HomeView from '@/views/HomeView'
// 示例代码 END
import AddressView from '@/views/AddressView'
import CashierView from '@/views/CashierView'

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
      path: '/counter',
      name: 'CounterView',
      component: CounterView
    },
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/search',
      name: 'SearchView',
      component: SearchView
    },
    {
      path: '/square',
      name: 'SquareView',
      component: SquareView
    },
    {
      path: '/address',
      name: 'address',
      component: AddressView
    },
    {
      path: '/cashier',
      name: 'cashier',
      component: CashierView
    }
  ]
})
