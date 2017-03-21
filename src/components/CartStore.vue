<template>
  <div class="cart-store-container">
    <cell class="cell-store-name" href="#">{{item.storeName}}</cell>
    <flex  class="cell-product-info">
    <cell>
      <badge content="5" theme="primary">
        <img src="https://img10.360buyimg.com/n7//jfs/t2539/356/550301995/344973/794e460d/56557aa2N479cb808.jpg">
        <span>¥88.88</span>
        <i class="iconfont icon-6"></i>
      </badge>
      <badge content="5" theme="primary">
        <img src="https://img10.360buyimg.com/n7//jfs/t2539/356/550301995/344973/794e460d/56557aa2N479cb808.jpg">
        <span>¥88.88</span>
        <i class="iconfont icon-6"></i>
      </badge>
      <badge content="5" theme="primary">
        <img src="https://img10.360buyimg.com/n7//jfs/t2539/356/550301995/344973/794e460d/56557aa2N479cb808.jpg">
        <span>¥88.88</span>
        <i class="iconfont icon-6"></i>
      </badge>
      <badge content="5" theme="primary">
        <img src="https://img10.360buyimg.com/n7//jfs/t2539/356/550301995/344973/794e460d/56557aa2N479cb808.jpg">
        <span>¥88.88</span>
        <i class="iconfont icon-6"></i>
      </badge>
      <badge content="5" theme="primary">
        <img src="https://img10.360buyimg.com/n7//jfs/t2539/356/550301995/344973/794e460d/56557aa2N479cb808.jpg">
        <span>¥88.88</span>
        <i class="iconfont icon-6"></i>
      </badge>
      <badge content="5" theme="primary">
        <img src="https://img10.360buyimg.com/n7//jfs/t2539/356/550301995/344973/794e460d/56557aa2N479cb808.jpg">
        <span>¥88.88</span>
        <i class="iconfont icon-6"></i>
      </badge>
    </cell>
    <div class="more-product">
      <span>共21件</span>
    </div>

    </flex>
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
      box-shadow: 0px 1px 3px 0 rgba(231, 233, 228, 1);
      margin-bottom: 15px;

      .cell {
        padding: 0 10px;
      }

      .cell-body {
        max-height: 100px;
        padding: 15px 0;
      }
      .badge {
        height: 130px;
        width: 53px;
        line-height: 1;
        text-align: center;
        background-color: #fff;
      }

      .icon-6 {
        font-size: 30px;
        position: absolute;
        top: 25px;
        right: -30px;
      }

      .more-product {
        width: 50px;
      }
    }


    .icon-FowordArrow {
      color: #cacaca;
    }

    img {
      width: 53px;
      height: 53px;
      border-radius: 5px;
    }


  }
</style>
