<template>
  <div :class="{'mask': !isClose}">
    <MiniCartDetail
      v-if="!isEmpty"
      ref="miniCartDetail"
      :isClose="isClose"
      :itemList="miniCartInfo.itemList"
      :numWeightDesc="miniCartInfo.numWeightDesc"
    ></MiniCartDetail>

    <MiniCartBottom
      @click.native="switchCartDetailHandle"
      :miniCartInfo="miniCartInfo"
      :isEmpty="isEmpty"
      :position="position"
      :isClose="isClose">
    </MiniCartBottom>
  </div>
</template>

<script>
  import MiniCartDetail from './MiniCartDetail'
  import MiniCartBottom from './MiniCartBottom'

  export default {
    components: {
      MiniCartDetail,
      MiniCartBottom
    },
    props: {
      isOpenCart: {
        type: Boolean,
        default: false
      }
    },
    /* eslint-disable */
    data () {
      return {
        isClose: true,
        position: 0,
        miniCartInfo: {
          authorize : false,
          buttonName : "去结算",
          buttonState : 0,
          discountName : "已减20元",
          itemList: [
            {
              buttonFlag : false,
              giftCanChooseNum : 0,
              suitDescrip : [],
              skuList: [
                {
                  basePrice : "11.8",
                  cartNum : 1,
                  checkType : 1,
                  imageUrl : "https://img10.360buyimg.com/n7//jfs/t3082/306/9404930591/16333/946b0cd/58d47f0dNb317f808.jpg",
                  price : "11.8",
                  skuId : "2006947714",
                  skuName : "爱鲜蜂·进囗厄瓜多尔甜香蕉550-650g/袋",
                  skuState : 1,
                  tags : [{
                    colorCode: "fecc32",
                    iconText: "直降",
                    type: "1"
                  }]
                },
                {
                  basePrice : "10",
                  cartNum : 15,
                  checkType : 0,
                  imageUrl : "https://img10.360buyimg.com/n7//jfs/t2686/129/1178913568/131076/548b8113/5736c5d7Nd761b5ad.jpg",
                  price : "6",
                  promotePrice : {
                    basicNum : 11,
                    basicPrice : "10",
                    basicTag: {iconText: "原价", type: "7", colorCode: "cacaca"},
                    promoteNum : 4,
                    promotePrice : "6",
                    promoteTag : {iconText: "秒杀", type: "4", colorCode: "ff5c5d"},
                    promotionTip : "秒杀商品仅剩4件",
                    skuId : "2002355070",
                    skuName : "益補健 维生素C含片（桔子味）20片/个",
                    skuState : 1
                  },
                  promotionTip : "秒杀商品仅剩4件",
                  skuId : "2002355070",
                  skuName : "益補健 维生素C含片（桔子味）20片/个",
                  skuState : 1,
                  tags : [{iconText: "秒杀", type: "4", colorCode: "ff5c5d"}],
                  weight : "4kg"
                },
                {
                  basePrice : "14.9",
                  cartNum : 1,
                  checkType : 0,
                  imageUrl : "https://img10.360buyimg.com/n7//jfs/t3061/255/5849730628/26027/9de53c5c/58804da5N05fbe78b.jpg",
                  price : "14.9",
                  skuId : "2006227040",
                  skuName : "爱鲜蜂·泰国龙眼400g/盒",
                  skuState : 1,
                  skuStateName : "仅剩1件",
                  tags : []
                }
              ],
              suitName : "单品",
              suitType : "single"
            },
            {
              buttonFlag : false,
              giftCanChooseNum : 0,
              skuList: [
                {
                  basePrice : "25.8",
                  cartNum : 1,
                  checkType : 0,
                  imageUrl : "https://img10.360buyimg.com/n7//jfs/t3199/62/5824551052/20328/7c3fb4e5/588421abN1874b740.jpg",
                  price : "25.8",
                  skuId : "2006281165",
                  skuName : "爱鲜蜂·特小凤西瓜1.5-2.5kg/粒",
                  skuState : 0,
                  skuStateName : "无货",
                  tags : []
                },
                {
                  basePrice : "19.89",
                  cartNum : 1,
                  checkType : 0,
                  imageUrl : "https://img10.360buyimg.com/n7//jfs/t3268/4/5715044768/30033/6478b4db/588421abNcc5145a9.jpg",
                  price : "19.89",
                  skuId : "2006281164",
                  skuName : "爱鲜蜂·富平吊柿饼230-280g/盒",
                  skuState : 0,
                  skuStateName : "无货",
                  tags : []
                }
              ],
              suitDescrip : [],
              suitName : "失效",
              suitType : "invalidate",
            }
          ],
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
    mounted () {
      this.isClose = !this.isOpenCart
      this.setPosition()
    },
    updated () {
      this.setPosition()
    },
    methods: {
      switchCartDetailHandle () {
        if (this.isEmpty) return
        console.log('切换购物车详情', !this.isClose ? '收起' : '展开')
        this.isClose = !this.isClose
      },
      setPosition () {
        if (this.$refs.miniCartDetail) {
          console.log(this.$refs.miniCartDetail.$el.clientHeight, 'position updated')
          this.position = this.$refs.miniCartDetail.$el.clientHeight
        }
      }
    }
  }
</script>

<style lang="scss">
</style>
