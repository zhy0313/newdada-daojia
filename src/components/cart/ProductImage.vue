<template>
  <div class="product-image-wrap">
    <img :src="productItem.imageUrl" />
    <span v-if="isInvalid" class="product-mask">{{productItem.skuStateName}}</span>
    <span v-else class="promotion-tip"><slot></slot></span>
  </div>
</template>

<script>
export default {
  props: {
    productItem: Object
  },
  computed: {
    isInvalid () { // 无效商品，无货，已下架等
      let state = this.productItem.skuState
      return state !== 1 && state !== 3
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/mixins";
@import "../../assets/styles/variables";

.product-image-wrap {
  width: 53px;
  position: relative;
  text-align: center;

  img {
    width: 53px;
    height: 53px;
    border-radius: 5px;
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

  .promotion-tip {
    font-size: 12px;
    // line-height: 26px;
    color: #ff5757;
    white-space: nowrap;
  }

}


</style>
