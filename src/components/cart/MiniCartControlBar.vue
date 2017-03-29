<template>
  <flex class="minicart-control-bar">
    <div>
      <checkbox type="circle">全选</checkbox>
      <span class="number-desc"> <slot></slot></span>
    </div>
      <span class="iconfont icon-shanchu"> 清空购物车</span>
  </flex>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "../../assets/styles/variables";

  .minicart-control-bar {
    background: $daojia-pure;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    color: $daojia-gray;

    &::before {
      position: absolute;
      content: "";
      top: -16px;
      left: 26px;
      border: 9px solid transparent;
      border-bottom-color: $daojia-pure;
    }
  }

  .number-desc {
    font-size: 12px;
  }
</style>
