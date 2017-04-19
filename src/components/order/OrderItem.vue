<template>
  <li class="orderlist-item">
    <OrderItemHeader
      :mainOrderStateMap="orderItem.mainOrderStateMap"
      >
      {{orderItem.storeName}}
    </OrderItemHeader>
    {{orderItem.orderId}}
  </li>
</template>

<script>
import OrderItemHeader from './OrderItemHeader'

export default {
  components: {
    OrderItemHeader
  },
  props: {
    orderItem: Object
  }
  // computed: {
  //   isInvalid () { // 无效商品，无货，已下架等
  //     let state = this.productItem.skuState
  //     return state !== 1 && state !== 3
  //   }
  // }
}
</script>

<style lang="scss">
  @import "../../assets/styles/variables";

    .orderlist-item {
      height: 200px;
      background: $daojia-pure;
      margin-bottom: 10px;
    }
</style>
