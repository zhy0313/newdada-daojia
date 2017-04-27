<!-- 示例代码 -->
<template>
  <Loader v-if="loading"></Loader>
  <DefaultPageTip
    v-else-if="orderlist.length == 0"
    :msg="msg"
    btnName="去逛逛"
    >
  </DefaultPageTip>
  <loadmore
    v-else
    class="orderlist-loadmore-wrapper"
    :bottomMethod="loadBottom"
    :showLoading="loading"
    >
    <ul>
      <OrderItem
        v-for="item in orderlist"
        :orderItem="item"
        >
      </OrderItem>
    </ul>
  </loadmore>
</template>

<script>
  import Loader from '@/components/Loader'
  import DefaultPageTip from '@/components/DefaultPageTip'
  import OrderItem from './OrderItem'

  export default {
    data () {
      return {
        startIndex: 0,
        orderlist: [],
        loading: true,
        loadmore: true,
        msg: '没有未评价的订单哦，赶紧去购物吧',
        hasComment: false
      }
    },
    components: {
      Loader,
      DefaultPageTip,
      OrderItem
    },
    methods: {
      loadBottom () {
        ++this.startIndex
        console.log('加载更多', this.startIndex)
        this.fetchOrderList()
      },
      fetchOrderList () {
        this.loadmore = true
        this.$getAPI({
          functionId: 'order/list',
          body: {
            startIndex: this.startIndex,
            dataSize: 10
          }
        }).then((response) => {
          this.loading = this.loadmore = false
          if (response.body.code === '0') {
            console.log(response.result)
            this.orderlist = this.orderlist.concat(response.result)
          } else {
            this.$toast({message: response.body.msg, position: 'center'})
          }
        }, (err) => {
          console.log('err', err)
        })
      },
      isExistsComment () {
        this.$getAPI({
          functionId: 'order/isExistsComment',
          body: { }
        }).then((response) => {
          if (response.body.code === '0') {
            this.hasComment = response.result
          }
        })
      }
    },
    created () {
      this.fetchOrderList()
      this.isExistsComment()
    }
  }
</script>

<style lang="scss">
  // .orderlist-loadmore-wrapper {
  //
  // }
</style>
