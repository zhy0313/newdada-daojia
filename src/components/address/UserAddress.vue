<!-- 用户当前的所有地址 -->
<template>
  <div class='address-main-div'>
    <div class='main-header border-b' v-bind:class='{none:showHeader}'>
      <h2 v-on:click='changeCity' class='main-header-city' v-bind:class='{none:showHeaderCity}'>{{defaultCityName}}</h2>
      <input v-on:click='test' ref='inputCity' class='main-header-search' v-bind:class='{defaultWidth:showHeaderCity}' maxlength='50' type='text' placeholder='选择城市、小区、写字楼、学校' />
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
          <HistoryAddress :historyData='historyData'></HistoryAddress>
        </div>
        <div class='main-poi-content none'>
            <ul>

            </ul>
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

export default{
  props: {
    // test1:String,
    items: Array,
    historyData: Array,
    city: Array
  },
  data: function () {
    return {
      'showCityName': true,
      'showHeader': false,
      'showHistory': true,
      'showHeaderCity': true,
      'showAddressList': false,
      'defaultCityName': '北京市'
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
      this.showHeaderCity = false
      this.showAddressList = true
      this.showHistory = false
      // console.log(this.$refs.inputCity)
    },
    changeCity: function (e) {
      this.showHeader = true
      this.showHistory = true
      this.showCityName = false
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
    }
  },
  components: {
    HistoryAddress,
    CityView
  }
}
</script>

<style lang='scss'>
@import '../../css/address.scss'
</style>
