<template>
  <flex class="order-item-content">
    <div v-if="orderItem.orderStateMap" class="order-state-track">
    </div>
    <div class="order-item-info">
      <!-- <div v-if="orderItem.orderStateMap" class="order-state-info">
        <div class="state-header">
          <span>{{orderItem.orderStateMap.stateTitle}}</span>
          <span>{{orderItem.orderStateMap.stateTime}}</span>
        </div>

        <div class="state-desc">
          {{orderItem.orderStateMap.stateDesc}}
          <router-link to="/" class="refund-detail">{{orderItem.orderStateMap.hrefContent || '查看退款详情'}}</router-link>
        </div>
      </div> -->
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

  .order-item-content {
    padding: 0 10px;
    position: relative;
    align-items: stretch;

    .order-state-track {
      margin: 0 10px;
    }

    .order-item-info {
      flex: 1;
    }
  }
</style>
