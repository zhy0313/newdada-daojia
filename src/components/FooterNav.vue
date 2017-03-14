<template>
  <div>
    <group-title>base</group-title>
    <navigation>
      <navigation-item label="首页" />
      <navigation-item label="分类" />
      <navigation-item label="购物车" />
      <navigation-item label="订单" />
      <navigation-item label="我的" />
    </navigation>
    <group-title>icon</group-title>
    <navigation @change="changeHandle">
      <navigation-item label="首页">
        <icon name="home" size="lg" />
      </navigation-item>
      <navigation-item label="分类">
        <icon name="list" size="lg" />
      </navigation-item>
      <navigation-item label="购物车">
        <icon name="shopping-cart" size="lg" />
      </navigation-item>
      <navigation-item label="订单">
        <icon name="file-text-o" size="lg" />
      </navigation-item>
      <navigation-item label="我的">
        <icon name="smile-o" size="lg" />
      </navigation-item>
    </navigation>
  </div>
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

<style scoped>
  .fa{
    width: 24px;
    height: 24px;
    background: url(//static-o2o.360buyimg.com/daojia/new/images/nav4.png) no-repeat;
    background-size: 24px 600px;
  }

  .fa-lg {
    font-size: 12px;
  }

  .navigation-item.active {
    color: #39ac69;
  }

  .fa-home{
    background-position: center -2px;
  }

  .fa-list{
    background-position: center -300px;
  }

</style>
