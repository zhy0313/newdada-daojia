<template>
  <flex class="user-wallet">
    <flex-item>
      <div class="item my-wallet">
      </div>
      我的钱包
    </flex-item>
    <flex-item>
      <div class="item my-coupon">{{'--'}}</div>
      优惠券
    </flex-item>
    <flex-item>
      <div class="item">{{'--'}}</div>
      白条
    </flex-item>
  </flex>
</template>

<script>
export default {
  props: {
    userInfo: Object
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/variables";
  @import "../../assets/styles/mixins";

  .user-wallet {
    text-align: center;
    padding: 10px;
    background: $daojia-pure;

    .flex-item:nth-child(2) {
      @include border-left();
    }




    .my-wallet {
      background: url(//static-o2o.360buyimg.com/daojia/new/images/user/my_wallet.png) center no-repeat;
      background-size: 23px auto;

    }

    .my-coupon{
      position: relative;
    &::after {
      position: absolute;
      content: "";
      width: 10px;
      height: 10px;
      left: -5px;
      top: 50%;
      background: $daojia-pure;
      border-right: 1px solid $daojia-border;
      border-bottom: 1px solid $daojia-border;
      transform: rotate(-45deg) scale(.5);
    }
  }

    .item {
      height: 35px;
      line-height: 35px;
    }
  }
</style>
