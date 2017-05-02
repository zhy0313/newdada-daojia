<template>
  <li class="orderlist-item" @click="itemClickHandler">
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
  },
  methods: {
    itemClickHandler (event) {
      let orderId = this.orderItem.orderId
      let to = event.target.dataset.to
      let isButton = /button/i.test(event.target.tagName)
      console.log(orderId, to, isButton)
      if (!isButton) {
        this.$router.push({path: `${to || 'orderdetail'}/${orderId}`})
      }
    }
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
