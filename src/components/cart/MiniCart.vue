<template>
  <div :class="{'mask': !isClose}" @click="maskClickHandle">

    <!-- 迷你购物车详细信息，可展开可收起 -->
    <MiniCartDetail
      v-if="!isEmpty"
      ref="miniCartDetail"
      :isClose="isClose"
      :itemList="miniCartInfo.itemList"
      :numWeightDesc="miniCartInfo.numWeightDesc"
    ></MiniCartDetail>

    <!-- 迷你购物车底部 -->
    <MiniCartBottom
      @click.native="switchCartDetailHandle"
      :isEmpty="isEmpty"
      :position="position"
      :isClose="isClose">
    </MiniCartBottom>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
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
      },
      orgCode: String,
      storeId: String
    },
    data () {
      return {
        isClose: true,
        position: 0
      }
    },
    computed: {
      ...mapGetters(['miniCartInfo']), // 当前迷你购物车数据
      isEmpty () { // 当前购物车是否为空
        return !(this.miniCartInfo.itemList && this.miniCartInfo.itemList.length)
      }
    },
    created () {
      this.isClose = !this.isOpenCart
      this.querySingleCart({storeId: this.storeId, orgCode: this.orgCode})
      // this.cartAddItem({storeId: this.storeId, orgCode: this.orgCode})
    },
    mounted () {
      this.setPosition()
    },
    updated () {
      this.setPosition()
    },
    methods: {
      ...mapActions([
        // 'cartAddItem',
        'querySingleCart'
      ]),
      setPosition () { // 迷你购物车高度，图标位置
        if (this.$refs.miniCartDetail) {
          this.position = this.$refs.miniCartDetail.$el.clientHeight
        }
      },
      switchCartDetailHandle () { // 点击底部，展开或收起购物车详情
        if (this.isEmpty) return
        this.isClose = !this.isClose
      },
      maskClickHandle (e) { // 点击 蒙版 收起购物车详情
        if (e.target.className === 'mask') {
          this.isClose = !this.isClose
          e.stopImmediatePropagation()
        }
      }
    }
  }
</script>

<style lang="scss">
</style>
