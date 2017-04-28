<template>
  <div class="order-state-track">
    <OrderStateIcon :stateIcon="stateIcon"></OrderStateIcon>
    <i class="state-track-dot"></i>
    <i class="state-track-dot"></i>
  </div>
</template>

<script>
  import OrderStateIcon from './OrderStateIcon'

  export default {
    components: {
      OrderStateIcon
    },
    props: {
      stateIcon: String
    }
  }
</script>

<style lang="scss">
  @import "../../assets/styles/variables";
  @import "../../assets/styles/mixins";

  .order-state-track {
    margin: 55px 12px 20px 12px;
    width: 1px;
    position: relative;
    @include border-left();

    .state-track-dot {
      position: absolute;
      display: inline-block;
      background: #d9d9d9;
      width: 10px;
      height: 10px;
      border: 5px solid #fff;
      box-sizing: content-box;
      border-radius: 50%;
      bottom: 0;
      transform: translate3d(-10px, -50px, 0);

      &:last-child {
        transform: translate3d(-10px, 6px, 0);
      }
    }

    .order-state-icon {
      position: absolute;
      background-color: #fff;
      transform: translate3d(-13px, -32px, 0);
    }
  }


</style>
