<template>
  <div :class="{'mask': !isClose}"
    @click="maskClickHandle"
    @touchmove="touchmoveHandle">

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
      }
    },
    data () {
      return {
        isClose: true,
        position: 0
      }
    },
    computed: {
      ...mapGetters([
        'miniCartInfo',
        'currentStore'
      ]), // 当前迷你购物车数据
      isEmpty () { // 当前购物车是否为空
        return !(this.miniCartInfo.itemList && this.miniCartInfo.itemList.length)
      }
    },
    created () {
      this.isClose = !this.isOpenCart
      this.querySingleCart(this.currentStore)

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
      },
      touchmoveHandle (e) {
        // console.log('touchmoveHandle', e.target, e.target.parentNode)
        // e.target.parentNode
        let node = e.target
        while (node.className !== 'minicart-scroll-view' && node.className !== 'mask') {
          node = node.parentNode
          console.log(node.className, node.className)
        }
        if (node.className !== 'minicart-scroll-view') {
          e.preventDefault()
        }
      }
    }
  }
</script>

<style lang="scss">
</style>
