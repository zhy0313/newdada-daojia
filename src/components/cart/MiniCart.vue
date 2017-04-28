<template>
  <div :class="{'mask': !isClose}"
    @click="maskClickHandle"
    @touchmove="touchmoveHandle"
    @touchstart="touchstartHandle">

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
        position: 0,
        touchStartPos: 0
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
        console.log(this.position)
      },
      // 折叠收起购物车，触发动画效果
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
      touchstartHandle (e) { // touch 开始位置
        this.touchStartPos = e.changedTouches[0].clientY
      },
      touchmoveHandle (e) { // touch 手指滑动时 阻止 底部页面滚动
        let isTopReached = this.$refs.miniCartDetail.isTopReached
        let isBottomReached = this.$refs.miniCartDetail.isBottomReached
        let node = e.target
        while (node.className !== 'minicart-scroll-view' && node.className !== 'mask') {
          node = node.parentNode
        }
        if (node.className !== 'minicart-scroll-view') {
          console.log('非滚动区域，阻止滑动')
          e.preventDefault()
        } else if (isTopReached && e.changedTouches[0].clientY > this.touchStartPos) {
          console.log('到顶，阻止下拉滑动')
          e.preventDefault()
        } else if (isBottomReached && e.changedTouches[0].clientY < this.touchStartPos) {
          console.log('到底，阻止上拉滑动')
          e.preventDefault()
        }
      }
    }
  }
</script>
