<template>
  <div class="cart-container">
    <CartLocation :location="location" :isCurrent="true"></CartLocation>
    <div v-if="allCarts.currentLocationStores.cartResults.length">
      <CartStore v-for="item in allCarts.currentLocationStores.cartResults"
        :storeItem="item" :key="item.storeId">
      </CartStore>
    </div>
    <div v-else="allCarts.currentLocationStores.cartResults.length"
      class="cart-empty">
      <i class="iconfont icon-tanhao"></i>
      当前位置购物车空空如也哦~
    </div>

    <CartLocation v-if="allCarts.otherLocationStores.cartResults.length"
      location="其它位置" :isCurrent="false"></CartLocation>
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
  import CartLocation from '@/components/CartLocation'
  import CartStore from '@/components/CartStore'

  export default {
    components: {
      FooterNav,
      Loader,
      CartLocation,
      CartStore
    },
    created () {

    },
    /* eslint-disable */

    data () {
      return {
        location: '八达岭站',
        allCarts: {
          currentLocationStores: {
            cartResults: []
          },
          otherLocationStores: {
            cartResults: [
              {
                itemList: [
                  {
                    cartNum : 2,
                    imageUrl : "https://img10.360buyimg.com/n7//jfs/t3133/233/6229194461/467097/bb055c8e/58a3d7eaN926f5737.jpg",
                    price : "198",
                    skuId : "2006444024",
                    skuState : 1,
                    skuStateName: "已下架",
                    updateTime : 1488881058245
                  },
                  {
                    cartNum : 1,
                    imageUrl : "https://img10.360buyimg.com/n7//jfs/t3133/233/6229194461/467097/bb055c8e/58a3d7eaN926f5737.jpg",
                    price : "198",
                    skuId : "2006444024",
                    skuState : 1,
                    updateTime : 1488881058245
                  },
                  {
                    cartNum : 1,
                    imageUrl : "https://img10.360buyimg.com/n7//jfs/t3133/233/6229194461/467097/bb055c8e/58a3d7eaN926f5737.jpg",
                    price : "198",
                    skuId : "2006444024",
                    skuState : 1,
                    updateTime : 1488881058245
                  },
                  {
                    cartNum : 1,
                    imageUrl : "https://img10.360buyimg.com/n7//jfs/t3133/233/6229194461/467097/bb055c8e/58a3d7eaN926f5737.jpg",
                    price : "198",
                    skuId : "2006444024",
                    skuState : 1,
                    updateTime : 1488881058245
                  },
                  {
                    cartNum : 1,
                    imageUrl : "https://img10.360buyimg.com/n7//jfs/t3133/233/6229194461/467097/bb055c8e/58a3d7eaN926f5737.jpg",
                    price : "198",
                    skuId : "2006444024",
                    skuState : 1,
                    updateTime : 1488881058245
                  },
                ],
                openJPIndustry: "3",
                orgCode : "296893",
                payMoneyName : "合计:",
                payMoneyPriceValue : "293.3",
                storeId : "11655711",
                storeImgUrl : "https://img30.360buyimg.com/vendersettle/jfs/t3193/17/3028299864/123769/e5241ec/57ea30ceNaf5b7719.jpg",
                storeName : "爱鲜蜂(南河沿大街店)",
                totalNum : 9
              },
              {
                itemList: [
                  {
                    cartNum : 3,
                    imageUrl : "https://img10.360buyimg.com/n7//jfs/t3133/233/6229194461/467097/bb055c8e/58a3d7eaN926f5737.jpg",
                    price : "198",
                    skuId : "2006444024",
                    skuState : 1,
                    updateTime : 1488881058245
                  },
                  {
                    cartNum : 1,
                    imageUrl : "https://img10.360buyimg.com/n7//jfs/t3133/233/6229194461/467097/bb055c8e/58a3d7eaN926f5737.jpg",
                    price : "198",
                    skuId : "2006444024",
                    skuState : 1,
                    updateTime : 1488881058245
                  },
                  {
                    cartNum : 1,
                    imageUrl : "https://img10.360buyimg.com/n7//jfs/t3133/233/6229194461/467097/bb055c8e/58a3d7eaN926f5737.jpg",
                    price : "198",
                    skuId : "2006444024",
                    skuState : 1,
                    updateTime : 1488881058245
                  },
                  {
                    cartNum : 1,
                    imageUrl : "https://img10.360buyimg.com/n7//jfs/t3133/233/6229194461/467097/bb055c8e/58a3d7eaN926f5737.jpg",
                    price : "198",
                    skuId : "2006444024",
                    skuState : 1,
                    updateTime : 1488881058245
                  },
                  {
                    cartNum : 99,
                    imageUrl : "https://img10.360buyimg.com/n7//jfs/t3133/233/6229194461/467097/bb055c8e/58a3d7eaN926f5737.jpg",
                    price : "198",
                    skuId : "2006444024",
                    skuState : 1,
                    updateTime : 1488881058245
                  },
                  {
                    cartNum : 1,
                    imageUrl : "https://img10.360buyimg.com/n7//jfs/t3133/233/6229194461/467097/bb055c8e/58a3d7eaN926f5737.jpg",
                    price : "198",
                    skuId : "2006444024",
                    skuState : 1,
                    updateTime : 1488881058245
                  }
                ],
                openJPIndustry: "3",
                orgCode : "296893",
                payMoneyName : "合计:",
                payMoneyPriceValue : "293.3",
                storeId : "11655711",
                storeImgUrl : "https://img30.360buyimg.com/vendersettle/jfs/t3193/17/3028299864/123769/e5241ec/57ea30ceNaf5b7719.jpg",
                storeName : "爱鲜蜂(南河沿大街店)",
                totalNum : 9
              },
              {
                itemList: [
                  {
                    cartNum : 99,
                    imageUrl : "https://img10.360buyimg.com/n7//jfs/t3133/233/6229194461/467097/bb055c8e/58a3d7eaN926f5737.jpg",
                    price : "198",
                    skuId : "2006444024",
                    skuState : 1,
                    updateTime : 1488881058245
                  },
                ],
                openJPIndustry : "2",
                orgCode : "74077",
                payMoneyName : "合计:",
                payMoneyPriceValue : "781",
                storeId : "10051565",
                storeImgUrl : "https://img30.360buyimg.com/vendersettle/jfs/t1930/170/2253606144/122463/33ae8e75/56c5a64bN81d7b388.png",
                storeName : "1919北京崇文门新世界店",
                totalNum : 5
              }
            ]
          }
        }
      }
    }
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
