<template>
  <div class="order-detail-product">
    <cell v-if="orderInfo.storeName"
      to="/"
      :hasArrow="true">{{orderInfo.storeName}}</cell>
  </div>
</template>

<script>
export default {
  props: {
    orderInfo: {}
  }
}
</script>

<style lang="scss">
</style>
