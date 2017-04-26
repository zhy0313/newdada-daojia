<template>
<ul class="triple-floor-box">  
    <li class="triple-floor-item">
        <a class="triple-floor-item-link" href="javascript:;">
            <strong class="triple-desc-words">
                <span class="triple-title">普通券测试</span>
                <span class="triple-intro">线广告词和规则</span>
            </strong>
            <img class="triple-floor-img" src="https://img30.360buyimg.com/mobilecms/jfs/t2311/90/2639906046/12511/ba77062f/56dff636N6a866c25.png">
        </a>
    </li>    
     <li class="triple-floor-item">
        <a class="triple-floor-item-link" href="javascript:;">
            <strong class="triple-desc-words">
                <span class="triple-title">普通券测试</span>
                <span class="triple-intro">线广告词和规则</span>
            </strong>
            <img class="triple-floor-img" src="https://img30.360buyimg.com/mobilecms/jfs/t2311/90/2639906046/12511/ba77062f/56dff636N6a866c25.png">
        </a>
    </li>  
    <li class="triple-floor-item">
        <a class="triple-floor-item-link" href="javascript:;">
            <strong class="triple-desc-words">
                <span class="triple-title">普通券测试</span>
                <span class="triple-intro">线广告词和规则</span>
            </strong>
            <img class="triple-floor-img" src="https://img30.360buyimg.com/mobilecms/jfs/t2311/90/2639906046/12511/ba77062f/56dff636N6a866c25.png">
        </a>
    </li>    
</ul>

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
/* 三宫格 */
.triple-floor-box {
    display: flex;
    flex-direction: row;    
    background: #fff;
    margin-top:10px;
}
.triple-floor-item {
    flex:1;
    border-right: 1px solid #f3f6f4;
    padding-top: 8px;
    vertical-align: top;
    text-align: center;
}
.triple-floor-item:last-child {
    border:none;
}
.triple-floor-item-link , .triple-desc-words strong {
    display: block;
}
.triple-title, .triple-intro {
    display: block;
    line-height: 32px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.triple-title {
    font-size: 15px;
    font-weight: bold;
}
.triple-intro {
    font-size: 12px;
    line-height: 12px;
    min-height: 11px;
    color: #999;
}
.triple-floor-img {
    width: 60px;
    height: 60px;
}
/* end 三宫格 */
</style>
