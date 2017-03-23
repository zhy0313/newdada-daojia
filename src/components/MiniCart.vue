<template>
  <div class="mini-cart-container">
    <flex class="bottom-footer">金额<btn theme="primary">去结算</btn></flex>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import "../assets/styles/variables";
  @import "../assets/styles/mixins";

  .mini-cart-container {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;

    .bottom-footer {
      @include border-top();
      background-color: #fff;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      line-height: 50px;
    }

    .btn {
      width: 115px;
    }
  }
</style>
