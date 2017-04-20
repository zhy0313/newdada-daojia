<template>
  <div :class="{'mask': !isClose}" @click="maskClickHandle">
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
  import { mapGetters } from 'vuex'
  import MiniCartDetail from './MiniCartDetail'
  import MiniCartBottom from './MiniCartBottom'
  import * as minicartModule from '@/store/api/minicart'

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
      ...mapGetters(['miniCartInfo']),
      isEmpty () {
        return !(this.miniCartInfo.itemList && this.miniCartInfo.itemList.length)
      }
    },
    created () {
      this.isClose = !this.isOpenCart
      minicartModule.querySingleCart(this.storeId, this.orgCode)
    },
    mounted () {
      this.setPosition()
    },
    updated () {
      this.setPosition()
    },
    methods: {
      setPosition () { // 迷你购物车高度，图标位置
        if (this.$refs.miniCartDetail) {
          this.position = this.$refs.miniCartDetail.$el.clientHeight
        }
      },
      switchCartDetailHandle () {
        if (this.isEmpty) return
        this.isClose = !this.isClose
      },
      maskClickHandle (e) {
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
