<template>
  <badge  :content="productItem.cartNum" :show="isShowTip" theme="primary">
    <img :src="productItem.imageUrl">
    <span>¥{{productItem.price}}</span>
    <i v-if="showMore" class="iconfont icon-6"></i>
  </badge>
</template>

<script>
export default {
  props: {
    productItem: Object,
    showMore: Boolean
  },
  computed: {
    isShowTip () {
      return this.productItem.cartNum > 1
    }
  }
}
</script>

<style lang="scss">
</style>
