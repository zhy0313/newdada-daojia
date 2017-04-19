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
    >
    <ul class="orderlist-wrapper">
      <li class="orderlist-item" v-for="item in orderlist">
        <router-link to="/" class="store-name">
          <span>
            {{item.storeName}}
            <i class="iconfont icon-FowordArrow"></i>
          </span>
          <span
            v-if="item.mainOrderStateMap"
            :style="{color: item.mainOrderStateMap.orderColor}">
            {{item.mainOrderStateMap.orderStateName}}
          </span>
        </router-link>
        {{item.orderId}}
      </li>
    </ul>
  </loadmore>
</template>

<script>
  import Loader from '@/components/Loader'
  import DefaultPageTip from '@/components/DefaultPageTip'

  export default {
    data () {
      return {
        startIndex: 0,
        orderlist: [],
        loading: true,
        msg: '没有未评价的订单哦，赶紧去购物吧',
        hasComment: false
      }
    },
    components: {
      Loader,
      DefaultPageTip
    },
    methods: {
      loadBottom () {
        console.log('加载更多')
      },
      fetchOrderList () {
        this.$getAPI({
          functionId: 'order/list',
          body: {
            startIndex: this.startIndex,
            dataSize: 10
          }
        }).then((response) => {
          this.loading = false
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
  @import "../../assets/styles/variables";

  .orderlist-loadmore-wrapper {

    .orderlist-item {
      height: 200px;
      background: #fff;
    }

    .store-name {
      height: 40px;
      font-size: 15px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
