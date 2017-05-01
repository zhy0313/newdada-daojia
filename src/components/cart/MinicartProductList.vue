<template>
  <ul :class="`minicart-product-list ${lineClass}`">
    <!-- 失效商品组控制栏 -->
    <li v-if="!justInvalid && productSuit.suitType == 'invalidate'">
      <MiniCartControlBar :isInvalid="true">
      </MiniCartControlBar>
    </li>
    <!-- 满减组标题栏 -->
    <li v-else-if="lineClass != ''" :class="`suit-tip ${productSuit.suitType}`">
      {{productSuit.suitDescrip.join('，')}}
    </li>
    <MiniCartProduct
    v-for="item in productSuit.skuList"
    :key="item.skuId"
    :productItem="item">
    </MiniCartProduct>
  </ul>
</template>

<script>
import MiniCartControlBar from './MiniCartControlBar'
import MiniCartProduct from './MiniCartProduct'

export default {
  components: {
    MiniCartControlBar,
    MiniCartProduct
  },
  props: {
    productSuit: Object,
    justInvalid: Boolean
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
      position: relative;
      padding: 15px 90px 9px 39px;
      min-height: 40px;
      line-height: 14px;
      font-size: 12px;
      color:#666;
      background-position: 7px 14px;
      background-size: 25px 20px;
      background-repeat: no-repeat;
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
  }
</style>
