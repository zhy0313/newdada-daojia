<template>
  <i v-if="isEmpty" class="mini-cart-icon"></i>
  <badge v-else
    :content="totalNum">
    <i class="mini-cart-icon has-content"></i>
  </badge>
</template>

<script>
export default {
  props: {
    isEmpty: Boolean,
    totalNum: Number
  }
}
</script>

<style lang="scss">
  .mini-cart-icon {
    display: inline-block;
    width: 60px;
    height: 50px;
    vertical-align: middle;
    background: url(//static-o2o.360buyimg.com/daojia/new/images/minicart/cart.png) 10px 5px no-repeat;
    background-size: 50px 120px;
    transition: transform .5s ease-out 0s;

    &.has-content {
      background-position: 10px -70px;
      height: 58px;
    }
  }
</style>
