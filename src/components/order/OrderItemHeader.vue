<template>
  <router-link to="/" class="order-item-header">
    <span>
      <slot></slot>
      <i class="iconfont icon-FowordArrow"></i>
    </span>
    <span
      v-if="mainOrderStateMap"
      :style="{color: mainOrderStateMap.orderColor}">
      {{mainOrderStateMap.orderStateName}}
    </span>
  </router-link>
</template>

<script>
  export default {
    props: {
      mainOrderStateMap: Object
    }
  }
</script>

<style lang="scss">
  @import "../../assets/styles/variables";
  @import "../../assets/styles/mixins";

  .order-item-header {
    height: 40px;
    font-size: 15px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    @include border-bottom();

    .icon-FowordArrow:before {
      color: #c4c4c4;
    }
  }
</style>
