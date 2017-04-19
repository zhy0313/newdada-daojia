<template>
  <div class="default-page-tip">
    <img src="https://static-o2o.360buyimg.com/daojia/new/images/icon/search_fail.png"></img>
    <div>{{msg}}</div>
    <btn v-if="btnName">{{btnName}}</btn>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
    btnName: String
  }
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
