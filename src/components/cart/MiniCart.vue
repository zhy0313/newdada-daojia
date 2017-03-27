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


    <MiniCartBottom
      @click.native="switchCartDetailHandle"
      :miniCartInfo="miniCartInfo"
      :isEmpty="isEmpty"
      :isClose="isClose">
    </MiniCartBottom>
  </div>
</template>

<script>
  import MiniCartIcon from './MiniCartIcon'
  import MiniCartBottom from './MiniCartBottom'

  export default {
    components: {
      MiniCartIcon,
      MiniCartBottom
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
      switchCartDetailHandle () {
        if (this.isEmpty) return
        console.log('切换购物车详情', !this.isClose ? '收起' : '展开')
        this.isClose = !this.isClose
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/styles/variables";
  @import "../../assets/styles/mixins";

  .cart-detail-info {
    position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
    transform: translateY(0);
    animation: minicart-open .5s ease-out forwards;
    transition: transform .5s ease-out 0s;
    &.close {
      animation: minicart-close .5s ease-out forwards;
      // top: -12px;
      transform: translateY(100%);
      // 购物车图标
      // .badge {
      //   position: fixed;
      //   bottom: -12px;
      // }

      // .cart-product-list {
        // visibility: hidden;
        // opacity: 0;
        // animation: minicart-close .5s ease-out forwards;
      // }

    }

    // .badge {
    //   position: relative;
    // }




    .cart-product-list {
      // background: #fff;
      // animation: minicart-open .5s ease-out forwards;
    }

  }





  //
  @keyframes minicart-open {
    0% {
      opacity: 0;
    }
    50% {
      opacity: .5;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes minicart-close {
    0% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }

    100% {
      opacity: 0;
    }
  }
</style>
