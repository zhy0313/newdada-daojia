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
   <div class='sku-wrap'>
     <!--单品图片轮播-->
     <swipe :speed="1000">
      <swipe-item v-for="image in goodsInfo.image" >
           <img :src="image.big" class='sku-img'/>
      </swipe-item>
    </swipe>
     <!--商品信息-->
     <div class="sku-info-wrap">
       <!--单品名称-->
       <div v-if="goodsInfo.name" class="sku-name">{{goodsInfo.name}}</div>
       <!--广告语-->
       <div v-if="goodsInfo.adword" class="sku-adword">{{goodsInfo.adword}}</div>
       <!--秒杀商品展示秒杀倒计时-->
       <div v-if="goodsInfo.miaoshaInfo && goodsInfo.miaoshaInfo.miaoShaSate == 1" class="detail-miaosha-box">
         秒杀<em><i>{{remainTime.hh}}</i>:<i>{{remainTime.mm}}</i>:<i>{{remainTime.ss}}</i></em>结束
       </div>
       <!--价格信息-->
       <div class="sku-price-wrap">
         <span v-if='skuPriceVO.promotion === 0' class="sku-price">
           <span class="sku-basic-price">￥{{skuPriceVO.realTimePrice}}</span>
           <span class="sku-real-price">￥{{skuPriceVO.basicPrice}}</span>
         </span>
         <span v-else class="sku-basic-price">￥{{skuPriceVO.basicPrice}}</span>
         <btn theme='default' v-on:click="addGoods" class='addbtn'>加入购物车</btn>
       </div>
       <!--促销标信息-->
       <div class="detail-promotion-box" v-if="tags.length">
         <div class="detail-promotion-content">
           <ul class="tags-list-wrap">
             <li v-for="(tag,index) in tags" class="tags-list-item">
               <span v-if="index == 0" class="promotion-txt">促销</span>
               <span class="store-fujia-icon" v-bind:style="{backgroundColor: bgcolor[index]}">{{tag.iconText}}</span>
               <span class="store-fujia-desc">{{tag.words}}</span>
             </li>
           </ul>
         </div>
       </div>
     </div>
     <!--店铺信息-->
     <div v-if="storeInfo.storeId" class="sku-store-wrap">
       <div class="sku-store-content">
         <router-link to="/storeHome" class="fl store-wrap"> <icon name="store" size="lg" />{{storeInfo.storeName}}</router-link>
         <a :href="telphone" class="fr tel-wrap"> <icon name="phone" size="lg" />联系商家</a>
       </div>
     </div>
     <!--商品评价-->
     <div v-if="goodsInfo.productComment" class="detail-comment-box">
       <span class="fl">商品评价</span>
       <span class="fr">暂无评价</span>
     </div>
     <!--推荐商品-->
     <swipe :speed="1000">
       <swipe-item v-for="item in recommendSkuVOList" >
         <div v-for="skuitem in item.data">
           <router-link to="goodsDetail/skuitem.skuId/skuitem.storeId/skuitem.orgCode">
             <img :src="skuitem.imgUrl"/>
             <span>{{skuitem.skuName}}</span>
             <span>
               <span>${{skuitem.realTimePrice}}</span>
               <span>add</span>
             </span>
           </router-link>
         </div>
       </swipe-item>
     </swipe>
     <!-- 购物车-->
     <MiniCart :isOpenCart="isOpenCart"></MiniCart>
   </div>

</template>
<style>
.sku-wrap {
  background-color: #f4f4f4;
  padding-bottom: 60px;
}
.sku-img {
  width:100%;
}
.swipe {
  position: relative;
  width: 100%;
  height: 320px;/*图片不下发尺寸会变形*/
}
.sku-info-wrap {
  margin-top: 10px;
  background-color: #FFF;
  /*background: linear-gradient(left , #ffffff 0%, #d4d3d3 49%,#d4d3d3 50%,#ffffff 100%);*/
  /*background: -webkit-gradient(linear, left, color-stop(0%,#ffffff), color-stop(49%,#d4d3d3), color-stop(50%,#d4d3d3), color-stop(100%,#ffffff));*/
  /*background: -webkit-linear-gradient(left, #ffffff 0%,#d4d3d3 49%,#d4d3d3 50%,#ffffff 100%);*/
  /*background: -moz-linear-gradient(left , #ffffff 0%,#d4d3d3 49%,#d4d3d3 50%,#ffffff 100%);*/
  /*background: -ms-linear-gradient(left, #ffffff 0%,#d4d3d3 49%,#d4d3d3 50%,#ffffff 100%);*/
  box-shadow: inset 0px 8px 5px rgba(255, 255, 255, 0.8);
}
.sku-name {
  text-align: center;
  font-size: 16px;
  padding: 10px 20px 0;
  margin-bottom: 2px;
  color: #333;
  line-height: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 44px;
  -webkit-line-clamp: 2;
  -ms-line-clamp: 2;
  -moz-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  -ms-box-orient: vertical;
  -moz-box-orient: vertical;
  box-orient: vertical;
  display: -webkit-box;
  display: -ms-box;
  display: -moz-box;
  display: box;
}
.sku-adword {
  text-align: center;
  padding: 0 20px 5px;
  background: #fff;
  color: #999999;
  font-size: 13px;
  line-height: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 44px;
  -webkit-line-clamp: 2;
  -ms-line-clamp: 2;
  -moz-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  -ms-box-orient: vertical;
  -moz-box-orient: vertical;
  box-orient: vertical;
  display: -webkit-box;
  display: -ms-box;
  display: -moz-box;
  display: box;
}
.sku-price-wrap {
  height: 49px;
  line-height: 49px;
  position: relative;
  overflow: hidden;
}
.sku-basic-price {
  display: inline-block;
  font-size: 30px;
  color: #ff3434;
  margin-right: 5px;
}
.sku-real-price {
  display: inline-block;
  font-size: 14px;
  color: #acacac;
  margin-right: 10px;
  text-decoration: line-through;
}
.sku-price {
  display: inline-block;
}
.addbtn {
  float: right;
  margin-top: 6px;
  background-color: #47b34f;
  height: 35px;
  color: #FFFFFF;
}
.detail-promotion-box {
  background: #fff;
  padding: 0 0 0 10px;
  font-size: 12px;
  color: #333333;
}
.detail-promotion-content {
  border-top: 1px solid #e8e8e8;
}
.store-fujia-icon {
  display: inline-block;
  padding: 0 2px;
  margin-right: 4px;
  border-radius: 2px;
  color: #ffffff;
  height: 16px;
  line-height: 16px;
}
.tags-list-wrap {
  padding-top: 6px;
  padding-left: 30px;
  overflow: hidden;
}
.promotion-txt {
  position: absolute;
  left: -30px;
  color: #999999;
}
.tags-list-item {
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
  border-bottom: 1px solid #e8e8e8;
  margin-top: -1px;
}
.sku-store-wrap {
  margin-top: 10px;
  background-color: #FFFFFF;
  color: #333;
  padding: 0 10px;
  line-height: 50px;
  overflow: hidden;
}
.sku-store-content {
  overflow: hidden;
  border-bottom: 1px solid #e8e8e8;
}
.detail-comment-box {
  color: #333;
  padding: 0 10px;
  line-height: 50px;
  overflow: hidden;
  background-color: #FFFFFF;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.tel-wrap {
  width: 35%;
}
.store-wrap {
  width: 65%;
}
.icon {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.icon-store {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsCAYAAADtt+XCAAAAGXRFW…QQCgghhBAKCCGEEAoIIYQQQgEhhBBCASGEEOJa/l+AAQDXTww0TkpVOQAAAABJRU5ErkJggg==) no-repeat;
  background-position: -44px 4px;
  background-size: 200px 150px;
}
.icon-phone {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsCAYAAADtt+XCAAAAGXRFW…QQCgghhBAKCCGEEAoIIYQQQgEhhBBCASGEEOJa/l+AAQDXTww0TkpVOQAAAABJRU5ErkJggg==) no-repeat;
  background-position: -22px 4px;
  background-size: 200px 150px;
}
.detail-miaosha-box {
  background-color: #ffeaea;
  height: 36px;
  line-height: 36px;
  text-align: center;
  margin-top: 5px;
  color: #ff3434;
  font-size: 13px;
}
</style>
<script>
import Loader from '@/components/Loader'
import MiniCart from '@/components/cart/MiniCart'

// import Swipe from '@/assets/scripts/components/Swipe'
// import SwipeItem from '@/assets/scripts/components/SwipeItem'
// import addButton from '@/assets/scripts/components/Button'
export default {
  components: {
    Loader,
    MiniCart
    // Swipe,
    // SwipeItem,
    // addButton
  },
  created () {
    // 路由需要skuId, orgCode,longitude,latitude //  type: 2
    let skuId = this.$route.params.skuid
    let storeId = this.$route.params.storeid
    let orgCode = this.$route.params.orgcode
    let vm = this
    this.$getAPI({
      functionId: 'product/detailV2_2',
      body: {
        skuId: skuId,
        storeId: storeId,
        orgCode: orgCode,
        buyNum: 1
      }
    }).then((response) => {
      if (response.body.code === '0') {
        vm.goodsInfo = response.body.result
        vm.skuPriceVO = vm.goodsInfo.skuPriceVO
        vm.tags = vm.goodsInfo.tags
        vm.storeInfo = vm.goodsInfo.storeInfo
        vm.miaoShatime = vm.goodsInfo.miaoshaInfo && vm.goodsInfo.miaoshaInfo.miaoShaSate === 1 && vm.goodsInfo.miaoshaInfo.miaoshaRemainTime
        let length = vm.tags.length
        // 促销标标语替换###
        if (length) {
          for (var i = 0; i < length; i++) {
            vm.tags[i].words = vm.tags[i].words.replace(/###/gi, '，')
          }
        }
      }
    }, (error) => {
      vm.$toast({message: error.msg || '网络繁忙啦', position: 'center', type: 'error'})
    })
  },
  mounted () {
    let skuId = this.$route.params.skuid
    let storeId = this.$route.params.storeid
    let vm = this
    this.$getAPI({
      functionId: 'productsearch/getTwoDimensionsRecommendSkusNew',
      body: {
        storeId: storeId,
        skuId: skuId
      }
    }).then((response) => {
      if (response.body.code === '0') {
        let result = response.body.result
        let targerArray = result.dimensionsResultVOList[0].recommendSkuVOList
        vm.recommendname = result.dimensionsResultVOList[0].dimensionName
        var length = targerArray.length
        var pageNumber = Math.ceil(length / 6)
        var newResult = []
        for (var i = 0; i < pageNumber; i++) {
          var temp = {}
          if (i === (pageNumber - 1)) {
            temp['data'] = targerArray.slice(i * 6, length)
          } else {
            temp['data'] = targerArray.slice(6 * i, 6 * (i + 1))
          }
          newResult.push(temp)
        }
        vm.recommendSkuVOList = newResult
      }
    }, (error) => {
      vm.$toast({message: error.msg || '网络繁忙啦', position: 'center', type: 'error'})
    })
  },
  data () {
    return {
      goodsInfo: { },
      skuPriceVO: { },
      tags: [ ],
      storeInfo: { },
      miaoShatime: ' ',
      isOpenCart: false,
      recommendSkuVOList: [],
      recommendname: ''
    }
  },
  methods: {
    addGoods: function () {
      this.$toast({message: '加购物车'})
    },
    parseInt10: function (a) {
      return parseInt(a, 10)
    },
    checkTime: function (i) {
      i = parseInt(i)
      if (i < 10) {
        i = '0' + i
      }
      return i
    },
    houMinSec: function (timeLeft) {
      var ss = parseInt(timeLeft % (60))
      var hh = parseInt(timeLeft / (60 * 60))
      var mm = parseInt((timeLeft - hh * 60 * 60) / 60)
      var time = {
        hh: this.checkTime(hh),
        mm: this.checkTime(mm),
        ss: this.checkTime(ss)
      }
      return time
    },
    miaoshaCountDonw: function () {
      let vm = this
      let leftTime = parseInt(this.remainTime)
      vm.countTimeInterval = setInterval(function () {
        if (leftTime === 0) { // 这里就是时间到了之后应该执行的动作了
          clearInterval(vm.countTimeInterval)
          return
        }
        let timeChange = parseInt(1)
        leftTime = leftTime - timeChange
        if (leftTime < 0) {
          clearInterval(vm.countTimeInterval)
          leftTime = 0
        }
        vm.remainTime = this.houMinSec(leftTime)
      }, 1000)
    }
  },
  computed: {
    telphone () {
      if (this.storeInfo.venderPhone) {
        return 'tel:' + this.storeInfo.venderPhone
      }
    },
    bgcolor () {
      let length = this.tags.length
      let tagArray = []
      for (let j = 0; j < length; j++) {
        let temp = '#' + this.tags[j].colorCode
        tagArray.push(temp)
      }
      return tagArray
    },
    remainTime () {
      if (this.miaoShatime) {
        let result = { }
        let leftTime = this.parseInt10(this.miaoShatime / 1000)
        // 开始倒计时
        let ss = parseInt(leftTime % (60))
        let hh = parseInt(leftTime / (60 * 60))
        let mm = parseInt((leftTime - hh * 60 * 60) / 60)
        result = {
          hh: this.checkTime(hh),
          mm: this.checkTime(mm),
          ss: this.checkTime(ss)
        }
//        this.miaoshaCountDonw()
        return result
      }
    }
  }
}
</script>
