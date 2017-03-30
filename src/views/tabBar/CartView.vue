<template>
  <div class="cart-container">
    <!-- 当前位置购车车信息 -->
    <CartLocation :location="location" :isCurrent="true"></CartLocation>

    <!-- 当前位置门店列表 -->
    <div v-if="allCarts.currentLocationStores.cartResults.length">
      <CartStore v-for="item in allCarts.currentLocationStores.cartResults"
        :storeItem="item" :key="item.storeId">
      </CartStore>
    </div>

    <!-- 当前位置购物车为空 -->
    <div v-else="allCarts.currentLocationStores.cartResults.length"
      class="cart-empty">
      <i class="iconfont icon-tanhao"></i>
      当前位置购物车空空如也哦~
    </div>

    <!-- 其它位置的购物车信息 -->
    <CartLocation v-if="allCarts.otherLocationStores.cartResults.length"
      location="其它位置" :isCurrent="false"></CartLocation>

    <!-- 其它位置门店列表 -->
    <CartStore v-for="item in allCarts.otherLocationStores.cartResults"
      :storeItem="item" :key="item.storeId">
    </CartStore>
    <!-- <Loader></Loader> -->
    <FooterNav :activeKey="2"></FooterNav>
  </div>

</template>

<script>
  import FooterNav from '@/components/FooterNav'
  import Loader from '@/components/Loader'
  import CartLocation from '@/components/cart/CartLocation'
  import CartStore from '@/components/cart/CartStore'

  export default {
    components: {
      FooterNav,
      Loader,
      CartLocation,
      CartStore
    },
    created () {
      this.$getAPI({
        // functionId: 'login/testLogin'
        functionId: 'cartV3_3_0/queryallcarts',
        body: {
          lng: 116.50628,
          lat: 39.79311,
          positionType: 2
        }
      }).then((response) => {
        if (response.body.code === '0') {
          console.log('接口成功')
          console.log('response', response.result)
          this.allCarts = response.result
        } else {
          console.log('接口失败', response.body)
        }
        this.$toast({message: response.body.msg, position: 'center'})
      }, (err) => {
        console.log('err', err)
      })
    },
    data () {
      return {
        location: '朝林广场A座',
        allCarts: {
          currentLocationStores: {
            cartResults: []
          },
          otherLocationStores: {
            cartResults: []
          }
        }
      }
    }
    /* eslint-disable */
    /*  eslint-enable */
  }
</script>

<style lang="scss">
  @import "../../assets/styles/variables";

  .cart-container {
    margin: 0 10px;
    padding-bottom: 55px;

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
