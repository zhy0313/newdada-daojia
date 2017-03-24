<template>
  <div class="mini-cart-container">
    <div class="cart-detail-info open">
      <badge v-if="!isEmpty" :content="miniCartInfo.totalNum">
        <i class="mini-cart-icon has-content"></i>
      </badge>
    </div>
    <flex class="bottom-footer" justify="between">
      <div v-if="isEmpty" class="cart-empty"><i class="mini-cart-icon"></i>购物车是空的</div>
      <div v-else="!isEmpty" class="cart-info-close">
        <span class="cart-total-price">¥{{miniCartInfo.payMoneyPriceValue}}</span>
        <span v-if="miniCartInfo.discountName" class="discount-info">{{miniCartInfo.discountName}}</span>
      </div>
      <btn theme="primary" :disabled="miniCartInfo.buttonState == 1">{{miniCartInfo.buttonName}}</btn>
    </flex>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  data () {
    return {
      miniCartInfo: {
        authorize : false,
        buttonName : "去结算",
        buttonState : 0,
        discountName : "已减20元",
        itemList : [{}],
        numWeightDesc : "(已选1件)",
        openJPIndustry : "6",
        orgCode : "73655",
        payMoneyPriceValue : "118",
        storeId : "10048047",
        storeName : "花里花外鲜花—北京店",
        totalNum : 1,
        wholeStore : false
      }
    }
  },
  /*  eslint-enable */
  computed: {
    isEmpty () {
      return !(this.miniCartInfo.itemList && this.miniCartInfo.itemList.length)
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";

  .mini-cart-container {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    font-size: 15px;

    .bottom-footer {
      @include border-top();
      background-color: #fff;
      height: 50px;
      line-height: 50px;
      color: $daojia-light;
      white-space: nowrap;
    }

    .badge {
      position: absolute;
      top: -12px;
    }

    .badge-addon {
      top: 6px;
    }

    .mini-cart-icon {
      display: inline-block;
      width: 60px;
      height: 50px;
      vertical-align: middle;
      background: url(//static-o2o.360buyimg.com/daojia/new/images/minicart/cart.png) 10px 5px no-repeat;
      background-size: 50px 120px;
      transition: transform .5s ease-out 0s;

      &.has-content {
        background-position: 10px -70px;
        height: 58px;
      }
    }

    .cart-info-close {
      transform: translateX(60px);
      transition: transform .4s ease-out 0s;
      &.open {
        transform: translateX(0);
      }
    }

    .cart-total-price {
      display: inline-block;
      color: #ff3434;
      padding: 0 5px 0 10px;
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
      width: 115px;
    }
  }
</style>
