<template>
  <flex class="order-detail-state">
    <OrderStateIcon stateIcon="orderState.stateIcon"></OrderStateIcon>
    <div class="state-content">
      <div>{{orderState.stateTitle}}</div>
      <div>{{orderState.stateDesc}}</div>
    </div>

  </flex>
</template>

<script>
  import OrderStateIcon from './OrderStateIcon'
  export default {
    components: {
      OrderStateIcon
    },
    props: {
      orderState: Object
    }
  }
</script>

<style lang="scss">
  .order-detail-state {

  }
</style>
