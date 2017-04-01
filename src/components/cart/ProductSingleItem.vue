<template>
  <flex class="minicart-single-product" align="top">
    <!-- <div class="image-wrap">
      <img :src="productItem.imageUrl"></img>

    </div> -->
    <ProductImage :productItem="productItem">
      {{productItem.promotionTip || productItem.skuStateName}}
    </ProductImage>
    <flex direction="column" class="minicart-product-info">
      <div class="minicart-product-name">{{productItem.skuName}}</div>
      <div v-if="productItem.tags.length">
        <span class="product-tag"
          v-for="tag in productItem.tags"
          :style="{background: `#${tag.colorCode}`}">
          {{tag.iconText}}
        </span>
      </div>
      <span class="product-price">¥{{productItem.price}}</span>
    </flex>
  </flex>
</template>

<script>
import ProductImage from './ProductImage'

export default {
  components: {
    ProductImage
  },
  props: {
    productItem: Object
  }
  // computed: {
  //   isInvalid () { // 无效商品，无货，已下架等
  //     let state = this.productItem.skuState
  //     return state !== 1 && state !== 3
  //   }
  // }
}
</script>

<style lang="scss">

  .minicart-single-product {
    padding: 5px 0;

    .minicart-product-info {
      flex-direction: column;
      align-productItems: flex-start;
      justify-content: space-between;
      height: 60px;
      margin-left: 10px;
    }

    .minicart-product-name {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
    }

    .product-tag {
      color: #fff;
      font-size: 10px;
      line-height: 12px;
      padding: 1px 2px;
      border-radius: 2px;
    }

    .product-price {
      color: #ff3434;
      font-size: 16px;
    }
  }
</style>
