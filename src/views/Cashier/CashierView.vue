<template lang="html">
  <div class="pay-wrapper">
      <div class="pay-header">
          <div class="pay-last-time-wrapper border-l border-r">
              <span class="last-time-title">剩余支付时间</span><span class="pay-last-time"><countDown :countDownTime="countDownTime"></countDown></span>
          </div>
          <div class="pay-store">
              <i class="store-top-bg"></i>
              <i class="store-left-bg"></i>
              <i class="store-right-bg"></i>
              <i class="store-bottom-bg"></i>
              <span class="store-name">{{stationName}}</span>
              <span class="store-account">￥<i>{{amount}}</i></span>
          </div>
      </div>
      <p class="pay-title border-b">请选择支付方式</p>
      <ul>
        <template v-for="(item, index) in payWays">
          <li :class="item.payWay == 10 ? 'wx' : item.payWay == 20 ? 'jd' : item.payWay == 30 ? 'bt' : item.payWay == 31 ? 'nbt' : item.payWay == 40 ? 'zfb' : item.payWay == 70 ? 'dai' :''" class="border-b">
            <p class="pay-type">{{item.payName}}<span v-show="item.extCopy">({{item.extCopy}})</span></p>
            <p class="pay-desc">{{item.defaultCopy}}</p>
            <p class="pay-desc" :class="item.activityCopy ? 'actvity-desc' : ''">{{item.activityCopy}}</p>
            <i :class="payCheckedClass" @click="changePayType"></i>
          </li>
      </template>
      </ul>
      <p class="dj-pay-desc"><span>马上支付，可领取分享红包。</span></p>
      <p class="pay-button">
          <button isSending="no">确认支付<i>￥</i><em>{{amount}}</em></button>
      </p>
      <p class="pay-button-confirm none">
          <button class="finish">已完成支付</button>
          <span></span>
          <button class="refresh" isSending="no">重新支付</button>
      </p>
  </div>
  <!-- <div class="daipay-masker">
      <img src="http://teststatic.jd.com/daojia/new/images/pay/share_guide.png" class="daipay-share-guide"/>
      <img src="http://teststatic.jd.com/daojia/new/images/pay/btn_know.png" class="daipay-share-know"/>
  </div> -->
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
      payType: '',
      amount: '0.0',
      countDownTime: '1798475',
      payCheckedClass: ''
    }
  },
  created () {
    this.token = this.$route.query.token || 'N4Rm2EgrNoTbGgAOi/9pbw5xECE/X9bOwPI5vJ/JI9+UDeyMr0S2r9OebciNTP9e8yxfpNI11SBK2mWY42By/+PaXNqnZXOUrhpxO3/gfXP5p6mml7JZqIFL22nCtAbnUj2WG2rWkNkfJPFuuUr+OF++jwNAyKxUdtSPHhuiLwg='
    this.userLogin()
    this.initCashier()
  },
  components: {
    countDown
  },
  methods: {
    changePayType: function () {
      this.payCheckedClass = 'checked'
    },
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
    initCashier: function () {
      this.$postAPI({
        functionId: 'cashier/initCashierPageInfo',
        body: {
          'token': this.token
        }
      }).then((response) => {
        console.log(response)
        this.getPayStatus()
        // let result = response.body.result
        let result = {'orderId': 705835766000014, 'amount': 24.20, 'notifyUrl': 'http://testpdjm.jd.com/html/index.html#orderopresult/result:success/payType:pay/orderId:705835766000014', 'payWays': [{'payWay': '10', 'payName': '微信支付', 'status': '0', 'defaultCopy': '推荐安装微信5.0及以上版本使用', 'iconUrl': 'http://storage.jd.com/daojia/wxpay-icon.png'}, {'payWay': '20', 'payName': '京东支付', 'status': '0', 'defaultCopy': '京东旗下 快捷支付', 'extCopy': '本订单支持使用白条', 'iconUrl': 'http://storage.jd.com/daojia/icon-jdpay.png', 'activityCopy': '京东支付首单满29最高减10（限实物类银行卡支付）'}], 'countDownTime': '1798475', 'stationName': '华冠-亦庄店', 'prescriptionTag': false}
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
    }
  }
}
</script>

<style lang="scss">@import "./style.scss";</style>
