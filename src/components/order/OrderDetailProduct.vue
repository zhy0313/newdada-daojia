<template>
  <div class="order-detail-product">
    <cell v-if="orderInfo.storeName"
      to="/"
      :hasArrow="true">{{orderInfo.storeName}}</cell>

    <ProductList
      :isOrder="true"
      :itemList="orderInfo.orderProductList">
      <span class="product-num">{{orderInfo.productTotalNumStr}}<i class="iconfont icon-FowordArrow"></i></span>
    </ProductList>


  </div>
</template>

<script>
  import ProductList from '@/components/cart/ProductList'

  export default {
    components: {
      ProductList
    },
    props: {
      orderInfo: {}
    }
  }
</script>

<style lang="scss">
  @import "../../assets/styles/variables";
  @import "../../assets/styles/mixins";

  .order-detail-product {
    background: #fff;

    .product-list-container {
      @include border-bottom();
      background-position: $cell-gap-left 100%;
      padding: 10px 70px 10px 10px;
      height: 75px;
    }

    .product-num {
      position: absolute;
      right: 10px;
      top: 28px;
    }

    .icon-FowordArrow::before {
      color: #c4c4c4;
    }
  }
</style>
