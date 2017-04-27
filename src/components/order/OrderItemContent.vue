<template>
  <flex class="order-item-content">
    <div v-if="orderItem.orderStateMap" class="order-state-track">
    </div>
    <div class="order-item-info">
      <OrderStateInfo :orderStateMap="orderItem.orderStateMap"></OrderStateInfo>
    </div>
  </flex>
</template>
<script>
import OrderStateInfo from './OrderStateInfo'
export default {
  components: {
    OrderStateInfo
  },
  props: {
    orderItem: Object
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/variables";
  @import "../../assets/styles/mixins";

  .order-item-content {
    padding: 0 10px;
    position: relative;
    align-items: stretch;

    .order-state-track {
      margin: 0 12px;
      width: 1px;
      @include border-left();
    }

    .order-item-info {
      flex: 1;
    }
  }
</style>
