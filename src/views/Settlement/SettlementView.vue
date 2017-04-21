<template lang="html">
  <div class="settlement-container">
    <div class="settlement-address">
      <p class="account-name">测试    158****3483</p>
      <p class="account-address">拉萨市堆龙德庆县堆龙德庆区中学101</p>
      <i class="iconfont icon-FowordArrow"></i>
    </div>
    <div class="settlement-item deliverTime">
       送达时间<span>立即送达(预计10:45)<i class="iconfont icon-FowordArrow"></i></span>
    </div>
    <p class="settlement-line"></p>
    <div class="settlement-item payment">
      在线支付<span>微信/京东支付</span>
    </div>
    <div class="settlement-item coupon">
      优惠券<span>暂无可用优惠券<i class="iconfont icon-FowordArrow"></i></span>
    </div>
    <p class="settlement-line"></p>
    <div class="settlement-item remarks">
      备注<textarea type="text" name="blessing" placeholder=" 订单备注（30字以内）" maxlength="150"></textarea>
    </div>
    <div class="settlement-item store">
      味多美-回龙观东大街面包店
    </div>
    <div class="settlement-item goods">
        <ul>
          <li><img src="https://img30.360buyimg.com/n7/jfs/t3988/209/453257324/82186/f702e950/584fb2e8Na9456e25.jpg"></li>
          <li><img src="https://img30.360buyimg.com/n7/jfs/t3076/181/2998975681/158078/1661bcd8/57ea120cN2ce8e3c2.jpg"></li>
        </ul>
        <div>
          <span class="goods-count">共2件</span>
          <span class="goods-weight">0.13kg</span>
          <i class="iconfont icon-FowordArrow"></i>
        </div>
    </div>
    <div class="settlement-item price">
      <p><em>商品金额</em><em>¥21.5</em></p>
      <p><em>配送费</em><em>¥4.3</em></p>
    </div>
    <div class="settlement-item price">
      <p><em>应付¥25.8</em><em>实付¥25.8</em></p>
    </div>
    <p class="settlement-line"></p>
    <div class="settlement-bar">
      <span class="total-amount">应付<em>¥142.2</em></span>
      <a href="javascript:;" class="toSubmit" @click="toSubmit">提交订单</a>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.userLogin()
  },
  methods: {
    userLogin: function () {
      this.$getAPI({
        functionId: 'login/testLogin',
        body: {jdPin: 'cheung1984'}
      }).then((response) => {
        console.log(response)
      }, (err) => {
        console.log('err', err)
      })
    },
    toSubmit: function () {
      this.$router.push({path: 'cashier', query: {token: 's6MPyAYZ192mQWqRVsp0JVvwRBWKH+By4o2IRxR/aQZTT7D4BYQjFfV31jetkb0I2eM8T+c0JP3bSN+r9EgqWM2faJ12OD59CQsisktd5YffZR4s/IjnryOiftH+YIYXo+F7P4Rd61OwFWhTgKt51VOJBP0Wrj8KaITFtaU/3Ww='}})
    }
  }
}
</script>

<style lang="scss">@import "./style.scss";</style>
