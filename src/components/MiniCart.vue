<template>
  <div>
    <div v-if="!isEmpty" :class="{'cart-detail-info': true, close: isClose}">
      <MiniCartIcon
      :totalNum="miniCartInfo.totalNum"
      @click.native="switchCartDetailHandle"
      ></MiniCartIcon>
      <div class="cart-product-list">
        <div>内容内容</div>
        <div>内容内容</div>
        <div>内容内容</div>
        <div>内容内容</div>
        <div>内容内容</div>
        <div>内容内容</div>
        <div>内容内容</div>
        <div>内容内容</div>
        <div>内容内容</div>
        <div>内容内容</div>
      </div>
    </div>
    <div class="mini-cart-bottom" >

        <div v-if="isEmpty" class="cart-empty"><MiniCartIcon :isEmpty="true"></MiniCartIcon>购物车是空的</div>
        <div v-else
          :class="{'cart-info-close': true, open: !isClose}"
          @click="switchCartDetailHandle">
          <span class="cart-total-price">¥{{miniCartInfo.payMoneyPriceValue}}</span>
          <span v-if="miniCartInfo.discountName" class="discount-info">{{miniCartInfo.discountName}}</span>
        </div>
        <MiniCartIcon
        v-if="!isEmpty"
        :show="isClose"
        :totalNum="miniCartInfo.totalNum"
        @click.native="switchCartDetailHandle"
        ></MiniCartIcon>
        <btn theme="primary"
          :disabled="miniCartInfo.buttonState == 1"
          @click.stop="goSettlementHandle"
        >{{miniCartInfo.buttonName}}</btn>
    </div>
  </div>
</template>

<script>
  import MiniCartIcon from './MiniCartIcon'

  export default {
    components: {
      MiniCartIcon
    },
    /* eslint-disable */
    data () {
      return {
        isClose: true,
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
    },
    methods: {
      goSettlementHandle () {
        console.log('去结算')
      },
      switchCartDetailHandle () {
        console.log('切换购物车详情', !this.isClose ? '收起' : '展开')
        this.isClose = !this.isClose
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";

  .cart-detail-info {
    position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
    transform: translateY(0);
    // animation: minicart-open .5s ease-out forwards;
    transition: transform .5s ease-out 0s;
    &.close {
      // animation: minicart-close .5s ease-out forwards;
      // top: -12px;
      transform: translateY(100%);
      // 购物车图标
      // .badge {
      //   position: fixed;
      //   bottom: -12px;
      // }

      .cart-product-list {
        // visibility: hidden;
        // opacity: 0;
        // animation: minicart-close .5s ease-out forwards;
      }

    }

    // .badge {
    //   position: relative;
    // }




    .cart-product-list {
      background: #fff;
      animation: minicart-open .5s ease-out forwards;
    }

  }




  .mini-cart-bottom {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    font-size: 15px;
    background: #fff;
    @include border-top();

    .mini-cart-icon-container {
      position: fixed;
      bottom: 2px;
      // opacity: 0;
      // transition: opacify .4s ease-out 0s;
      // &.show {
      //   opacity: 1;
      // }
    }


    // 迷你购物车低栏
    // .bottom-footer {
    //
    // }

    .cart-info-close {
      background-color: #fff;
      height: 50px;
      line-height: 50px;
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

  @keyframes minicart-close {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes minicart-open {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
</style>
