<template>
  <div :class="{'cart-detail-info': true, close: isClose}">
    <span><slot></slot></span>
    <div class="cart-product-list">
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemList: Array,
    isClose: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/variables";
  @import "../../assets/styles/mixins";

  .cart-detail-info {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    padding-bottom: 50px;
    transform: translateY(0);
    transition: transform .5s ease-out 0s;
    &.close {
      transform: translateY(100%);
    }

    .cart-product-list {

    }
  }
</style>
