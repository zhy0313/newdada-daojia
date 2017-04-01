<template>
  <ul class="minicart-product-list">
    <slot></slot>
    <li
      v-for="item in skuList"
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

export default {
  components: {
    ProductSingleItem
  },
  props: {
    skuList: Array
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/mixins";
  @import "../../assets/styles/variables";

  .minicart-product-list {
    background: #fbfbfb;

    .minicart-product-item {
      padding: 5px 10px;
      display: flex;
      align-items: center;
      position: relative;
      @include border-bottom();
    }

    .checkbox {
      height: 18px;
    }

    .minicart-product-operation {
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
</style>
