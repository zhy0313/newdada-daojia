<template>
<!-- head -->
<div class="search-bar-wrap index-search-bar-wrap">
    <div class="location">
        <p>{{address.title}}</p>
        <i class="title-down"></i>
    </div>
    <span class="index-search-wrap" clstag="pageclick|keycount|home_search_20160623_1|1">
        <a class="index-search index-icon"></a>附近商家商品
    </span>
    <!-- <i class="index-paixu hide-black-search" clstag="pageclick|keycount|sortbutton|1"></i>
    <i class="index-black-search hide-black-search" clstag="pageclick|keycount|home_search_20160623_2|1"></i> -->
    <a class="index-message-icon" href="#message"><i class="hideDot"></i></a>
</div>
</template>
<script>
export default {
  props: {
    address: Array
  },
  data: function () {
    return {
    }
  }
}
</script>
<style lang="scss">
/* head */
.index-search-bar-wrap {
    border-bottom: 0;
    background: url(https://static-o2o.360buyimg.com/daojia/new/images/index/index_black_semi.png) no-repeat;
    background-size: 100% 100%;
    height: 56px;
    display: flex;
}
.search-bar-wrap {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
    color: #555;
    font-size: 17px;
    text-align: center;
    line-height: 44px;
    transform: translateZ(0);
}
.location {
    max-width: 40%;
    display: inline-block;
    height: 24px;
    border-radius: 23px;
    line-height: 24px;
    font-size: 14px;
    color: #fff;
    margin-top: 10px;
    left: 0;
    text-align: left;
    margin-right: 57px;
}
.location p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: top;
    max-width: 72%;
}
.index-search-bar-wrap .location p {
    background: url(https://static-o2o.360buyimg.com/daojia/new/images/index/icon_locate.png) no-repeat 4px 3px;
    background-size: 16px;
    padding-left: 20px;
}
.title-down {
    width: 10px;
    height: 30px;
    background: url(https://static-o2o.360buyimg.com/daojia/new/images/index/index_icon24.png) no-repeat;
    background-size: 20px 390px;
    background-position: -5px -27px;
    display: inline-block;
}
.index-search-wrap {
    background: rgba(255, 255, 255, 0.35);
    width: 40%;
    height: 30px;
    top: 7px;
    right: 35px;
    position: relative;
    border-radius: 20px;
    display: inline-block;
    color: #fff;
    font-size: 14px;
    line-height: 30px;
    text-align: left;
    padding-left: 30px;
    white-space: nowrap;
    overflow: hidden;
    flex: 1;
}
.index-search-wrap .index-search {
    position: absolute;
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url(https://static-o2o.360buyimg.com/daojia/new/images/index/index_icon24.png) no-repeat;
    background-size: 20px 390px;
    background-position: 5px -55px;
    border-radius: 20px;
    padding: 6px;
    top: 0;
    left: 0;
}
.index-message-icon {
    display: inline-block;
    width: 26px;
    height: 20px;
    background: url(https://static-o2o.360buyimg.com/daojia/new/images/index/index_icon_301.png) no-repeat;
    background-size: 60px 240px;
    background-position: -17px -3px;
    position: absolute;
    right: 7px;
    top: 12px;
}
.index-message-icon i.hideDot {
    display: none;
}
.index-message-icon i {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #f00;
    position: absolute;
    right: -1px;
    top: -3px;
    border-radius: 4px;
}
/*end head*/
</style>
