<template>
  <a href=''>
   <span v-if='valueV.skuInfo.tags && valueV.skuInfo.tags[0]'><i>{{valueV.skuInfo.tags[0].iconText}}</i></span>
      <img :src='valueV.skuInfo.imgUrl'/>
      <span class='two-column-intro' >
          <span class='activity-goods-name'>{{valueV.skuInfo.skuName}}</span>
          <span v-if='!actStoreGoods' class='activity-goods-price'>
            <em class='fuhao'>￥</em><em class='yuanjia'>{{valueV.skuInfo.realTimePrice}}</em>
              <i v-if='valueV.skuInfo.basicPrice && valueV.skuInfo.basicPrice!=valueV.skuInfo.realTimePrice' class='activity-goods-origin-price'>￥{{valueV.skuInfo.basicPrice}}</i>
          </span>
          <span v-else class='activity-goods-price'>
              <em class='fuhao'>￥</em><em class='yuanjia'>{{valueV.skuInfo.realTimePrice}}</em>
          </span>
      </span>
  </a>
</template>
<script>
export default {
  props: {
    valueV: Object,
    v: Object,
    actStoreGoods: Boolean
  }
}
</script>
