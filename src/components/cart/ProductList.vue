<template>

    <!-- 商品列表 -->
  <div class="product-list-container">
    <ProductItem
      v-for="item in itemList"
      :productItem="item"
      :showMore="showMore"
      :isOrder="isOrder"
      :key="item.skuId || item.sku">
    </ProductItem>
    <slot></slot>
  </div>
</template>

<script>
import ProductItem from './ProductItem'

export default {
  components: {
    ProductItem
  },
  props: {
    itemList: Array,
    showMore: {
      type: Boolean,
      default: false
    },
    isOrder: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/variables";

  .product-list-container {
    height: 100px;
    padding: 15px 30px 15px 10px;
    position: relative;
    overflow: hidden;
  }
</style>
