<template>
  <flex class="minicart-control-bar">
    <span v-if="isInvalid">失效商品</span>
    <div v-else>
      <checkbox>全选</checkbox>
      <span class="number-desc"> <slot></slot></span>
    </div>

    <span class="iconfont icon-shanchu"> {{isInvalid ? '清空失效商品' : '清空购物车'}}</span>
  </flex>
</template>

<script>
export default {
  props: {
    isInvalid: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/variables";
  @import "../../assets/styles/mixins";

  .minicart-control-bar {
    background: $daojia-pure;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    color: $daojia-gray;
    @include border-bottom();
  }

  .number-desc {
    font-size: 12px;
  }
</style>
