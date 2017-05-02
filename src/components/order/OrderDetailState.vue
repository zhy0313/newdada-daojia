<template>
  <flex class="order-detail-state">
    <OrderStateIcon stateIcon="orderState.stateIcon"></OrderStateIcon>
    <div class="state-content">
      {{orderState.stateTitle}}
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
      orderState: {}
    }
  }
</script>

<style lang="scss">
  .order-detail-state {

  }
</style>
