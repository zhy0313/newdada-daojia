<template>
<!-- ball -->
<div class="index-ball-wrap" v-bind:class="'ballNum' + ball.data.length" v-bind:style="ball.borderImg && 'background:url('+ball.borderImg+');background-size:cover;background-repeat:no-repeat;background-position:center;'">
  <a href="javascript:;" class="index-navball" v-for="item in ball.data">
    <img class="index-navball-pic" v-bind:src="item.floorCellData.imgUrl">
    {{item.floorCellData.title}}
  </a>
</div>
<!-- end ball -->
</template>
<script>
export default {
  props: {
    ball: Array
  },
  data: function () {
    return {
    }
  }
}
</script>
<style lang="scss">
/*ball*/
.index-ball-wrap {
    background: #fff;
    min-height: 90px;
    overflow-y: hidden;
    text-align: center;
    font-size: 0;
}
.index-navball {
    display: inline-block;
    vertical-align: top;
    font-size: 12px;
    line-height: 20px;
    color: #666666;
    padding: 20px 0 13px;
    width: 33%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.index-navball-pic {
    width: 70%;
    margin: 0 auto;
    display: block;
    background-image: url(https://static-o2o.360buyimg.com/daojia/new/images/index_ball_default_2.0.png);
    background-size: 100%;
}
/* end ball */
</style>
