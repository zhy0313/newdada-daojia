
import Vue from 'vue'
import Router from 'vue-router'
// 一级导航
import IndexView from '@/views/IndexView'
import ListView from '@/views/tabBar/ListView'
import DiscoverView from '@/views/tabBar/DiscoverView'
import CartView from '@/views/tabBar/CartView'
import OrderView from '@/views/tabBar/OrderView'
import MyView from '@/views/tabBar/MyView'
// 示例代码 START
import SearchView from '@/views/SearchView'
import CounterView from '@/views/CounterView'
import SquareView from '@/views/SquareView'
// 示例代码 END
import AddressView from '@/views/AddressView'
import CashierView from '@/views/CashierView'
import StoreHome from '@/views/StoreHome/StoreHome.vue'
import AddressListView from '@/views/AddressListView'
import NewAddressView from '@/views/NewAddressView'
import EditAddressView from '@/views/EditAddressView'

Vue.use(Router)

export default new Router({
  model: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      name: 'IndexView',
      component: IndexView
    },
    {
      path: '/list',
      name: 'ListView',
      component: ListView
    },
    {
      path: '/discover',
      name: 'DiscoverView',
      component: DiscoverView
    },
    {
      path: '/cart',
      name: 'CartView',
      component: CartView
    },
    {
      path: '/order',
      name: 'OrderView',
      component: OrderView
    },
    {
      path: '/my',
      name: 'MyView',
      component: MyView
    },
    {
      path: '/counter',
      name: 'CounterView',
      component: CounterView
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
    },
    {
      path: '/storeHome',
      name: 'storeHome',
      component: StoreHome
    },
    {
      path: '/addressList',
      name: 'addressList',
      component: AddressListView
    },
    {
      path: '/newAddress',
      name: 'newAddress',
      component: NewAddressView
    },
    {
      path: '/editAddress',
      name: 'editAddress',
      component: EditAddressView
    },
    {
      path: '*',
      redirect: 'IndexView'
    }
  ]
})
