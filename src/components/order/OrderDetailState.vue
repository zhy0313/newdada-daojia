<template>
  <flex class="order-detail-state">
    <OrderStateIcon stateIcon="orderState.stateIcon"></OrderStateIcon>
    <div class="state-content">
      <div class="state-title">{{orderState.stateTitle}}</div>
      <div class="state-desc">{{orderState.stateDesc}}</div>
    </div>
    <div>
      <span class="state-time">{{orderState.stateTime}}</span>
      <router-link to="/" class="more-state">更多状态<i class="iconfont icon-FowordArrow"></i></router-link>
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
    padding: 20px 10px 10px;
    align-items: flex-start;
    position: relative;
    background: #fff;
    margin-bottom: 10px;
    font-size: 13px;
    color: #999;

    &::before {
      content: "";
      position: absolute;
      height: 15px;
      width: 1px;
      border-left: 1px solid #d9d9d9;
      top: 0;
      left: 23px;
      transform: scaleX(.5);
    }

    .state-content {
      flex: 1;
      margin: 0 10px;
    }

    .state-title {
      font-size: 17px;
      color: #333;
    }

    .state-desc {
      padding-top: 5px;
    }

    .more-state {
      display: block;
      color: #47b34f;
      padding-top: 10px;
    }
  }
</style>
