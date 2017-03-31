<template>
  <ul class="minicart-product-list">
    <slot></slot>
    <li
      v-for="item in skuList"
      :key="item.skuId"
      class="minicart-sku-item">
      <checkbox :disabled="item.skuState == 0"> </checkbox>
      <ProductItem :productItem="item"></ProductItem>
      <flex class="product-info">
        <div>{{item.skuName}}</div>
        <div v-if="item.tags.length">tag</div>
        <div>{{item.price}}</div>
      </flex>
      <input-number :min="1" :value="item.cartNum"></input-number>
    </li>
  </ul>
</template>

<script>
import ProductItem from './ProductItem'

export default {
  components: {
    ProductItem
  },
  props: {
    skuList: Array
  }
}
</script>

<style lang="scss">
  .minicart-product-list {
    background: #fbfbfb;

    .minicart-sku-item {
      padding: 0 10px;
      display: flex;
      align-items: center;
    }

    .product-info {
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
    }
  }
</style>
