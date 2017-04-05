<template>
  <ul :class="`minicart-product-list ${lineClass}`">
    <!-- 失效商品组控制栏 -->
    <li v-if="!justInvalid && productSuit.suitType == 'invalidate'">
      <MiniCarControlBar :isInvalid="true">
      </MiniCarControlBar>
    </li>
    <!-- 满减组标题栏 -->
    <li v-else-if="lineClass != ''" :class="`suit-tip ${productSuit.suitType}`">
      <!-- <div class="suit-name">{{productSuit.suitName}}</div> -->
      {{productSuit.suitDescrip.join('，')}}
    </li>
    <li
      v-for="item in productSuit.skuList"
      :key="item.skuId"
      class="minicart-product-item">
      <checkbox :disabled="item.skuState == 0" :value="item.checkType == 1"> </checkbox>
      <ProductSingleItem :productItem="item"></ProductSingleItem>

      <input-number class="minicart-product-operation" :min="1" :value="item.cartNum"></input-number>
    </li>
  </ul>
</template>

<script>
import ProductSingleItem from './ProductSingleItem'
import MiniCarControlBar from './MiniCartControlBar'

export default {
  components: {
    MiniCarControlBar,
    ProductSingleItem
  },
  props: {
    productSuit: Object,
    justInvalid: Boolean
    // skuList: Array,
    // className: String
  },
  computed: {
    lineClass () {
      let suitType = this.productSuit.suitType
      return suitType === 'suit' || suitType === 'gift' || suitType === 'exchange' ? 'line' : ''
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/mixins";
  @import "../../assets/styles/variables";

  .minicart-product-list {
    background: #fbfbfb;
    position: relative;

    &.line::before {
      position: absolute;
      border-left: 1px dotted #bbb;
      content: "";
      top: 20px;
      bottom: 40px;
      left: 19px;
    }

    .suit-tip {
      position:relative;
      padding:15px 90px 9px 39px;
      min-height:40px;
      line-height:14px;
      font-size:12px; color:#666;
      background-position:7px 14px;
      background-size:25px 20px;
      background-repeat:no-repeat;
      border-bottom:1px solid #e8e8e8;
    }

    .suit-tip.exchange {
      display:block;
      background-image: url(https://static-o2o.360buyimg.com/daojia/new/images/minicart/huangou.png);
    }

    .suit-tip.suit {
      display:block;
      background-image: url(https://static-o2o.360buyimg.com/daojia/new/images/minicart/manjian.png);
    }

    .suit-tip.gift {
      display:block;
      background-image: url(https://static-o2o.360buyimg.com/daojia/new/images/minicart/manzeng.png);
    }

    .minicart-product-item {
      padding: 5px 10px 5px 40px;
      position: relative;
      @include border-bottom();
    }

    .checkbox {
      position: absolute;
      display: inline-block;
      top: 50%;
      left: 0;
      padding: 11px;
      transform: translateY(-50%);
    }

    .minicart-product-operation {
      position: absolute;
      right: 10px;
      bottom: 10px;
      word-spacing: -4px;
    }
  }
</style>
