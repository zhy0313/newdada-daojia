<template>
  <badge class="product-item-container"
    :content="productItem.cartNum" :show="isShowTip">
    <ProductImage :productItem="productItem"></ProductImage>
    <!-- <img :src="productItem.imageUrl">
    <span v-if="isInvalid" class="product-mask">{{productItem.skuStateName}}</span> -->
    <span v-if="!isOrder">¥{{productItem.price}}</span>
    <i v-if="showMore" class="iconfont icon-6"></i>
  </badge>
</template>

<script>
  import ProductImage from './ProductImage'

  export default {
    components: {
      ProductImage
    },
    props: {
      productItem: Object,
      isOrder: {
        type: Boolean,
        default: false
      },
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
        return state !== 1 && state !== 3 && state !== undefined
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

    // img {
    //   width: 53px;
    //   height: 53px;
    //   border-radius: 5px;
    // }


    .icon-6 {
      font-size: 30px;
      position: absolute;
      top: 20px;
      right: -41px;
      color: $daojia-light;
    }
  }
</style>
