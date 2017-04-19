<template>
<!-- head -->
<div>
<div class="search-bar-wrap index-search-bar-wrap">
    <div class="location">
        <p>朝林广场A座</p>
        <i class="title-down"></i>
    </div>
    <span class="index-search-wrap" clstag="pageclick|keycount|home_search_20160623_1|1">
        <a class="index-search index-icon"></a>附近商家商品
    </span>
    <!-- <i class="index-paixu hide-black-search" clstag="pageclick|keycount|sortbutton|1"></i>
    <i class="index-black-search hide-black-search" clstag="pageclick|keycount|home_search_20160623_2|1"></i> -->
    <a class="index-message-icon" href="#message"><i class="hideDot"></i></a>
</div>
<!-- end head -->
<!-- banner -->

<!-- end banner -->
<!-- ball -->
<div class="index-ball">
  <a href="#">
    <img src="" alt="">
    超市
  </a>
  <a href="#">
    <img src="" alt="">
    水果
  </a>
  <a href="#">
    <img src="" alt="">
    生鲜
  </a>
</div>
<!-- end ball -->
<!-- 五宮格 -->
<div class="index-act-wrap">
  <ul>
    <li>
      <a href="#">
        <strong>
          <span>秒杀标题</span>
          <span>txt</span>
          <em>icon</em>
        </strong>
        <img src="" alt="">
      </a>
    </li>
    <li>
      <a href="#">
        <strong>
          <span>标题</span>
          <span>txt</span>
        </strong>
        <img src="" alt="">
      </a>
    </li>
    <li>
      <a href="#">
        <strong>
          <span>标题</span>
          <span>txt</span>
        </strong>
        <img src="" alt="">
      </a>
    </li>
    <li>
      <a href="#">
        <strong>
          <span>标题</span>
          <span>txt</span>
        </strong>
        <img src="" alt="">
      </a>
    </li>
    <li>
      <a href="#">
        <strong>
          <span>标题</span>
          <span>txt</span>
        </strong>
        <img src="" alt="">
      </a>
    </li>
  </ul>
</div>
<!-- end 五宮格 -->
<!-- 推荐 -->
<div class="index-recommend-wrap">
  <h3>附近的店铺</h3>
  <ul>
    <li>
      <dl href="#">
        <dt><img src="" alt=""></dt>
        <dd>
          <h5>店铺名称</h5>
          <p><i>达达快递标</i></p>
          <p><i></i> <em>|</em><b>月售1112单</b></p>
          <p><i>icon</i>4.0折购劵</p>
          <div class="">
            <span>
              <img src="" alt="">
              <i>热销</i>
              <b>¥1.5</b>
            </span>
            <span>
              <img src="" alt="">
              <i>热销</i>
              <b>¥1.5</b>
            </span>
            <span>
              <img src="" alt="">
              <i>热销</i>
              <b>¥1.5</b>
            </span>
            <span>
              <img src="" alt="">
              <i>热销</i>
              <b>¥1.5</b>
            </span>
          </div>
        </dd>
      </dl>
    </li>
  </ul>
</div>
<!-- end 推荐 -->
</div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../css/public.scss';
@import '../css/index.scss';
</style>
