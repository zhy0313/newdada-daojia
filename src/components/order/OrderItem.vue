<template>
  <li class="orderlist-item">
    <OrderItemHeader
      :mainOrderStateMap="orderItem.mainOrderStateMap"
      >
      {{orderItem.storeName}}
    </OrderItemHeader>
    <OrderItemContent :orderItem="orderItem" >
    </OrderItemContent>
  </li>
</template>

<script>
import OrderItemHeader from './OrderItemHeader'
import OrderItemContent from './OrderItemContent'

export default {
  components: {
    OrderItemHeader,
    OrderItemContent
  },
  props: {
    orderItem: Object
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/variables";

  .orderlist-item {
    // height: 200px;
    background: $daojia-pure;
    margin-bottom: 10px;
  }

</style>
