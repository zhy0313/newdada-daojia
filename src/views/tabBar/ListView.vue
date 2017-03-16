<template>
  <div class="">
    <Loader></Loader>
    <FooterNav :activeKey="1"></FooterNav>
  </div>
</template>

<script>
  import FooterNav from '@/components/FooterNav'
  import Loader from '@/components/Loader'

  export default {
    components: {
      FooterNav,
      Loader
    }
  }
</script>

<style lang="scss">
</style>
