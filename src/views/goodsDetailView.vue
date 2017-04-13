<!-- <template> -->
  <!--商品详情-->
  <!-- <div class="good-detail-warp">
      <div class="detail-banner-box">
          <div class="detail-banner-content swipe7"></div>
          <span v-if="logoTag" class="promotion-tag promotion-tag-{{logoTag.type}}"><i>{{logoTag.iconText}}</i></span>
          <div class="hr_shadow"></div>
      </div>
	    <div  class="detail-title-box">
		     <h1 class="first-title">{{name}}</h1>
         <h3 v-if="adword" class="second-title">{{adword}}</h3>
		  </div>
  		<div v-if="miaoshaInfo && miaoshaInfo.miaoShaSate == 1" class="detail-miaosha-box">秒杀<em node-type="seckill-time-show"><i>{{hour}}</i>:<i>{{minute}}</i>:<i>{{second}}</i></em>结束</div>
      <!--条件渲染的类名通过classObj 在data中去判断，不在模板中判断 v-if='inCartCount > 0 && buttonEnable' class="switchHide"-->
      <!-- <div class="detail-price-box" > -->
         <!--{{if hasSaleAttr || (tags && tags.length)}}add-detail-border{{/if}}-->
  	    	<!-- <div class="detail-price-content "> -->
	            <!-- <template v-if="skuPriceVO.promotion==0">
		              <p class="promotionprice"><span>￥</span>{{skuPriceVO.realTimePrice}}</p>
	                <p class="marketprice"><span>￥</span>{{skuPriceVO.basicPrice}}</p>
              </template>
	            <template v-else>
					         <p class="promotionprice"><span>￥</span>{{skuPriceVO.realTimePrice||暂无报价}}</p>
		          </template> -->
    	        <!--{{if productType == 1 || productType == 4}}-->
              <!--{{if buttonEnable}}{{if miaoshaInfo && miaoshaInfo.miaoShaSate != 2}}sure{{else}}sure{{/if}}{{/if}} {{if inCartCount > 0 && buttonEnable}}hideAddCart{{/if}}"-->
    					<!-- <span class="add-cart-btn" _skuId="{{skuPriceVO.skuId}}" _orgCode="{{orgCode}}" _storeId="{{storeInfo.storeId}}" onclick='lg("user_action","1.0",{"clickid":"add_cart","sku_id":"{{skuPriceVO.skuId}}"})'>{{showStateName}}</span>
    					<div class="Box">
  		              <span class="reduce" _skuId="{{skuPriceVO.skuId}}" _storeId="{{storeInfo.storeId}}" _orgCode="{{orgCode}}" onclick='lg("user_action","1.0",{"clickid":"reduce_cart","sku_id":"{{skuPriceVO.skuId}}"})'>减</span>
  		              <label class="show">{{inCartCount}}</label>
  		              <span class="add" _skuId="{{skuPriceVO.skuId}}" _storeId="{{storeInfo.storeId}}" _orgCode="{{orgCode}}" onclick='lg("user_action","1.0",{"clickid":"add_cart","sku_id":"{{skuPriceVO.skuId}}"})'>加</span>
    			     </div> -->
  	      <!-- </div> -->
  	 <!-- </div> -->
  	<!-- <template v:if="tags && tags.length>0"> -->
  	    <!-- <div class="detail-promotion-box">
  	    	<div class="detail-promotion-content {{if hasSaleAttr}}add-detail-border{{/if}}">
  	    		<span class="promotion-left">促销</span>
  	            <div class="promotion-right">
  	            	<p  v:if="tags.length>2" class="promotion-title">可享受以下促销<i class="good-detail-icon arrow arrow-down"></i></p>
  	                 <ul class="promotion-list {{if tags.length>2}}promotion-list-2{{else}}promotion-list-1{{/if}}">
  			                	<li v:for="item in tags" class="promotion-item {{if $index == 0}}first-promotion-item{{/if}} {{if $index != 0 && $index == tags.length-1}}last-promotion-item{{/if}}">
  			                    	 <a v:if="item.colorCode && item.iconText" class="clearfix" v:if="item.activityRange==2" href="#storeHome/storeId:{{storeInfo.storeId}}/orgCode:{{storeInfo.venderId}}/activityId:{{item.activityId}}/promotionType:{{item.type}}/fromAnchor:true" >
  			                            <span class="active-type active-type-{{item.type}}" style="background: #{{item.colorCode}}">{{item.iconText}}</span>
  			                            <span class="active-detail">{{item.words}}</span>
  			                            <i v:if="item.activityRange==2 && item.activityId" class="good-detail-icon arrow arrow-right"></i>
  			                       </a>
			                     </li>
  	                 </ul>
  	            </div>
  	    	</div>
  	     </div>
      </template>  -->


<!--
      {{if hasSaleAttr}}
       <div class="detail-property-box">
      	<div class="detail-property-content">
      		<span class="property-left">已选</span>
              <div class="property-right">
              	<p class="property-title">{{mainAttrValueName}}  {{if subAttrValueName}}{{subAttrValueName}}{{/if}}<i class="good-detail-icon arrow arrow-right"></i></p>
              </div>
      	</div>
      </div>
      {{/if}}


      {{if prescription}}
      	<div class="detail-prescription-box">
      		<p class="prescription-title">处方药购买须知</p>
      		<div class="prescription-text">{{=prescriptionInstructions}}</div>
  			<i class="good-detail-icon show-rescription arrow-down" tap></i>
  	</div>
      {{if funcIndicatins}}
      <div class="detail-indication-box">
      	<p class="indication-title">功能主治</p>
      	<p class="indication-text">{{funcIndicatins}}</p>

      </div>
      {{/if}}
      {{if storeInfo.venderPhone}}
  		<div class="detail-home-box clearfix">
  		    	<div class="detail-home-content">
  		            <a href="#storeHome/storeId:{{storeInfo.storeId}}/orgCode:{{storeInfo.venderId}}">
  		                <i class="good-detail-icon store-home"></i>
  		                <span class="store-home-name">{{storeInfo.storeName}}</span>
  		            </a>
  		    	</div>
  		        <div class="detail-phone-content">
  		    		<a href="tel:{{storeInfo.venderPhone}}" clstag="pageclick|keycount|item_connect_20160623_1|1">
  		                <i class="good-detail-icon store-phone"></i>
  		                <span class="store-phone-text">联系商家</span>
  		            </a>
  		    	</div>
  		 </div>
      {{else}}
  	    <div class="detail-home-box">
  	    	<div class="detail-phone-null">
  	            <a href="#storeHome/storeId:{{storeInfo.storeId}}/orgCode:{{storeInfo.venderId}}">
  	                <i class="good-detail-icon store-home"></i>
  	                <span class="store-home-name">{{storeInfo.storeName}}</span>
  	                <i class="good-detail-icon arrow arrow-right"></i>
  	            </a>
  	    	</div>
  	    </div>

      {{/if}}
     {{if productComment}}
        {{include('detail-comment-tpl')}}
     {{/if}}
     {{if isRemind && productInfoType != 1}}
   	<div class="detail-recommend-box"></div>
     {{/if}}
  {{if productInfoType==1}}
  	  <div class="detail-show-butten-new" clstag="pageclick|keycount|goodinfo_detail_20161013|1"><span class="fontColor">查看图文详情</span><span class="circle"><i></i></span></div>
  {{/if}}
  </div>

  {{if productInfoType==1}}
  	  <div class="detail-desc-box clearfix"></div>
  {{/if}}



</script>-->



  <!--单品图文详情-->
  <!--<script type="text/tpl" id="goodsDetailDescription-tpl">
      <div class="detail-desc-content">{{=html}}</div>
  </script>

  <!--秒杀下单按钮-->
  <!--<script  type="text/tpl" id="skill-buy-tpl">
  	<div class="submit-order-button skill-order-button {{if buttonEnable}}sure{{/if}}" clstag="pageclick|keycount|item_immediately_buy_20160623_1|1">{{showStateName}}</div>
  </script>

  <!--单品下单按钮-->
  <!--<script  type="text/tpl" id="danpin-buy-tpl">
  	{{if productType == 2 || productType == 5}}
  		<div class="submit-order-button danpin-order-button {{if buttonEnable}}sure{{/if}}" clstag="pageclick|keycount|item_immediately_buy_20160623_1|1">{{showStateName}}</div>
  	{{/if}}
  </script>


  <!-- 商品详情页轮播 -->
  <!--<script type="text/tpl" id="detail-banner-tpl">
  {{if $data && $data.length>0}}
  	<div class="swipe7list">
  		{{each}}
  			<div class="swipe7item">
  					<img src="{{$changeWebp($value.big)}}"  onerror='this.src="images/show_default.png"'>
  			</div>
  		{{/each}}

  	</div>
  	{{if $data.length > 1}}
  		<span class="num-Switch-box"><span class="bigFont">1</span>/<span class="smallFont">{{$data.length}}</span></span>
  	{{/if}}
  {{else}}
  	<div class="loading-error" style="height:320px"></div>
  {{/if}}
  </script>


  <!-- 商品详情页推荐商品 -->
<!--  <script type="text/tpl" id="recomment-banner-tpl">
  {{if result && result.length>0}}
  		<p class="recommend-title">也许你还喜欢</p>
          <div class="swipe7 good-list-box">
  	        <div class="swipe7list">
  					{{each result}}
  						<div class="swipe7item">
  				        	<ul class="good-list-item good-item-three">
  				        		{{each $value.data}}
  					        		<li>
  					                	<a class="good-box" href="#goodsDetails/skuId:{{$value.skuId}}/storeId:{{$value.storeId}}/orgCode:{{$value.orgCode}}" onclick='lg("user_action","1.0",{"clickid":"{{skuDate}}",{{$getUserAction($value.userActionSku)}}})'>
  					                   		{{if $value.tags && $value.tags[0]}}<span class="promotion-tag promotion-tag-{{$value.tags[0].type}}"><i>{{$value.tags[0].iconText}}</i></span>{{/if}}
  					                    	<img src="{{$value.imgUrl}}" onerror='this.src="images/show_default.png"'>
  					                        <span class="good-title">{{$value.skuName}}</span>
  					                        {{if $value.realTimePrice == '暂无报价' }}
  					                    		<span class="good-no-price"><i>￥</i>暂无报价</span>
  					                    	{{else}}
  					                    		<span class="good-price"><i>￥</i>{{$value.realTimePrice}}</span>
  					                    	{{/if}}
  					                	</a>
  					                	{{if showCart && $value.showCartButton}}
  					                    <span class="good-detail-icon add-cart-button sure tuijian" _skuId="{{$value.skuId}}" _orgCode="{{$value.orgCode}}" _storeId="{{$value.storeId}}" onclick='lg("user_action","1.0",{"clickid":"{{cartDate}}",{{$getUserAction($value.userActionSku)}}})'></span>
  					                    {{/if}}
  					                    <!-- {{if showcartCount}}
  										 	<span class="good-number-incart {{if $value.incartCount == 0}} good-nonumber-incart{{/if}}">{{$goodNumInCart($value.incartCount)}}</span>
  										{{/if}} -->

  					                <!--</li>
  				               {{/each}}
  				        	</ul>
  				    	</div>
  				   {{/each}}

          </div>
  {{/if}}
  </script>


  <!-- 商品详情属性 -->
  <!--<script type="text/tpl" id="detail-property-tpl">
  <div class="detail-property-warp">
  <div class="detail-mask" tap></div>

  <div class="detail-select-box">
      <div class="select-detail-box">
          <img src="{{imgUrl}}" onerror='this.src="images/show_default.png"'>
          {{if groupSkuVO}}
          	<p class="tuan-detail-price-box"><span class="tuan-price-title">{{groupSkuVO.groupPriceDisplay}}</span><span class="select-detail-price"><i>￥</i>{{groupSkuVO.groupPrice}}</span></p>
          	<p class="single-detail-price-box"><span class="tuan-price-title">{{groupSkuVO.djPriceDisplay}}</span><span class="select-detail-price"><i>￥</i>{{groupSkuVO.djPrice}}</span></p>
          {{else}}
          	<p class="select-detail-price-box"><span class="select-detail-price"><i>￥</i>{{price}}</span></p>
          {{/if}}
          <span class="select-detail-property">{{mainAttrValueName}}  {{subAttrValueName}}</span>
          <i class="good-detail-icon select-close" tap></i>
      </div>

      {{if saleAttrList && saleAttrList.length}}
      <div class="select-property-box">
     		{{each saleAttrList}}
  	        <div class="select-property-content select-property-content-{{$value.sort}} clearfix">
  	            <span class="select-property-title">{{$value.attrName}}：</span>
  	            {{if saleAttrList && saleAttrList.length}}
  		            <div class="select-property-list">
  		                <ul class="clearfix">
  		                	{{each $value.saleAttrValueList}}
  		                    	<li _saleId="{{$value.saleId}}" _skuId="{{$value.skuId}}" _otherkey="{{$handleKey($value.otherAttrValueSkuMap)}}" _otherProperty="{{$handleProperty($value.otherAttrValueSkuMap)}}" class="{{if $value.status==1}}status-1{{else}}status-3{{/if}} {{if $value.selectAttr}}selected{{/if}}">{{$value.name}}</li>
  		                    {{/each}}

  		                </ul>
  		            </div>
  		        {{/if}}
  	     	</div>
  		  {{/each}}
  	</div>
  	{{/if}}

  	{{if productType == 3}}
  		<div class="select-order-button skill-order-button {{if buttonEnable}}sure{{/if}}">{{settlementModeName}}</div>
  	{{else if productType == 2 || productType == 5}}
  		<div class="select-order-button danpin-order-button {{if buttonEnable}}sure{{/if}}">{{settlementModeName}}</div>
  	{{/if}}
  </div>
  </script>


  <!-- 商品列表样式  -->
  <!-- {{$goodsTempleType(templeType)}} -->
  <!-- 一宫格 对应 class = goods-list-one -->
  <!-- 四宫格 对应 class = goods-list-two -->
  <!-- 九宫格 对应 class = goods-list-three-->
  <!-- 医药 对应 class = goods-list-medicine-->

  <!--showcartCount为true 表示商品模板带购物车数量  -->
  <!-- venderId , showCart 目前是活动页和满减落地页在用  -->
  <!--<script type="text/tpl" id="good-list-tpl" preload>
  {{each result}}
  	 <li>
  		<a class="good-box {{if isShare}}{{if goStoreHome}}activityToGoods{{else}}activityToDetails{{/if}}{{/if}}" {{if isShare}}skuId="{{$value.skuId}}" storeId="{{$value.storeId}}" orgCode="{{$value.venderId}}" promotionType="{{$value.tags && $value.tags[0] && $value.tags[0].type}}"{{/if}} {{if goStoreHome}}href="#storeHome/skuId:{{$value.skuId}}/storeId:{{$value.storeId}}/orgCode:{{$value.venderId}}/promotionType:{{$value.tags && $value.tags[0] && $value.tags[0].type}}/fromAnchor:true"{{else}}href="#goodsDetails/skuId:{{$value.skuId}}/storeId:{{$value.storeId }}/orgCode:{{$value.orgCode || $value.venderId}}"{{/if}} {{if skuDate}}onclick='lg("user_action","1.0",{"clickid":"{{skuDate}}",{{$getUserAction($value.userActionSku || $value.userAction)}}})'{{/if}}>
  			  {{if $value.tags && $value.tags[0]}}<span class="promotion-tag promotion-tag-{{$value.tags[0].type}}"><i>{{$value.tags[0].iconText}}</i></span>{{/if}}
  			<img src="{{$value.imgUrl}}" onerror='this.src="images/show_default.png"'>
  			{{if $value.stockCount<1}}<div class="good-stockCount-no"><span>抢光了</span></div> {{/if}}
  			<span class="good-title">{{$value.skuName}}</span>
  			 {{if $value.realTimePrice == '暂无报价' }}
          		<span class="good-no-price"><i>￥</i>暂无报价</span>
          	{{else}}
          		<span class="good-price"><i>￥</i>{{$value.realTimePrice}}</span>
          	{{/if}}
  		</a>
  		<a class="store-name none" href="#storeHome/storeId:{{$value.storeId}}/orgCode:{{$value.orgCode}}"  {{if storeDate}}onclick='lg("user_action","1.0",{"clickid":"{{storeDate}}",{{$getUserAction($value.userActionStore)}}})' {{/if}}><span>{{$value.storeName}}</span></a>
  		{{if showCart && ($value.showCartButton || $value.showCart)}}
  			<span class="good-detail-icon add-cart-button sure" _skuId="{{$value.skuId}}" _orgCode="{{$value.orgCode || $value.venderId}}" _storeId="{{$value.storeId}}" {{if cartDate}} onclick='lg("user_action","1.0",{"clickid":"{{cartDate}}",{{$getUserAction($value.userActionSku || $value.userAction)}}})'{{/if}} ></span>
  		{{/if}}
  		{{if showcartCount}}
  		 	<span class="good-number-incart {{if $value.incartCount == 0}} good-nonumber-incart{{/if}}">{{$goodNumInCart($value.incartCount)}}</span>
  		{{/if}}
  	 </li>
  {{/each}}
  </script>

  <!-- 医药列表模板 sort-goods-list-style-medicine-tpl-->
  <!--<script type="text/tpl" id="goods-list-medicine-tpl">
  {{each result}}
  	<li class="line-bottom good-item-medicine">
  	   	<a href="#goodsDetails/skuId:{{$value.skuId}}/storeId:{{$value.storeId}}/orgCode:{{$value.orgCode}}" {{if skuDate}} onclick='lg("user_action","1.0",{"clickid":"{{skuDate}}",{{$getUserAction($value.userActionSku || $value.userAction)}}})' {{/if}}>
             <img src="{{$value.imgUrl}}" class="goods-list-style-medicine-left" onerror='this.src="images/show_default.png"'>
              {{if $value.tags && $value.tags[0]}}<span class="promotion-tag promotion-tag-{{$value.tags[0].type}}"><i>{{$value.tags[0].iconText}}</i></span>{{/if}}
  	        <p class="goods-list-style-medicine-right">
  	        	<span class="medicine-name ">{{$value.skuName}}</span>
  	        	<i class="medicine-spec">{{if $value.catId=='5'}}适应症：{{$value.funcIndicatins}}{{/if}}</i>
  	        	<em>{{if $value.realTimePrice}}￥{{$value.realTimePrice}}{{else if $value.basicPrice}}￥{{$value.basicPrice}}{{else if $value.mkPrice}}￥{{$value.mkPrice}}{{else}}暂无报价{{/if}}</em>
  	        </p>
  	    </a>
  	   {{if showCart && ($value.showCartButton || $value.showCart)}}
  		    <div class="goods-shopping-cart-add" _skuId="{{$value.skuId}}" _storeId="{{$value.storeId}}" _orgCode="{{$value.orgCode}}" {{if cartDate}} onclick='lg("user_action","1.0",{"clickid":"{{cartDate}}",{{$getUserAction($value.userActionSku || $value.userAction)}}})' {{/if}}>
  		    	 加入购物车
  		    </div>
  	    {{else}}
  	       <a class="goods-shopping-cart-btn single-seckill-goods" href="#goodsDetails/skuId:{{$value.skuId}}/storeId:{{$value.storeId}}/orgCode:{{$value.orgCode}}">查看详情</a>
  	    {{/if}}


  	    {{if showcartCount }}
  		 	<span class="good-number-incart {{if $value.incartCount == 0}} good-nonumber-incart{{/if}}">{{$goodNumInCart($value.incartCount)}}</span>
  		{{/if}}
  	</li>
  {{/each}}-->
<!-- </template> -->
<template>
  <!--单品信息-->
   <div>
     <ul>
        <li v-for="image in goodsInfo.image">
            <img :src="image.big"/>
        </li>
     </ul>

     <strong v-if="goodsInfo.adword">{{goodsInfo.adword}}</strong>
     <strong v-if="goodsInfo.name">{{goodsInfo.name}}</strong>
   </div>

</template>
<style>

</style>
<script>
import Loader from '@/components/Loader'
export default {
  components: {
    Loader
  },
  created () {
    // 路由需要skuId, orgCode,longitude,latitude //  type: 2
    let skuId = this.$router.query.skuId || '2005249305'
    let storeId = this.$router.query.storeId || '11654584'
    let orgCode = this.$router.query.orgCode || '298470'
    this.$getAPI({
      functionId: 'product/detailV2_2',
      body: {
        skuId: skuId,
        storeId: storeId,
        orgCode: orgCode,
        buyNum: 1
      }
    }).then((response) => {
      window.console.log(response, this)
      if (response.body.code === 0) {
        this.goodsInfo = response.body.result
      }
    })
  },
  data: function () {
    return {
      goodsInfo: { }
    }
  }
}
</script>
