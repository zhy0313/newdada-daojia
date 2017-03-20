<!-- 全局购物车的位置信息组件 -->
<template lang="html">
  <div style="text-align: center;">
    <p :class="{'cart-location': true, current: isCurrent}">
      {{location}}
      <span v-if="isCurrent" class="current-tip">(当前位置)</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    location: String,
    isCurrent: Boolean
  }
}
</script>

<style lang="scss">
  @import "../assets/styles/variables";

  .cart-location {
    display: inline-block;
    margin: 15px 0 10px;
    color: $daojia-pure;
    line-height: 16px;
    background: url(https://static-o2o.360buyimg.com/daojia/new/images/minicart/loc2.png) $daojia-light 13px center no-repeat;
    background-size: 10px 12px;
    border-radius: 22px;
    padding: 3px 14px 3px 31px;
    border: 6px solid $daojia-lighter;

    &.current {
      background-color: $daojia-green;
      border-color: $daojia-green-light;
    }

    .current-tip {
      font-size: 12px;
    }
  }
</style>
