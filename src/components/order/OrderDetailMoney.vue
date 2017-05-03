<template>
  <div>
    <MoneyInfo
      v-if="orderInfo.priceInfoList"
      :moneyInfoList='orderInfo.priceInfoList'></MoneyInfo>
    <MoneyInfo
      v-if="orderInfo.promotionInfoList"
      :moneyInfoList='orderInfo.promotionInfoList'></MoneyInfo>
    金额信息</div>
</template>

<script>
  import MoneyInfo from './MoneyInfo'

  export default {
    props: {
      orderInfo: {}
    },
    components: {
      MoneyInfo
    }
  }
</script>

<style lang="scss">
</style>
