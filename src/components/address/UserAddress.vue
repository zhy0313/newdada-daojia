<!-- 用户当前的所有地址 -->
<template>
  <div class='address-main-div'>
    <div class='main-header border-b'>
      <h2 v-on:click='changeCity' class='main-header-city none'>{{'北京市'}}</h2>
      <input v-on:click='test' class='main-header-search defaultWidth' maxlength='50' type='text' placeholder='选择城市、小区、写字楼、学校' />
    </div>
    <div class='main-list-content'>
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
        <div class='main-history-content none'>
          <HistoryAddress :historyData='historyData'></HistoryAddress>
        </div>
        <div class='main-poi-content none'>
            <ul>

            </ul>
        </div>
    <div class='address-city-div none'>
        <h2 class='address-city-title'><span>已开通城市</span></h2>
        <CityView :city='city'></CityView>
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
  methods: {
    test: function (e) {
      // $(e.currentTarget).removeClass('defaultWidth');
      // $('.detail-btn').addClass('none');
      // $('.main-header-city').removeClass('none');
      // $('.main-list-content').addClass('none');
      // $('.main-history-content').removeClass('none');
    },
    changeCity: function (e) {
      // $('.address-city-div').removeClass('none');
      // $('.main-history-content').addClass('none');
    },
    chooseAddress: function (e) {
      // 选择地址之后返回上个页面

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
