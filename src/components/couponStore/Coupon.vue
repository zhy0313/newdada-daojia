<!-- 门店优惠券 -->
<template>
  <ul class="coupon-wrap-list" v-if="isStoreList">
    <li :class="item.soldOut ? 'coupon-none' : ( item.isGain ? 'coupon-full' : '')" @click="storeCouponReceive(index,$event)" v-for="(item,index) in couponsArr" v-if="item.isSelected == 1">
      <List couponObj="item"></List>
    </li>
  </ul>
  <ul class="coupon-wrap-list" v-else>
    <li :class="item.soldOut ? 'coupon-none' : ( item.isGain ? 'coupon-full' : '')" @click="storeCouponReceive(index,$event)" v-for="(item,index) in couponsArr">
      <List couponObj="item"></List>
    </li>
  </ul>
</template>

<script>
  import List from './List'
  export default {
    data () {
      return {
        couponsArr: [] // 优惠券信息
      }
    },
    components: {
      List
    },
    props: {
      isStoreList: {
        type: Boolean,
        default: false
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
          // 门店优惠券和门店列表优惠券同时执行
          let $child = this.$parent.$refs
          const setCouponProp = () => {
            if ($child.storeCoupon) {
              this.$set($child.storeCoupon.couponsArr[index], 'isGain', true)
            }
            if ($child.storeListCoupon) {
              this.$set($child.storeListCoupon.couponsArr[index], 'isGain', true)
            }
          }
          isGain ? '' : setCouponProp()
        }
        // console.log(this.$parent.$refs)
      }
    }
  }
</script>
<style lang="scss">
  @import "./style.scss";
</style>
