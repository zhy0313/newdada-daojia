<template>
  <div v-if="orderStateMap" class="order-list-state-info">
    <div class="state-header">
      <span class="state-title">{{orderStateMap.stateTitle}}</span>
      <span class="state-time">{{orderStateMap.stateTime}}</span>
    </div>
    <div class="state-desc">
      {{orderStateMap.stateDesc}}
      <router-link to="/" class="refund-detail">{{orderStateMap.hrefContent || '查看退款详情'}}</router-link>
    </div>

    <OrderStateIcon :stateIcon="orderStateMap.stateIcon"></OrderStateIcon>
  </div>
</template>

<script>
  import OrderStateIcon from './OrderStateIcon'

  export default {
    components: {
      OrderStateIcon
    },
    props: {
      orderStateMap: Object
    }
  }
</script>

<style lang="scss">
  @import "../../assets/styles/variables";

  .order-list-state-info {
    margin: 0 10px 10px 15px;
    border: 1px solid $daojia-border;
    border-radius: 3px;
    color: #999;
    font-size: 13px;
    background-color: #fafafa;
    padding: 10px;
    position: relative;

    &::before, &::after {
      border: 10px solid transparent;
      border-left-width: 1px;
      border-right-color: #fafafa;
      position: absolute;
      content: "";
      left: -10px;
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      left: -11px;
      border-right-color: #e8e8e8;
    }

    .state-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    .state-title {
      font-size: 15px;
      color: #484848;
    }

    .state-desc {
      padding-right: 40px;
    }

    .refund-detail {
      font-size: 13px;
      color: #2486ff;
    }

    .order-state-icon {
      position: absolute;
      background-color: #fff;
      top: 50%;
      left: -42px;
      transform: translateY(-50%);
    }
  }

</style>
