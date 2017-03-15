<template>
  <navigation class="footer-nav" @change="changeHandle">
    <navigation-item label="首页">
      <icon name="home" size="lg" />
    </navigation-item>
    <navigation-item label="分类">
      <icon name="list" size="lg" />
    </navigation-item>
    <navigation-item label="福利">
      <icon name="discover" size="lg" />
    </navigation-item>
    <navigation-item label="购物车">
      <icon name="cart" size="lg" />
    </navigation-item>
    <navigation-item label="订单">
      <icon name="order" size="lg" />
    </navigation-item>
    <navigation-item label="我的">
      <icon name="my" size="lg" />
    </navigation-item>
  </navigation>
</template>

<script>
  export default {
    methods: {
      changeHandle (val) {
        this.$toast(`选择了第 ${val + 1} 个`)
      }
    }
  }
</script>

<style lang='scss' scoped>

  .footer-nav{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    .icon {
      width: 24px;
      height: 24px;
      background: url(//static-o2o.360buyimg.com/daojia/new/images/nav4.png) no-repeat;
      background-size: 24px 600px;
    }

    .icon-lg {
      font-size: 12px;
    }

    .icon-home {
      background-position: center -252px;
    }

    .active .icon-home {
      background-position: center -2px;
    }

    .icon-list {
      background-position: center -302px;
    }

    .active .icon-list {
      background-position: center -52px;
    }

    .icon-cart {
      background-position: center -354px;
    }

    .active .icon-cart {
      background-position: center -104px;
    }

    .icon-order {
      background-position: center -402px;
    }

    .active .icon-order {
      background-position: center -152px;
    }

    .icon-my {
      background-position: center -452px;
    }

    .active .icon-my {
      background-position: center -202px;
    }

    .icon-discover {
      background-position: center -502px;
    }

    .active .icon-discover {
      background-position: center -552px;
    }

    // 小红点
    .news{
      position: relative;
    }
    .news::after {
      content: " ";
      position: absolute;
      border: 4px solid #ff5757;
      width: 0;
      -webkit-border-radius: 100%;
      border-radius: 100%;
      top: 5px;
      right: 33%;
    }
  }
</style>
