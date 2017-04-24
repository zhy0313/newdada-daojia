<template>
  <li class="minicart-product-item">
    <checkbox :disabled="productItem.skuState == 0" :value="productItem.checkType == 1"> </checkbox>
    <ProductSingleItem :productItem="productItem"></ProductSingleItem>

    <input-number
    :disabled="productItem.skuState == 0"
    class="minicart-product-operation"
    :min="1"
    @change="changeHandle"
    :value="productItem.cartNum"></input-number>
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductSingleItem from './ProductSingleItem'

export default {
  components: {
    ProductSingleItem
  },
  props: {
    productItem: Object
  },
  computed: {
    ...mapGetters(['currentStore'])
  },
  methods: {
    ...mapActions([
      'changeItemNum'
    ]),
    changeHandle (value) {
      let cartParams = this.currentStore
      cartParams.skus = [{
        id: this.productItem.skuId,
        num: value
      }]
      cartParams.chgNumReturnType = 0
      cartParams.isAdd = value > this.productItem.cartNum
      console.log(value, cartParams)
      // this.changeItemNum(cartParams)
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/mixins";
  @import "../../assets/styles/variables";

  .minicart-product-item {
    padding: 5px 10px 5px 40px;
    position: relative;
    @include border-bottom();

    .minicart-product-operation {
      position: absolute;
      right: 10px;
      bottom: 10px;
      word-spacing: -4px;
    }

    .checkbox {
      position: absolute;
      display: inline-block;
      top: 50%;
      left: 0;
      padding: 11px;
      transform: translateY(-50%);
    }
  }
</style>
