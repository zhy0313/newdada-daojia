<template>
  <flex class="order-item-content">
    <OrderStateTrack data-to="orderstate" v-if="orderItem.orderListShowTrack == 1" :stateIcon="orderItem.orderStateMap.stateIcon">
    </OrderStateTrack>
    <div class="order-item-info">
      <OrderStateInfo data-to="orderstate" v-if="orderItem.orderListShowTrack == 1"
        :orderStateMap="orderItem.orderStateMap"></OrderStateInfo>

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
import OrderStateTrack from './OrderStateTrack'
import OrderStateInfo from './OrderStateInfo'
import OrderTotalInfo from './OrderTotalInfo'
import OrderItemFooter from './OrderItemFooter'
export default {
  components: {
    ProductList,
    OrderStateTrack,
    OrderStateInfo,
    OrderTotalInfo,
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
    // position: relative;
    align-items: stretch;


    .order-item-info {
      flex: 1;
      position: relative;
    }

    .product-list-container {
      padding: 0 70px 10px 0;
      height: 65px;
      @include border-bottom();
    }

    .icon-6 {
      top: 10px;
    }
  }
</style>
