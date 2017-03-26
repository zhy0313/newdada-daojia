<template>
  <i v-if="isEmpty" class="mini-cart-icon"></i>
  <badge v-else
    :content="totalNum"
    :class="{'mini-cart-icon-container': true, show: show}"
  >
    <i class="mini-cart-icon has-content"></i>
  </badge>
</template>

<script>
export default {
  props: {
    isEmpty:
    {
      type: Boolean,
      default: false
    },
    show:
    {
      type: Boolean,
      default: true
    },
    totalNum: Number

  }
}
</script>

<style lang="scss">
.mini-cart-icon-container {
  // position: fixed;
  // bottom: 2px;
  display: inline-block;

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

  .badge-addon {
    top: 6px;
  }

  // .badge {
    opacity: 0;
    // display: none;
    transition: opacity .4s ease-out 0s;
    &.show {
      display: inline-block;
      opacity: 1;
    }
  // }
}
</style>
