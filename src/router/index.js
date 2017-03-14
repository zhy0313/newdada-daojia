
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
<<<<<<< HEAD
import StoreHome from '@/views/StoreHome/StoreHome.vue'
=======
import AddressListView from '@/views/AddressListView'
import NewAddressView from '@/views/NewAddressView'
import EditAddressView from '@/views/EditAddressView'

>>>>>>> 72ff636973ee52f9a3826c0f08a3b53cde14bd1d
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
    },
    {
<<<<<<< HEAD
      path: '/storeHome',
      name: 'storeHome',
      component: StoreHome
=======
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
>>>>>>> 72ff636973ee52f9a3826c0f08a3b53cde14bd1d
    }
  ]
})
