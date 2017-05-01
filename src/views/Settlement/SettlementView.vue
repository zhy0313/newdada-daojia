<template lang="html">
  <div class="settlement-container">
    <template v-for="item in modules">
      <div class="settlement-address" v-if="item.moduleKey == 'receiptAddress' && item.show">
        <div v-if="item.data.addressVo">
          <p class="account-name">{{item.data.addressVo.name}}    {{item.data.addressVo.phone}}</p>
          <p class="account-address">{{item.data.addressVo.addressName}}</p>
        </div>
        <div v-else class="address-select">
          <p>请选择收货地址</p>
        </div>
        <i class="iconfont icon-FowordArrow"></i>
      </div>
      <div class="settlement-item deliverTime" v-if="item.moduleKey == 'deliverTime' && item.show">
         {{item.title}}<span><router-link :to="{ name: 'deliverTime', params: { deliverTime: item.data }}">{{item.data.nonPushTimeText}}</router-link><i class="iconfont icon-FowordArrow"></i></span>
      </div>
      <div class="settlement-item bookInfo" v-if="item.moduleKey == 'bookInfo' && item.show">
         {{item.title}}<span>填写订购人昵称，电话等<i class="iconfont icon-FowordArrow"></i></span>
      </div>
      <div v-if="item.moduleKey == 'payMethod' && item.show">
        <p class="settlement-line"></p>
        <div class="settlement-item payMethod">
          {{item.title}}<span>{{item.data.paymentTextDTOList[0].payText}}</span>
        </div>
      </div>
      <div class="settlement-item conponInfo" v-if="item.moduleKey == 'conponInfo' && item.show">
        {{item.title}}<span>暂无可用优惠券<i class="iconfont icon-FowordArrow"></i></span>
      </div>
      <div v-if="item.moduleKey == 'orderMark' && item.show">
        <p class="settlement-line"></p>
        <div class="settlement-item orderMark" >
          备注<textarea type="text" name="blessing" :placeholder="item.defaultText" maxlength="150"></textarea>
        </div>
      </div>
      <div v-if="item.moduleKey == 'productInfo' && item.show">
        <p class="settlement-line"></p>
        <div class="settlement-item store">
          味多美-回龙观东大街面包店
        </div>
        <div class="settlement-item productInfo">
            <p class="store-name"></p>
            <ul>
              <li v-for="good in item.data"><img :src="good.img"/></li>
            </ul>
            <div>
              <span class="goods-count">共2件</span>
              <span class="goods-weight">{{totalWeight}}kg</span>
              <i class="iconfont icon-FowordArrow"></i>
            </div>
        </div>
      </div>
      <div v-if="item.moduleKey == 'moneyInfo' && item.show">
        <div class="settlement-item moneyInfo">
          <p v-for=" money in item.data"><em>{{money.name}}</em><em>{{money.value}}</em></p>
          <p class="total-money">应付{{totalCost}}<span>实付{{totalMoney}}</span></p>
        </div>
        <p class="settlement-line"></p>
      </div>
      <div class="settlement-bar" v-if="item.moduleKey == 'submitInfo' && item.show">
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
      totalCost: '0.00',
      totalWeight: '0',
      modules: [],
      deliverdate: '',
      delivertime: ''
    }
  },
  created () {
    this.userLogin()
    this.initSettlement()
    this.deliverdate = this.$route.params.deliverdate
    this.delivertime = this.$route.params.delivertime
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
          orgCode: '71472',
          storeId: '10003450',
          storeName: '沃尔玛-北大街店',
          openJPIndustry: '1',
          addressType: true,
          cityCode: 1,
          longitude: 116.50628,
          latitude: 39.79311,
          addressId: ''
        }
      }).then((response) => {
        if (response.body.code === '0') {
          let result = response.body.result
          this.totalCost = result.totalCost
          this.totalMoney = result.totalMoney
          this.totalWeight = result.totalWeight
          this.modules = result.modules
        } else {
          this.$toast({message: response.body.msg})
        }
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
