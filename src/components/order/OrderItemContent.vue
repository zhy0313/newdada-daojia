<template>
  <flex class="order-item-content">
    <div v-if="orderItem.orderStateMap" class="order-state-track">
    </div>
    <div class="order-item-info">
      <OrderStateInfo :orderStateMap="orderItem.orderStateMap"></OrderStateInfo>

      <OrderTotalInfo :orderItem="orderItem"></OrderTotalInfo>
      <ProductList
        :itemList="orderItem.productList"
        :showMore="hasMoreProduct"
        :isOrder="true"
        ></ProductList>

      <OrderItemFooter :orderItem="orderItem"></OrderItemFooter>
    </div>
  </flex>
</template>
<script>
import ProductList from '@/components/cart/ProductList'
import OrderStateInfo from './OrderStateInfo'
import OrderTotalInfo from './OrderTotalInfo'
import OrderItemFooter from './OrderItemFooter'
export default {
  components: {
    OrderStateInfo,
    OrderTotalInfo,
    ProductList,
    OrderItemFooter
  },
  props: {
    orderItem: Object
  },
  computed: {
    hasMoreProduct () {
      let listWidth = this.orderItem.productList.length * 63 + 60
      let globalWidth = window.innerWidth
      return listWidth > globalWidth
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/variables";
  @import "../../assets/styles/mixins";

  .order-item-content {
    padding: 10px 0 0 10px;
    position: relative;
    align-items: stretch;

    .order-state-track {
      margin: 73px 12px 20px 12px;
      width: 1px;
      @include border-left();
    }

    .order-item-info {
      flex: 1;
    }

    .product-list-container {
      padding: 0 40px 10px 0;
      height: 65px;
      @include border-bottom();
    }

    .icon-6 {
      top: 10px;
    }
  }
</style>
