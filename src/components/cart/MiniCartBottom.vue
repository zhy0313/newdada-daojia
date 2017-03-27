<template>
  <div class="mini-cart-bottom" >
    <!-- 默认情况，购物车为空处理 -->
    <div v-if="isEmpty" class="cart-empty">
      <MiniCartIcon :isEmpty="true"></MiniCartIcon>
      购物车是空的
    </div>

    <!-- 购物车非空处理 -->
    <div v-else
      :class="{'cart-info-close': true, open: !isClose}">
      <span class="cart-total-price">¥{{miniCartInfo.payMoneyPriceValue}}</span>
      <span v-if="miniCartInfo.discountName" class="discount-info">{{miniCartInfo.discountName}}</span>
    </div>
    <MiniCartIcon
      v-if="!isEmpty"
      :show="isClose"
      :totalNum="miniCartInfo.totalNum"
    ></MiniCartIcon>
    <btn theme="primary"
      :disabled="miniCartInfo.buttonState == 1"
      @click.stop="goSettlementHandle"
    >{{miniCartInfo.buttonName}}</btn>
  </div>
</template>

<script>
import MiniCartIcon from './MiniCartIcon'

export default {
  components: {
    MiniCartIcon
  },
  props: {
    miniCartInfo: {
      type: Object,
      default: () => ({
        buttonName: '去结算',
        buttonState: 1
      })
    },
    isEmpty: {
      type: Boolean,
      default: true
    },
    isClose: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goSettlementHandle () {
      console.log('去结算')
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/variables";
  @import "../../assets/styles/mixins";

  .mini-cart-bottom {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    font-size: 15px;
    background: #fff;
    height: 50px;
    line-height: 50px;
    @include border-top();

    .cart-empty {
      color: $daojia-light;
    }

    .mini-cart-icon-container {
      position: fixed;
      bottom: 2px;
      opacity: 0;
      transition: opacify .4s ease-out 0s;
      &.show-icon {
        opacity: 1;
      }
    }

    .cart-info-close {
      // background-color: #fff;
      color: $daojia-light;
      white-space: nowrap;
      // z-index: 999;
      transform: translateX(70px);
      // padding-left: 70px;
      transition: transform .4s ease-out 0s;
      &.open {
        transform: translateX(10px);
        // padding-left: 10px;
      }
    }

    .cart-total-price {
      display: inline-block;
      color: #ff3434;
      padding: 0 5px 0 0;
    }

    .discount-info {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      padding:0 0 0 8px;
      font-size: 12px;
      @include border-left();
    }

    .btn {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 50px;
      width: 115px;
      z-index: 999;
    }

  }
</style>
