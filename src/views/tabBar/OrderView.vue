<template>
  <div>
    <Loader v-if="loading"></Loader>
    <DefaultPageTip
      v-else-if="orderlist.length == 0"
      :msg="msg"
      btnName="去逛逛"
    ></DefaultPageTip>
    <loadmore v-else class="loadmore-wrapper">
      <ul class="orderlist-wrapper">
        <li class="orderlist-item" v-for="item in orderlist">
          {{item.orderId}}
        </li>
      </ul>
    </loadmore>
    <FooterNav :activeKey="3"></FooterNav>
  </div>
</template>
<script>
  import FooterNav from '@/components/FooterNav'
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
      FooterNav,
      Loader,
      DefaultPageTip
    },
    methods: {
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

</style>
