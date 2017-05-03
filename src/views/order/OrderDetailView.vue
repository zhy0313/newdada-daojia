<template>
  <div class="order-detail-container">
    <OrderDetailEstimate
      v-if="orderInfo.preDeliveryTimeStr"></OrderDetailEstimate>
    <OrderDetailState
      v-if="orderInfo.orderStateMap"
      :orderState="orderInfo.orderStateMap"></OrderDetailState>
  </div>
</template>

<script>
  import OrderDetailEstimate from '@/components/order/OrderDetailEstimate'
  import OrderDetailState from '@/components/order/OrderDetailState'

  export default {
    components: {
      OrderDetailEstimate,
      OrderDetailState
    },
    data () {
      return {
        orderId: String,
        orderInfo: {}
      }
    },
    created () {
      let orderId = this.orderId = this.$route.params.orderId
      console.log(orderId)
      this.$getAPI({
        functionId: 'order/info',
        body: {
          orderId: orderId
        }
      }).then((response) => {
        this.loading = this.loadmore = false
        if (response.body.code === '0') {
          // console.log(response.result)
          this.orderInfo = response.result
        } else {
          this.$toast({message: response.body.msg, position: 'center'})
        }
      }, (err) => {
        console.log('err', err)
      })
    }
  }
</script>

<style lang="scss">

</style>
