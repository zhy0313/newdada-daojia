<template>
  <div :class="{'minicart-detail-info': true, close: isClose}">

    <!-- 迷你购物车总控制栏 -->
    <MiniCarControlBar :isInvalid="justInvalid">{{numWeightDesc}}</MiniCarControlBar>

    <div class="minicart-scroll-view">
      <!-- 迷你购车车商品列表 -->
      <MinicartProductList
        v-for="item in itemList"
        :key="item.suitType"
        :productSuit="item"
        :justInvalid="justInvalid">
      </MinicartProductList>
    </div>
  </div>
</template>

<script>
  import MiniCarControlBar from './MiniCartControlBar'
  import MinicartProductList from './MinicartProductList'

  export default {
    components: {
      MiniCarControlBar,
      MinicartProductList
    },
    props: {
      itemList: Array,
      numWeightDesc: String,
      isClose: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      justInvalid () {
        return this.itemList.length === 1 && this.itemList[0].suitType === 'invalidate'
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/styles/variables";
  @import "../../assets/styles/mixins";

  .minicart-detail-info {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 50px;
    max-height: 80%;
    transform: translateY(0);
    transition: transform .5s ease-out 0s;
    &.close {
      transform: translateY(100%);
    }

    &::before {
      position: absolute;
      content: "";
      top: -16px;
      left: 26px;
      border: 9px solid transparent;
      border-bottom-color: $daojia-pure;
    }

    .minicart-scroll-view {
      max-height: 60vh;
      overflow-y: auto;
    }

  }
</style>
