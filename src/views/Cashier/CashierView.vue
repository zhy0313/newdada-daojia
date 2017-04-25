<template lang="html">
  <div class="pay-container">
    <div class="pay-header">
      <div class="pay-time">
        <p>支付剩余时间</p>
        <h1><countDown :endTime='countDownTime'></countDown></h1>
      </div>
      <div class="pay-store-amount">
        <span class="pay-station">{{stationName}}</span><span class="pay-amount">¥{{amount}}</span>
      </div>
      <p class="pay-store-amount-bottom"></p>
    </div>
    <div class="pay-type">
      <p class="pay-title">请选择支付方式</p>
      <ul>
        <template v-for="(item, index) in payWays">
          <li :class="item.payWay == 10 ? 'wx' : item.payWay == 20 ? 'jd' : item.payWay == 70 ? 'dai' :''">
            <p class="pay-name">{{item.payName}}<span v-show="item.extCopy">({{item.extCopy}})</span></p>
            <p class="pay-default-desc">{{item.defaultCopy}}</p>
            <i :class="index == checkedIndex ? 'checked' : ''" @click="changePayType" :data-index="index" :data-payType="item.payWay == 10 ? 'wx' : item.payWay == 20 ? 'jd' : item.payWay == 70 ? 'dai' :''"></i>
          </li>
      </template>
      </ul>
    </div>
    <p class="pay-hb">马上支付 ，可领取分享红包</p>
    <a href="javascript:;" class="btn-pay" @click="toPay">确认支付<em>¥</em><span>{{amount}}</span></a>
  </div>
</template>

<script>
import countDown from '../../components/countDown'
// let pay = {'code': '0','msg':'成功','result':{'orderId':705835766000014,'amount':24.20,'notifyUrl':'http://testpdjm.jd.com/html/index.html#orderopresult/result:success/payType:pay/orderId:705835766000014','payWays':[{'payWay':'10','payName':'微信支付','status':'0','defaultCopy':'推荐安装微信5.0及以上版本使用','iconUrl':'http://storage.jd.com/daojia/wxpay-icon.png'},{'payWay':'20','payName':'京东支付','status':'0','defaultCopy':'京东旗下 快捷支付','extCopy':'本订单支持使用白条','iconUrl':'http://storage.jd.com/daojia/icon-jdpay.png','activityCopy':'京东支付首单满29最高减10（限实物类银行卡支付）'}],'countDownTime':'1798475','stationName':'华冠-亦庄店','prescriptionTag':false},'success':true};
export default {
  data () {
    return {
      token: '',
      payWays: [],
      stationName: '',
      payType: 'wx',
      amount: '0.0',
      countDownTime: '',
      checkedIndex: 0
    }
  },
  created () {
    this.token = this.$route.query.token || 's6MPyAYZ192mQWqRVsp0JVvwRBWKH+By4o2IRxR/aQZTT7D4BYQjFfV31jetkb0I2eM8T+c0JP3bSN+r9EgqWM2faJ12OD59CQsisktd5YffZR4s/IjnryOiftH+YIYXo+F7P4Rd61OwFWhTgKt51VOJBP0Wrj8KaITFtaU/3Ww='
    this.initCashier()
  },
  components: {
    countDown
  },
  methods: {
    changePayType: function (e) {
      this.checkedIndex = e.target.dataset.index
      this.payType = e.target.dataset.paytype
    },
    initCashier: function () {
      this.$postAPI({
        functionId: 'cashier/initCashierPageInfo',
        body: {
          'token': this.token
        }
      }).then((response) => {
        console.log(response)
        this.getPayStatus()
        let result = response.body.result
        // let result = {'orderId': 705835766000014, 'amount': 24.20, 'notifyUrl': 'http://testpdjm.jd.com/html/index.html#orderopresult/result:success/payType:pay/orderId:705835766000014', 'payWays': [{'payWay': '10', 'payName': '微信支付', 'status': '0', 'defaultCopy': '推荐安装微信5.0及以上版本使用', 'iconUrl': 'http://storage.jd.com/daojia/wxpay-icon.png'}, {'payWay': '20', 'payName': '京东支付', 'status': '0', 'defaultCopy': '京东旗下 快捷支付', 'extCopy': '本订单支持使用白条', 'iconUrl': 'http://storage.jd.com/daojia/icon-jdpay.png', 'activityCopy': '京东支付首单满29最高减10（限实物类银行卡支付）'}], 'countDownTime': '1798475', 'stationName': '华冠-亦庄店', 'prescriptionTag': false}
        this.payWays = result.payWays
        this.stationName = result.stationName
        this.amount = result.amount
        this.countDownTime = result.countDownTime
      }, (err) => {
        console.log('err', err)
      })
    },
    getPayStatus: function () {
      this.$postAPI({
        functionId: 'cashier/getPayRecordStatus',
        body: {
          'token': this.token
        }
      }).then((response) => {
        console.log(response)
      }, (err) => {
        console.log('err', err)
      })
    },
    toPay: function () {
      if (this.payType === 'wx') {
        this.$toast({message: '微信支付'})
      } else if (this.payType === 'jd') {
        this.$toast({message: '京东支付'})
      }
    }
  }
}
</script>

<style lang="scss">@import "./style.scss";</style>
