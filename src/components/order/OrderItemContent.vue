<template>
  <flex class="order-item-content">
    <div v-if="orderItem.orderStateMap" class="order-state-track">
    </div>
    <div class="order-item-info">
      <div v-if="orderItem.orderStateMap" class="order-state-info">
        {{orderItem.orderStateMap.stateTitle}}
      </div>
    </div>
  </flex>
</template>
<script>
export default {
  components: { },
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

    .content-track {
      margin: 0 10px;
    }
  }
</style>
