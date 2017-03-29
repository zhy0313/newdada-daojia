<template>
  <div :class="{'minicart-detail-info': true, close: isClose}">
    <MiniCarControlBar>{{numWeightDesc}}</MiniCarControlBar>
    <div class="cart-product-list">
      <div><checkbox type="circle" disabled> </checkbox>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
      <div>内容内容</div>
    </div>
  </div>
</template>

<script>
  import MiniCarControlBar from './MiniCartControlBar'

  export default {
    components: {
      MiniCarControlBar
    },
    props: {
      itemList: Array,
      numWeightDesc: String,
      isClose: {
        type: Boolean,
        default: true
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
    transform: translateY(0);
    transition: transform .5s ease-out 0s;
    &.close {
      transform: translateY(100%);
    }





    .cart-product-list {
      background: #fbfbfb;
    }
  }
</style>
