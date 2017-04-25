<!-- 门店优惠券li -->
<template>
  <div class="coupon-wrap">
      <!--券的面值-->
      <div class="coupon-left">
        <var class="coupon-num">8.3</var>
        <span class="conpon-unit">折</span>
      </div>
      <!--券的标题，信息-->
      <div class="coupon-title-wrap">
        <div class="coupon-title">
          <div class="coupon-h2-wrap">
            <h2>
              <var class="discount-txt">折扣券</var>
              <var class="discount-txt">满5-100元享折扣</var>
            </h2>
            <div class="discount-date">2017.03.21-2017.04.08</div>
          </div>
        </div>
      </div>
      <!--领券的按钮-->
      <div class="coupon-right">
        <div class="coupon-right-box">
          <div class="coupon-get-btn" v-show="!couponObj.soldOut && couponObj.isGain">已领取</div>
          <div class="coupon-get-btn" v-show="!couponObj.soldOut && !couponObj.isGain">领取</div>
          <div class="coupon-get-btn" v-show="couponObj.soldOut">已抢光</div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: {
      couponObj: ''
    },
    created () {},
    mounted () {},
    methods: {}
  }
</script>
