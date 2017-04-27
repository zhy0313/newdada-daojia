<template>
  <flex class="order-item-footer">
    <span class="order-date">{{orderItem.dateSubmitStr}}</span>
    <btn>{{orderItem.payButtonName || '去支付'}}</btn>
    <btn>再次购买</btn>
  </flex>
</template>

<script>
export default {
  props: {
    orderItem: {}
  }
}
</script>

<style lang="scss">
  .order-item-footer {
    padding: 10px 10px 10px 0;
    height: 45px;

    .order-date {
      flex: 1;
    }

    .btn {
      background-color: #fff;

    }
  }
</style>
