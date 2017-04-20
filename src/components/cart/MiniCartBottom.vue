<template>
  <div class="mini-cart-bottom" >
    <!-- 默认情况，购物车为空处理 -->
    <div v-if="isEmpty" class="cart-empty">
      <MiniCartIcon :isEmpty="true"></MiniCartIcon>
      购物车是空的
    </div>

    <!-- 购物车非空处理 -->
    <div v-else
      :class="{'money-info-close': true, open: !isClose}">
      <span class="cart-total-price">¥{{miniCartInfo.payMoneyPriceValue}}</span>
      <span v-if="miniCartInfo.discountName" class="discount-info">{{miniCartInfo.discountName}}</span>
    </div>
    <MiniCartIcon
      ref="miniCartIcon"
      v-if="!isEmpty"
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
import { mapGetters } from 'vuex'

export default {
  components: {
    MiniCartIcon
  },
  props: {
    isEmpty: {
      type: Boolean,
      default: true
    },
    isClose: {
      type: Boolean,
      default: true
    },
    position: {
      type: Number,
      default: 0
    }
  },
  watch: {
    isClose (val) {
      this.setIconPosition()
    },
    position (val) {
      this.setIconPosition()
    }
  },
  computed: {
    ...mapGetters(['miniCartInfo'])
  },
  methods: {
    goSettlementHandle () {
      console.log('去结算')
    },
    setIconPosition () {
      let miniCartIcon = this.$refs.miniCartIcon.$el
      if (this.isClose) {
        miniCartIcon.style.wekitTransform = 'translateY(0)'
        miniCartIcon.style.transform = 'translateY(0)'
      } else {
        miniCartIcon.style.wekitTransform = `translateY(-${this.position}px)`
        miniCartIcon.style.transform = `translateY(-${this.position}px)`
      }
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
      bottom: 0;
      left: 0;
      transition: transform .5s ease-out 0s;
    }

    .money-info-close {
      color: $daojia-light;
      white-space: nowrap;
      transform: translateX(70px);
      transition: transform .5s ease-out 0s;
      &.open {
        transform: translateX(10px);
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
    }
  }


  // @keyframes minicart-icon-show {
  //   0% {
  //     opacity: 0;
  //     transform: translateY(-100%);
  //   }
  //
  //   100% {
  //     opacity: 1;
  //     transform: translateY(0);
  //   }
  // }
  //
  // @keyframes minicart-icon-hide {
  //   0% {
  //     opacity: 1;
  //     transform: translateY(0);
  //   }
  //
  //   100% {
  //     opacity: 0;
  //     transform: translateY(-100%);
  //   }
  // }
</style>
