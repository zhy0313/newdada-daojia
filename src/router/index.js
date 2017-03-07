
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello' // 等同于 '../components/Hello'
import Button from '@/components/Button'
import SearchView from '@/views/SearchView'
import CounterView from '@/views/CounterView'
import SquareView from '@/views/SquareView'
<<<<<<< HEAD
import IndexView from '@/views/IndexView'
=======
import AddressView from '@/views/AddressView'
>>>>>>> e5990803cbc7bd67c2b3ed38485f8f7dc7773abd

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
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/btn',
      name: 'Button',
      component: Button
    },
    {
      path: '/address',
      name: 'address',
      component: AddressView
    }
  ]
})
