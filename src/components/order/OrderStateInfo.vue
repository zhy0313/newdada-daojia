<template>
  <div v-if="orderStateMap" class="order-state-info">
    <div class="state-header">
      <span>{{orderStateMap.stateTitle}}</span>
      <span>{{orderStateMap.stateTime}}</span>
    </div>

    <div class="state-desc">
      {{orderStateMap.stateDesc}}
      <router-link to="/" class="refund-detail">{{orderStateMap.hrefContent || '查看退款详情'}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orderStateMap: Object
  }
}
</script>

<style lang="scss">
  .order-state-info {
    .state-header {
      display: flex;
      justify-content: space-between;
    }
  }

</style>
