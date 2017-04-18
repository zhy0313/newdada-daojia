<template>
  <div class="default-page-tip">
    <img src="https://static-o2o.360buyimg.com/daojia/new/images/icon/search_fail.png"></img>
    <div>没有未评价的订单哦，赶紧去购物吧</div>
    <btn>去逛逛</btn>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .default-page-tip {
    height: 90vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 3;
    color: #888;
    font-size: 15px;

    img {
      width: 84px;
      height: 84px;
    }

    .btn {
      height: 35px;
      width: 80px;
      border-radius: 3px;
    }
  }
</style>
