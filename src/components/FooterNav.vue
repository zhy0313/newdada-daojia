<template>
  <navigation class="footer-nav" :activeKey="activeKey">
    <navigation-item label="首页" path="/">
      <icon name="home" size="lg" />
    </navigation-item>
    <navigation-item v-if="hasDiscover" label="福利" path="discover">
      <icon name="discover" size="lg" />
    </navigation-item>
    <navigation-item v-else label="分类" path="list">
      <icon name="list" size="lg" />
    </navigation-item>
    <navigation-item label="购物车" path="cart">
      <icon name="cart" size="lg" />
    </navigation-item>
    <navigation-item label="订单" path="order">
      <icon name="order" size="lg" />
    </navigation-item>
    <navigation-item label="我的" path="my">
      <icon name="my" size="lg" />
    </navigation-item>
  </navigation>
</template>

<script>
  export default {
    props: {
      activeKey: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        hasDiscover: true
      }
    },
    methods: {

    }
  }
</script>

<style lang='scss'>
  // @import "../assets/styles/variables";

  .footer-nav{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 12px;
    // z-index: $z-index-top;

    .icon {
      width: 24px;
      height: 24px;
      background: url(//static-o2o.360buyimg.com/daojia/new/images/nav4.png) no-repeat;
      background-size: 24px 600px;
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
