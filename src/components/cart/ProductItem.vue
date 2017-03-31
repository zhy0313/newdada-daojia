<template>
  <badge class="product-item-container"
    :content="productItem.cartNum" :show="isShowTip">
    <img :src="productItem.imageUrl">
    <span v-if="isInvalid" class="product-mask">{{productItem.skuStateName}}</span>
    <span>¥{{productItem.price}}</span>
    <i v-if="showMore" class="iconfont icon-6"></i>
  </badge>
</template>

<script>
export default {
  props: {
    productItem: Object,
    showMore: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isShowTip () {
      return this.productItem.cartNum > 1 && !this.isInvalid
    },
    isInvalid () { // 无效商品，无货，已下架等
      let state = this.productItem.skuState
      return state !== 1 && state !== 3
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/variables";

  .product-item-container {
    font-size: 12px;
    height: 90px;
    width: 53px;
    line-height: 1;
    text-align: center;
    // background-color: $daojia-pure;

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

    .icon-6 {
      font-size: 30px;
      position: absolute;
      top: 20px;
      right: -41px;
      color: $daojia-light;
    }
  }
</style>
