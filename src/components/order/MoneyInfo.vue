<template>
  <ul class="money-info-container">
    <li v-for="item in moneyInfoList" >{{item.value}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    moneyInfoList: Array
  }
}
</script>

<style lang="css">
</style>
