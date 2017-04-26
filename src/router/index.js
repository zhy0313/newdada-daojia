
import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/views/IndexView'
import AddressView from '@/views/AddressView'
// 一级导航
import ListView from '@/views/tabBar/ListView'
import DiscoverView from '@/views/tabBar/DiscoverView'
import CartView from '@/views/tabBar/CartView'
import OrderView from '@/views/tabBar/OrderView'
import MyView from '@/views/tabBar/MyView'
// 示例代码 START
import CounterView from '@/views/CounterView'
// 示例代码 END
import CashierView from '@/views/Cashier/CashierView'
import SettlementView from '@/views/Settlement/SettlementView'
import StoreHome from '@/views/StoreHome/StoreHome.vue'
import AddressListView from '@/views/AddressListView'
import NewAddressView from '@/views/NewAddressView'
import EditAddressView from '@/views/EditAddressView'
import ActivityView from '@/views/Activity/ActivityView'
import GoodsDetailView from '@/views/goodsDetailView' // 报错先注释掉
import IndexHome from '@/views/Index' // 报错先注释掉

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
      path: '/index',
      name: 'Index',
      component: IndexHome
    },
    {
      path: '/address',
      name: 'address',
      component: AddressView
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
      path: '/minicart',
      name: 'CounterView',
      component: CounterView
    },
    {
      path: '/settlement',
      name: 'settlement',
      component: SettlementView
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
      path: '/editAddress/:name/:tel/:id/:poi/:title',
      name: 'editAddress',
      component: EditAddressView
    },
    {
      path: '/activity',
      name: 'activity',
      component: ActivityView
    },
    {
      path: '/goodsDetail/:skuid/:storeid/:orgcode',
      name: 'goodsDetail',
      component: GoodsDetailView
    },
    {
      path: '*',
      redirect: 'IndexView'
    }
  ]
})
