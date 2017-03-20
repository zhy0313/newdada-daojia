<template>
  <div class="cart-store-container">
    <cell class="cell-store-name" href="#">{{item.name}}</cell>
    <cell class="cell-product-info"></cell>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style lang="scss">
  .cart-store-container {

    .cell-store-name {
      background: #fcfcfc;
      border: 1px solid #e7e9e4;
      border-bottom: none;
      border-radius: 3px 3px 0 0;
      box-shadow: 0px -1px 2px 1px rgba(244, 244, 244, .6) inset;
    }

    .cell-product-info {
      background: #fff;
      border: 1px solid #e7e9e4;
      border-top: none;
      border-radius: 0 0 3px 3px;
      box-shadow: 0px -1px 2px 1px rgba(244, 244, 244, .6);
    }

    .icon-FowordArrow {
      color: #cacaca;

    }


  }
</style>
