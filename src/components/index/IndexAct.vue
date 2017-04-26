<template>
<div class="index-act-wrap" v-bind:class="IndexAct.edge && 'index-edge'">
    <div class="index-public-title" v-if="IndexAct.floorTitle">
        <h3 class="index-public-title-txt">{{IndexAct.floorTitle.floorName}}</h3>
    </div>
    <!--tpl1-act1-秒杀 动态五宫格 act1 中配了秒杀-->
    <div class='miaosha-floor' v-if="(IndexAct.data.length == 1) && (IndexAct.data[0].floorCellType == 'miaosha')">
        <!--seckillType =2 限时抢，=1 老秒杀，老秒杀已下线-->
        <div class="index-miaosha miaoSha" v-bind:class="IndexAct.edge && 'index-edge'">
            <a class="triple-floor-item-link">
                <strong class="triple-desc-words">
                    <span class="triple-title miaosha">{{IndexAct.data[0].dataObj.title}}</span>
                    <span class="triple-intro">{{IndexAct.data[0].dataObj.adwords}}</span>
                    <em></em>
                </strong>
                <img class="triple-floor-img" v-bind:src="IndexAct.data[0].dataObj.imgUrl" />
            </a>
        </div>
        <span class="preLoadImage"></span>
    </div>
    <ul class="index-act" v-bind:class="'actcount'+IndexAct.data.length (IndexAct.data[0].floorCellType!='miaosha') && ' not-miaosha'"  v-else>
        <!--tpl1 动态五宫格 act3,act5 中 第一个宫格 中配了秒杀-->
        <li class="index-act-item sequence0 border-r miaoSha" id="act-miaosha" v-for="(item,index) in IndexAct.data" v-if="item.floorCellType == 'miaosha' ">
            <a class="triple-floor-item-link">
                <strong class="triple-desc-words">
                    <span class="triple-title miaosha">{{item.dataObj.title}}</span>
                    <span class="triple-intro">{{item.dataObj.adwords}}</span>
                    <em></em>
                </strong>
                <img class="triple-floor-img" v-bind:src="IndexAct.data[0].dataObj.imgUrl" />
            </a>
            <span class="preLoadImage"></span>
        </li>
        <li class="index-act-item" v-else v-bind:="'sequence'+index">
            <a class="index-act-item-link">
                <strong class="index-act-desc-box">
                <em class="index-act-title" style="color:#333333">{{item.floorCellData.title || item.floorCellData.name}}</em>
                    <span class="index-act-words" style="color:#9cac96">{{item.floorCellData.words}}</span>
                </strong>
                <img  class="index-act-pic" v-bind:src="item.floorCellData.imgUrl" />
            </a>
        </li>
    </ul>
</div>
</template>
<script>
export default {
  props: {
    IndexAct: Array
  },
  data: function () {
    return {
    }
  }
}
</script>
<style lang="scss">
.index-act {
    background-color: #fff;
    overflow: hidden;
    position: relative;
    font-size: 0;
}
.index-act-item {
    display: inline-block;
    width: 49.5%;
    height: 1.7rem;
    vertical-align: top;
    position: relative;
}
.index-act-item.miaosha{
    width: 57%;
}
.index-act-item.sequence0.miaoSha{
    width: 43%;
}
.index-act-item-link {
    display: block;
    height: 100%;
    position: relative;
    line-height: 0.48rem;
    text-align: left;
    z-index: 6;
}
.actcount5 .sequence1,.actcount5 .sequence2,.actcount5 .sequence3,.actcount5 .sequence4{
    width: 28%;
    height: 2.1rem;
}
.index-act-pic {
    width: 1.1rem;
    height: 1.1rem;
    margin:0 auto;
    display: block;
}
.not-miaosha .index-act-pic{
    position: absolute;
    right: 0.5rem;
    top: 0.32rem;
    margin: 0;
}
.actcount4.not-miaosha .index-act-pic{
    position: static;
    right: auto;
    top: auto;
    margin: 0;
}
.actcount3 .sequence1 .index-act-pic,.actcount3 .sequence2 .index-act-pic,.actcount4 .sequence1 .index-act-pic{
    /*float: right;*/
    margin-top: 0.32rem;
    margin-right: 0.4rem;
}
.index-act-desc-box {
    float: left;
    width: 60%;
}
.not-miaosha .index-act-desc-box{
    margin-left: 0.5rem;
    margin-top: 0.4rem;
}
.miaoSha .index-act-desc-box,.actcount3 .index-act-desc-box,.actcount5 .index-act-desc-box{
    float: none;
    text-align: center;
    width: auto;
}
.actcount3 .sequence1 .index-act-desc-box,.actcount3 .sequence2 .index-act-desc-box{
    float: left;
    width: 50%;
    text-align: left;
    padding-left: 20px;
    /*margin-top: 10%;*/
}
.index-act.actcount6 .index-act-item {
    background-color: #fff;
    width: 49.5%;
    margin-left: 0;
    font-size: 0;
}
.index-act.actcount6 .index-act-item-link {
    border-bottom: 2px solid #F3F6F4;
}
.index-act.actcount6 .sequence0 .index-act-item-link,
.index-act.actcount6 .sequence2 .index-act-item-link,
.index-act.actcount6 .sequence4 .index-act-item-link {
    border-right: 2px solid #F3F6F4;
}
.index-act.actcount6 .index-act-pic {
    top: 12px;
    width: 50px;
    height: 50px;
}
.index-act-title {
    display: block;
    color: #39ac69;
    font-size: 0.28rem;
    padding-top: 0.2rem;
    /*padding-left: 15px;*/
    line-height: 0.3rem;
    height: 0.3rem;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.index-act-words {
    display: block;
    height: 0.44rem;
    /*padding-left: 15px;*/
    color: #999;
    font-size: 0.22rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
#act-miaosha .preLoadImage {
    display: none;
    background: url(https://static-o2o.360buyimg.com/daojia/new/images/act_five_miaosha_error.png) no-repeat;
}
.miaosha-floor .preLoadImage {
    display: none;
    background: url(https://static-o2o.360buyimg.com/daojia/new/images/act_one_miaosha_error.png) no-repeat;
}
.actcount1 .index-act-title {
    height: 26px;
    max-width: 80%;
    padding-top: 18px;
    text-align: left;
}
.actcount1 .index-act-words {
    height: 30px;
    display: block;
    max-width: 80%;
    padding-left: 20px;
    text-align: left;
}
.actcount3 .sequence0{
    height: 3.42rem;
    float: left;
}
.actcount5 .sequence0{
    height: 4.2rem;
    float: left;
}
.actcount3 .sequence0 .triple-floor-item-link,
.actcount5 .sequence0 .triple-floor-item-link {
    height: 100%;
    padding-left: 0;
}
/*account3和account5公用*/

.actcount5 .triple-title,
.actcount5 .triple-intro,
.actcount3 .triple-title,
.actcount3 .triple-intro {
    /*max-width: 90%;*/
    text-align: left;
}

.actcount5 .sequence0 .triple-title,
.actcount5 .sequence0 .triple-intro,
.actcount3 .sequence0 .triple-title
/*.actcount3 .sequence0 .index-intro */{
    max-width: 100%;
    padding-left: 0;
    /*text-align: center;*/
}

.actcount5 .sequence1.border-ri:before{
    height: 50%;
    top: 50%;
}

.actcount5 .sequence1.borderBottom:after{
    height: 1px;
    content: '';
    width: 50%;
    border-bottom: 1px solid #e8e8e8;
    position: absolute;
    bottom: -1px;
    right: 0;
    transform: scaleY(0.5);
    -webkit-transform: scaleY(0.5);
    z-index: 10;
}
.actcount5 .sequence2.border-b:before{
    width: 50%;
    left: 0;
}
.actcount5 .sequence3.border-ri:before{
    height: 50%;
}

/*account公用*/

.actcount5 .sequence0 .triple-intro {
     padding: 0;
    margin: 0 auto;
    height: 0.52rem;
    text-align: center;
    line-height: 0.52rem;
    margin-bottom: 0.2rem;
}
.actcount3 .sequence0 .triple-intro {
    /*width: 88%;*/
    padding: 0;
    margin: 0 auto;
    height: 0.42rem;
    line-height: 0.42rem;
    margin-bottom: 0.1rem;
    text-align: center;
}
/*
.actcount5 .sequence0 .image-set,
.actcount3 .sequence0 .image-set {
    display: block;
    height: 62px;
    position: relative;
}*/
.actcount3 .sequence0 .triple-desc-words,
.actcount5 .sequence0 .triple-desc-words {
    float: none;
    display: block;
    width: 100%;
    /*padding-top: 6px;*/
}
.actcount3 .sequence0 .triple-floor-img
{
    /*float: none;
    display: block;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    float: right;
    margin-right: 15px;*/
    width: 1.7rem;
    height: 1.7rem;
    display: block;
    margin: 0 auto;
}
.actcount5 .sequence0 .triple-floor-img {
    width: 1.7rem;
    height: 1.7rem;
    display: block;
    margin: 0 auto;
}
.actcount3 .sequence1,.actcount3 .sequence2{
    height: 1.7rem;
}

/*accout4*/
.actcount4 .sequence0{
    height: 4.22rem;
    float: left;
}
.actcount4 .sequence0 .index-act-desc-box{
    display: block;
    text-align: center;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 1.7rem;
}
.actcount4 .sequence0 .index-act-title{
    height: 0.52rem;
    text-align: center;
    display: block;
    line-height: 0.52rem;
    font-size: 0.44rem;
    margin: 0.38rem 0 0 0px;
    padding: 0;
}
.actcount4 .index-act-item{
    width: 43%;
}
.actcount4 .sequence1{
    width: 57%;
}
.actcount4 .sequence1 .index-act-desc-box{
    margin-left: 0.28rem;
    padding: 0;
    margin-top: 0;
}
.actcount4 .sequence2 .index-act-desc-box,.actcount4 .sequence3 .index-act-desc-box{
    margin: 0;
    padding: 0;
    text-align: center;
    display: block;
    width: 100%;
}
.actcount4 .sequence2 .index-act-pic,.actcount4 .sequence3 .index-act-pic{
    display: block;
    margin: 0 auto;
}
.actcount4 .sequence2,.actcount4 .sequence3{
    width:28.5%;
    height: 106px;
}
.actcount4 .sequence1{
    height: 2.1rem;
}
.actcount4 .sequence0 .index-act-pic{
    width: 1.7rem;
    height: 1.7rem;
}
.actcount4.not-miaosha .sequence0 .index-act-pic{
    margin: 0.2rem auto 0 auto;
}
.actcount1.not-miaosha .index-act-item {
    width: 100%;
}
.actcount1.not-miaosha .index-act-title {
    height: 18px;
    line-height: 18px;
    color: #333;
}
.actcount1.not-miaosha .index-act-words {
    padding-left: 15px;
    color: #999;
}
</style>
