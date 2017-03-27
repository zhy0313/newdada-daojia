<template>
  <div :class="{'mask': !isClose}">
    <MiniCartDetail
      v-if="!isEmpty"
      ref="miniCartDetail"
      :isClose="isClose"
      :itemList="miniCartInfo.itemList"
    >{{miniCartInfo.numWeightDesc}}</MiniCartDetail>

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
