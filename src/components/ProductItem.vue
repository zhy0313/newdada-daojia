<template>
  <badge class="product-item-container" :content="productItem.cartNum" :show="isShowTip" theme="primary">
    <img :src="productItem.imageUrl">
    <span v-if="productItem.skuStateName" class="product-mask">{{productItem.skuStateName}}</span>
    <span>¥{{productItem.price}}</span>
    <i v-if="showMore" class="iconfont icon-6"></i>
  </badge>
</template>

<script>
export default {
  props: {
    productItem: Object,
    showMore: Boolean
  },
  computed: {
    isShowTip () {
      return this.productItem.cartNum > 1
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/styles/variables";

  .product-item-container {
    font-size: 12px;
    height: 90px;
    width: 53px;
    line-height: 1;
    text-align: center;
    background-color: $daojia-pure;

    .icon-6 {
      font-size: 30px;
      position: absolute;
      top: 20px;
      right: -41px;
      color: $daojia-light;
    }

    .product-mask {
      color: $daojia-pure;
      background: rgba(0, 0, 0, .5);
      width: 53px;
      height: 53px;
      line-height: 53px;
      border-radius: 5px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
