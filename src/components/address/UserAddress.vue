<!-- 用户当前的所有地址 -->
<template>
  <div class='address-main-div'>
    <div class='main-header border-b' v-bind:class='{none:showHeader}'>
      <h2 v-on:click='changeCity' class='main-header-city' v-bind:class='{none:showHeaderCity}'>{{defaultCityName}}</h2>
      <input v-on:click='test' v-on:input='inputAddress' ref='inputCity' class='main-header-search' v-bind:class='{defaultWidth:showHeaderCity}' maxlength='50' type='text' placeholder='选择城市、小区、写字楼、学校' />
    </div>
    <div class='main-list-content' v-bind:class='{none:showAddressList}'>
      <div class='main-locate'>
          <i></i>
          <p>点击定位当前地点</p>
      </div>
      <p class='main-address-list-tit'>我的收货地址</p>
        <div class='main-address-list'>
          <ul>
            <li v-for='item in items' v-on:click='chooseAddress'>
                <p class='detail-inner border-b'>
                    <span class='info-detail'>
                        <em>{{item.name}}</em>
                        <b>{{item.mobile}}</b>
                    </span>
                    <span class='address-detail'>
                        {{item.fullAddress}}
                    </span>
                    <span class='address-edit'>

                    </span>
                </p>
            </li>
          </ul>
        </div>
      </div>
        <div class='main-history-content' v-bind:class='{none:showHistory}'>
          <HistoryAddress :historyData='historyData' v-on:clearHistory='clearHistory'></HistoryAddress>
        </div>
        <div class='main-poi-content' v-bind:class='{none:showPoi}'>
          <PoiView :poiAddress='poiAddress'></PoiView>
        </div>
    <div class='address-city-div' v-bind:class='{none:showCityName}'>
        <h2 class='address-city-title'><span>已开通城市</span></h2>
        <CityView :city='city' v-on:chooseCity='hasChooseCity'></CityView>
    </div>
    <div class='address-list-div none'>
        <ul></ul>
    </div>
  </div>
</template>

<script>
import HistoryAddress from './historyAddress.vue'
import CityView from './CityView.vue'
import PoiView from './PoiAddress.vue'

let poiAddress
let historyData

export default{
  props: {
    // test1:String,
    items: Array,
    city: Array
  },
  data: function () {
    return {
      'showCityName': true,
      'showHeader': false,
      'showHistory': true,
      'showHeaderCity': true,
      'showAddressList': false,
      'showPoi': true,
      'defaultCityName': '北京市',
      'poiAddress': poiAddress,
      'historyData': historyData
    }
  },
  computed: {
    // test: function () {
    //   return {
    //     'showCity': false
    //   }
    // }
  },
  methods: {
    test: function (e) {
      if (!this.$refs.inputCity.value) {
        this.showHeaderCity = false
        this.showAddressList = true
        this.getHistory()
      }
    },
    changeCity: function (e) {
      this.showHeader = true
      this.showHistory = true
      this.showCityName = false
      this.showAddressList = true
    },
    chooseAddress: function (e) {
      // 选择地址之后返回上个页面

    },
    hasChooseCity: function (cityId, cityName) {
      this.showHeader = false
      this.showHistory = true
      this.showCityName = true
      this.showAddressList = false
      this.defaultCityName = cityName
    },
    inputAddress: function (e) {
      let inputValue = this.$refs.inputCity.value
      if (inputValue) {
        let data = {
          functionId: 'address/search',
          body: {
            region: this.defaultCityName,
            key: inputValue
          }
        }
        this.$http.get('/client', {params: data}).then(response => {
          this.showPoi = false
          this.showHistory = true
          this.poiAddress = response.body.result
        }, reposonse => {

        })
      } else {
        this.showPoi = true
        this.showHistory = false
      }
    },
    clearHistory: function () {
      this.showHistory = true
    },
    getHistory: function () {
      let data = {
        functionId: 'local/getSearchInfos',
        body: {}
      }
      this.$http.get('/client', {params: data}).then(response => {
        this.historyData = response.body.result
        if (this.historyData && this.historyData.length > 0) {
          this.showHistory = false
        }
      }, reposonse => {

      })
    }
  },
  components: {
    HistoryAddress,
    CityView,
    PoiView
  }
}
</script>

<style lang='scss'>
@import '../../css/address.scss'
</style>
