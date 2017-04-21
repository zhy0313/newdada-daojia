<!-- 门店优惠券 -->
<template>
  <ul class="coupon-wrap-list">
    <li :class="item.soldOut ? 'coupon-none' : ( item.isGain ? 'coupon-full' : '')" @click="storeCouponReceive(index,$event)" v-for="(item,index) in couponsArr">
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
          <div class="coupon-get-btn" v-show="!item.soldOut && item.isGain">已领取</div>
          <div class="coupon-get-btn" v-show="!item.soldOut && !item.isGain">领取</div>
          <div class="coupon-get-btn" v-show="item.soldOut">已抢光</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        couponsArr: [] // 优惠券信息
      }
    },
    created () {
      //  "soldOut": true 是否抢光  "isSelected": 1展示到门店列表，0只展示门店背景 "isGain": 是否已经领取
      this.couponsArr = [{
        'soldOut': true,
        'isSelected': 0,
        'isGain': false
      },
      {
        'soldOut': false,
        'isSelected': 1,
        'isGain': false
      },
      {
        'soldOut': false,
        'isSelected': 0,
        'isGain': true
      }]
    },
    mounted () {},
    methods: {
      storeCouponReceive (index, e) { // 优惠券领取
        e.stopPropagation()
        let obj = this.couponsArr[index]
        if (obj.soldOut) {
          return
        } else {
          let isGain = obj.isGain
          isGain ? '' : (this.couponsArr[index].isGain = true)
        }
        console.log(index)
      }
    }
  }
</script>
<style lang="scss">
  @import "./style.scss";
</style>
