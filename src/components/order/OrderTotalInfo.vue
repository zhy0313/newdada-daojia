<template>
  <div class="order-list-total-info">
    <span class="total-price">{{orderItem.productTotalPrice}}</span>
    <span class="total-num">{{orderItem.productTotalNumStr}}</span>
    <span v-if="orderItem.deliveryType != 1"
      :class="{
        'dada-tag': true,
        'self-tag': orderItem.deliveryType == 2
      }"
    >{{orderItem.deliveryTypeDesc}}</span>
  </div>
</template>

<script>
export default {
  props: {
    orderItem: {}
  }
}
</script>

<style lang="scss">

    .order-list-total-info {
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 10px;
      text-align: right;
      height: 53px;
      justify-content: space-between;

      .total-price {
        font-size: 16px;
        color: #ff5a5e;
      }

      .total-num {
        font-size: 11px;
        color: #333;
      }

      .dada-tag {
        font-size: 10px;
        line-height: 1;
        padding: 1px;
        display: inline-block;
        border-radius: 1px;
        color: #16a9ff;
        border: 1px solid #16a9ff;
      }

      .self-tag {
        color: #47B34F;
        border-color: #47B34F;
      }
    }
</style>
