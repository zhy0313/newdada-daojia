<template>
  <div class="order-detail-container">
    <OrderDetailEstimate></OrderDetailEstimate>
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
    created () {

    }
  }
</script>

<style lang="scss">

</style>
