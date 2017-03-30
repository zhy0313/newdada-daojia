<template>
  <ul class="minicart-product-list">
    <slot></slot>
    <li class="minicart-sku-item"><checkbox disabled> </checkbox>内容内容</li>
  </ul>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .minicart-product-list {
    background: #fbfbfb;

    .minicart-sku-item {
      padding: 0 10px;
    }
  }
</style>
