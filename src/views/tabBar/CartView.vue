<template>
  <div class="cart-container">
    <CartLocation :location="location" :isCurrent="true"></CartLocation>
    <div v-if="allCarts.currentLocationStores.cartResults.length">
      <CartStore></CartStore>
    </div>
    <div v-else="allCarts.currentLocationStores.cartResults.length"
      class="cart-empty">
      <i class="iconfont icon-tanhao"></i>
      当前位置购物车空空如也哦~
    </div>

    <CartLocation v-if="allCarts.otherLocationStores.cartResults.length"
      location="其它位置" :isCurrent="false"></CartLocation>
    <CartStore v-for="item in allCarts.otherLocationStores.cartResults" :item="item">
    </CartStore>
    <!-- <Loader></Loader> -->
    <FooterNav :activeKey="2"></FooterNav>
  </div>

</template>

<script>
  import FooterNav from '@/components/FooterNav'
  import Loader from '@/components/Loader'
  import CartLocation from '@/components/CartLocation'
  import CartStore from '@/components/CartStore'

  export default {
    components: {
      FooterNav,
      Loader,
      CartLocation,
      CartStore
    },
    data () {
      return {
        location: '八达岭站',
        allCarts: {
          currentLocationStores: {
            cartResults: []
          },
          otherLocationStores: {
            cartResults: [
              {name: 1},
              {name: 2}
            ]
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/styles/variables";

  .cart-container {
    margin: 0 10px;

    .icon-tanhao {
      font-size: 12px;
      color: #cecece;
    }

    .cart-empty {
      background-color: $daojia-pure;
      border: 1px solid #e5e5e5;
      border-radius: 3px;
      height: 56px;
      line-height: 55px;
      font-size: 12px;
      color: $daojia-light;
      text-align: center;
      margin-bottom: 15px;
    }
  }
</style>
