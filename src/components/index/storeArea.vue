<template>
<div class="index-night-wrapper" style="height:193px">
    <img class="night-image" v-bind:src="storeArea.data[0].floorCellData.imgUrl" style="width:100%;height:125px">
    <div class="index-night-store">      
      <ul class="index-night-list index-night-four">
        <li class="index-night-store-item" v-for="item in storeArea.data[0].floorCellData.storeList">
          <a href="javascript:;">
            <dl>
              <dd class="night-item-logo">
                  <img v-bind:src="item.imgUrl"/>
              </dd>
              <dt class="night-item-title">
                  <h6>{{item.name}}</h6>
                  <p class="night-item-deliver-box"><span><!-- <i>商家自送</i><i> - </i> --><i>120分钟</i></span></p>
                  <p class="night-item-star-list">
                    <span class="starWrap-common clearfix">
                        <i class="grey-Star"></i>
                        <i class="grey-Star"></i>
                        <i class="grey-Star"></i>
                        <i class="grey-Star"></i>
                        <i class="grey-Star"></i>
                    </span>
                  </p>
              </dt>
            </dl>
          </a>
        </li>
      </ul>     
    </div>
</div>
</template>
<script>
export default {
  props: {
    storeArea: Array
  },
  data: function () {
    return {
    }
  }
}
</script>
<style lang="scss">
/* night-wrapper */
.index-night-wrapper {
    position: relative;
}
.index-night-store {
    margin-bottom: 13px;
    position: absolute;
    bottom: 0px;
    right:0;
    left:0;
    box-shadow: 0px 3px 3px #eeeded;
}
.index-night-list {
    background: #fff;
    margin:0 10px 0 10px;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
}
.index-night-store-item {
    background: #fff;
    flex:1;
    text-align: center;
    padding:10px 0 0;
}
.night-item-logo {
    width: 52px;
    height: 52px;
    border-radius: 2px;
    border: 1px solid #e8e8e8;
    display: inline-block;
}
.night-item-deliver-box ,.night-item-star-list {
    display: none;
}
.night-item-title h6 {
    font-size: 14px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    margin-top: 0;
    font-weight: bold;
    -webkit-flex: 1;
    max-width: 90%;
}
.night-item-deliver-box span{
    display: inline-block;
    border: 1px solid #999;
    border-radius: 1px;
    font-size: 10px;
    line-height: 1;
}

.index-night-one,.index-night-second {
    margin:0 10px 0 0;
    background: rgba(0,0,0,0);
}
.index-night-one .night-item-logo,.index-night-second .night-item-logo{
    width: 64px;
    height: 64px;
    border-radius: 4px;
}
.index-night-one .night-item-title h6,.index-night-second .night-item-title h6{
    font-size: 16px;
}
.index-night-one .index-night-store-item,.index-night-second .index-night-store-item {
    text-align: left;
    padding:18px 0 17px 10px;
    margin-left: 10px;
}
.index-night-one .night-item-logo,.index-night-second .night-item-logo {
    float: left;
    margin-right: 8px;
} 
.index-night-one .night-item-title,.index-night-second .night-item-title {
    margin-left: 74px;
}
.index-night-one .night-item-deliver-box,.index-night-second .night-item-deliver-box,.index-night-one .night-item-star-list,.index-night-second .night-item-star-list {
    display: block;   
}
.index-night-four .index-night-store-item  {
    width: 25%;
}
/* end night-wrapper */
</style>
