<template>
  <div class="orderlist-page-container">
    <OrderlistLoadmore> </OrderlistLoadmore>
    <FooterNav :activeKey="3"></FooterNav>
  </div>
</template>
<script>
  import FooterNav from '@/components/FooterNav'
  import OrderlistLoadmore from '@/components/order/OrderlistLoadmore'

  export default {
    components: {
      FooterNav,
      OrderlistLoadmore
    }
  }
</script>

<style lang="scss">
  .orderlist-page-container {
    padding-bottom: 50px;
  }
</style>
