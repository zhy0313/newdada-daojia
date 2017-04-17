<template>
  <div class='store-title-box'>
    <ul class='store-top-wrap'>
        <li class='index-store-item' >
            <!--门店列表上部 start-->
            <a class='index-strore-list-main' node-type='index-gotoStore' orgCode='result.params.orgCode' storeId='result.params.storeId' skuId='result.params.skuId'>
              <div class='index-store-wrapImg'>
                  <img class='index-store-logo' src='result.imgUrl'/>
                  <!--门店列表头部左侧 start-->
                  <div class='index-store-title'>
                      <h2>{{result.name}}</h2>
                      <div class='index-star-wrap'>
                          <p v-if='result.carrierNo==="9966"' class='index-dada'>达达专送</p>
                          <p v-if='result.deliveryFirst' class='index-store-list-descrip-minute'>{{result.deliveryFirst}}</p>
                     </div>
                      <!-- star -->
                      <!-- <p class='index-icon-star-list'>
                          {{$storeStarFraction(result.storeStar)}}
                      </p> -->
                      <!-- 销量start-->
                      <!-- <p class='index-store-list-sale'>
                          {{ if result.inSale && result.monthSale}} | {{result.monthSale}}{{/if}}
                      </p> -->
                      <!-- 销量end-->
                      <span class='go-to-store-icon'>进店逛逛</span>
                  </div>
              </div>
            </a>
        </li>

    </ul>
    <div class='activity-border'><i class='left'></i><i class='center'></i><i class='right'></i></div>
</div>
</template>
<script>
export default {
  props: {
    result: Array
  }
}
</script>
