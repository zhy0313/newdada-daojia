<template>
  <div class="cart-container">
    <CartLocation :location="location" :isCurrent="true"></CartLocation>
    <cell>门店标题<span slot="footer" class="text-primary">3</span></cell>
    <CartLocation location="其它位置" :isCurrent="false"></CartLocation>
    <!-- <Loader></Loader> -->
    <FooterNav :activeKey="2"></FooterNav>
  </div>

</template>

<script>
  import FooterNav from '@/components/FooterNav'
  import Loader from '@/components/Loader'
  import CartLocation from '@/components/CartLocation'

  export default {
    components: {
      FooterNav,
      Loader,
      CartLocation
    },
    data () {
      return {
        location: '八达岭站'
      }
    }
  }
</script>

<style lang="scss">
  .cart-container{
    // text-align: center;
  }
</style>
