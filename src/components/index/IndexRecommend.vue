<template>
<div class="index-content-wrapper-recommend">
	<div class="index-shop-wrap ">
        <div class="index-shopList-title"><span><!--<i class="index-icon-two stroreList-icon"></i>-->ddd</span></div>
        <ul class="index-store-list-style">
           	<li class="index-store-item" >
            <!--门店列表上部 start-->
            <a class="index-strore-list-main" node-type="index-gotoStore" orgCode="" storeId="" skuId="">
                <div class="index-store-wrapImg">
                    <img class="index-store-logo" src="https://img30.360buyimg.com/vendersettle/jfs/t3073/78/2311895952/25981/f5f760e/57df82faN5d06deef.jpg"/>
                    <!--门店列表头部左侧 start-->
                    <div class="index-store-title">
                        <h2>名字</h2>
                        <div class="index-star-wrap">                            
                            <p class="index-dada">达达专送</p>    
                                <p class="index-store-list-descrip-minute">啊啊啊</p> <!--送达时间第一行-->      
                       </div>
                        <!-- star -->
                        <p class="index-icon-star-list">
                            萨芬 
                        </p>
                        <!-- 销量start-->
                        <p class="index-store-list-sale">
                           搜索
                        </p>
                        <!-- 销量end-->
                        <span class="go-to-store-icon">进店逛逛</span>
                    </div>
                </div>
                <!--门店列表头部左侧 end-->
                <!--商家广告语-->

                <!--门店列表头部右侧 start
                <div class="index-store-cart-descrip">
                    <span {{if result.inCartNum && result.inCartNum>0}}class="index-icon-cart"{{else}}class="index-icon-gray-cart"{{/if}}>{{if result.inCartNum>0}}<i>{{result.inCartNum}}</i>{{/if}}</span>
                </div>-->
                <!--门店列表头部右侧 end-->

            </a>
             <!--门店列表上部 end-->
                <div class="index-store-list-fujia-bottom"><!--推荐商家整个下半部分 start-->
                    <!--门店列表打标活动下部 start-->
                     <div class="index-store-list-fujia">
                     <!--门店列表打标活动下部左侧 start-->
                        <div class="index-store-fujia-left">
                            <ul node-type="index-storeActivityList" class="index-store-activity-list">
                                
                            </ul>
                        </div>
                    <!--门店列表打标活动下部左侧 end-->
                    <!--门店列表打标活动下部右侧 start-->
                    <div class="index-store-fujia-right" node-type="index-checkStoreActivity">
                   
                            <span>1个活动</span>
                            <i class="index-store-list-icon index-store-activity-icon"></i>
                        
                    </div>
                    <!--门店列表打标活动下部右侧 end-->
                    
                </div>
           
             <!--门店列表打标活动下部 end-->
        </li>
        </ul>
    </div>
</div>
<div class="index-recommend-loading"><i></i><span>继续滑动查看更多内容</span></div>
<div class='noGoodsRemind'>
    <p><i class="left-dot"></i>没有更多商家啦<i class="right-dot"></i></p>
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

</style>
