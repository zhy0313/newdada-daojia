<template>
<div class="index-entrance-wrap">
  <div class="index-entrance-content">
    <a class="index-entrance-linkbox">
      <strong class="triple-desc-words">
          <span class="captionTitle">新店尝新</span>
          <span class="subtitle">请不要改成其它连接重要事情说三遍</span>
      </strong>
          <img class="triple-floor-img" src="https://img30.360buyimg.com/mobilecms/jfs/t2731/343/2855653087/11662/1b8d2f7b/57764150Nb6f842c9.png">
       </a> 
    </div>
</div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {}
  }
}
</script>
<style lang="scss">
.index-entrance-wrap {
    background-color: #fff;
    border-top: 1px solid #F3F6F4;

}
.index-entrance-content {
    display: inline-block;
    width: 100%;
    font-size: 0;
    display: flex;
}
.index-entrance-linkbox {
    display: inline-block;
    flex:1;
    vertical-align: top;
    height: 57px;
    padding-top: 8px;
}
.triple-floor-img {
    width: 45px;
    height: 45px;
}
.index-entrance-linkbox .triple-floor-img {
    float: right;
    margin-top: 1px;
    margin-right: 12px;
    background-image: url(https://static-o2o.360buyimg.com/daojia/new/images/show_default.png);
    background-size: 100%;
}
</style>
