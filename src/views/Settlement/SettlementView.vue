<template lang="html">
  <div class="settlement-container">
    <template v-for="item in modules">
      <div class="settlement-address" v-if="item.moduleKey == 'receiptAddress' && item.show">
        <p class="account-name">测试    158****3483</p>
        <p class="account-address">拉萨市堆龙德庆县堆龙德庆区中学101</p>
        <i class="iconfont icon-FowordArrow"></i>
      </div>
      <div class="settlement-item deliverTime" v-if="item.moduleKey == 'deliverTime'">
         {{item.title}}<span>{{item.data.nonPushTimeText}}<i class="iconfont icon-FowordArrow"></i></span>
      </div>
      <!-- <p class="settlement-line"></p> -->
      <div class="settlement-item payment" v-if="item.moduleKey == 'payMethod'">
        {{item.title}}<span>微信/京东支付</span>
      </div>
      <div class="settlement-item coupon" v-if="item.moduleKey == 'conponInfo'">
        {{item.title}}<span>暂无可用优惠券<i class="iconfont icon-FowordArrow"></i></span>
      </div>
      <!-- <p class="settlement-line"></p> -->
      <div class="settlement-item remarks" v-if="item.moduleKey == 'orderMark'">
        备注<textarea type="text" name="blessing" placeholder=" 订单备注（30字以内）" maxlength="150"></textarea>
      </div>
      <div class="settlement-item store" v-if="item.moduleKey == 'productInfo'">
        味多美-回龙观东大街面包店
      </div>
      <div class="settlement-item goods" v-if="item.moduleKey == 'productInfo'">
          <ul>
            <li><img src="https://img30.360buyimg.com/n7/jfs/t3988/209/453257324/82186/f702e950/584fb2e8Na9456e25.jpg"></li>
            <li><img src="https://img30.360buyimg.com/n7/jfs/t3076/181/2998975681/158078/1661bcd8/57ea120cN2ce8e3c2.jpg"></li>
          </ul>
          <div>
            <span class="goods-count">共2件</span>
            <span class="goods-weight">{{totalWeight}}kg</span>
            <i class="iconfont icon-FowordArrow"></i>
          </div>
      </div>
      <div class="settlement-item price" v-if="item.moduleKey == 'moneyInfo'">
        <p><em>商品金额</em><em>¥21.5</em></p>
        <p><em>配送费</em><em>¥4.3</em></p>
      </div>
      <div class="settlement-item price" v-if="item.moduleKey == 'moneyInfo'">
        <p><em>应付¥25.8</em><em>实付¥25.8</em></p>
      </div>
      <!-- <p class="settlement-line"></p> -->
      <div class="settlement-bar" v-if="item.moduleKey == 'submitInfo'">
        <span class="total-amount">应付<em>{{totalMoney}}</em></span>
        <a href="javascript:;" class="toSubmit" @click="toSubmit">{{item.title}}</a>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      totalMoney: '0.00',
      totalWeight: '0',
      modules: []
    }
  },
  created () {
    this.userLogin()
    this.initSettlement()
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
    initSettlement: function () {
      this.$getAPI({
        functionId: 'marketsettle/getCurrentAccount',
        body: {
          orderPayType: 'first',
          fromSource: 2,
          jingBeansNum: 0,
          source: 2,
          channelType: '0',
          orgCode: '71598',
          storeId: '10050212',
          storeName: '商家中心1号测试门店',
          openJPIndustry: '21',
          addressType: false,
          cityCode: 1,
          longitude: 116.50628,
          latitude: 39.79311,
          addressId: 8185
        }
      }).then((response) => {
        console.log(response)
        let result = response.body.result
        this.totalMoney = result.totalMoney
        this.totalWeight = result.totalWeight
        this.modules = result.modules
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
