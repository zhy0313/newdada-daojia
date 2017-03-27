<template>
  <div class="cart-store-container">
    <cell class="cell-store-name" href="#">{{storeItem.storeName}}</cell>
    <flex  class="cell-product-info">
    <cell>
      <ProductItem v-for="item in storeItem.itemList"
        :productItem="item"
        :showMore="hasMoreProduct"
        :key="item.skuId">
      </ProductItem>
    </cell>
    <div class="more-product" v-if="hasMoreProduct">
      共{{storeItem.totalNum}}件
    </div>

    </flex>
  </div>
</template>

<script>
import ProductItem from './ProductItem'

export default {
  components: {
    ProductItem
  },
  props: {
    storeItem: Object
  },
  computed: {
    hasMoreProduct () {
      let listWidth = this.storeItem.itemList.length * 63 + 60
      let globalWidth = window.innerWidth
      return listWidth > globalWidth
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/variables";

  .cart-store-container {

    .cell-store-name {
      background: #fcfcfc;
      border: 1px solid #e7e9e4;
      border-bottom: none;
      border-radius: 3px 3px 0 0;
      box-shadow: 0px -1px 2px 1px rgba(244, 244, 244, .6) inset;
    }

    .cell-product-info {
      background: $daojia-pure;
      border: 1px solid #e7e9e4;
      border-top: none;
      border-radius: 0 0 3px 3px;
      box-shadow: 0px 1px 3px 0 rgba(231, 233, 228, 1);
      margin-bottom: 15px;
      align-items: center;
      justify-content: space-between;

      .cell {
        padding: 0 30px 0 10px;
      }

      .cell-body {
        height: 100px;
        padding: 15px 0;
      }

      .more-product {
        white-space: nowrap;
        padding-right: 10px;
      }
    }

    .icon-FowordArrow {
      color: #cacaca;
    }
  }
</style>
