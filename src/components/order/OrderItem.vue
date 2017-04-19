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
