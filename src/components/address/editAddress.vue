<template>
  <div>
    <div class='address-wrapper' :class='{none:showMap}'>
      <div class='address-name border-t border-b'>
          <label for='name'>联系人</label>
          <input ref='username' type='text' id='name' pattern='.+' placeholder='请填写收货人姓名' vtitle='收货人姓名' name='name' maxLength='10' />
      </div>
      <div class='address-mobile border-t border-b'>
          <label for='mobile'>手机号</label>
          <input ref='usertel' type='tel' id='mobile' placeholder='请填写收货人电话号码' maxLength='11' pattern='^0?1(3|4|5|7|8)\d{9}$' _pattern='^0?1(3|4|5|7|8)\d{9}$' vtitle='收货人电话号码' name='mobile' />
      </div>
      <div class='address-detail border-t border-b'>
          <ul>
              <li class='address-locate'>
                  <span>配送至</span>
                  <p class='textColor border-b' v-on:click='showMapFrame'>
                      <i ref='userpoi'>请选择小区/写字楼/学校街道等</i>
                  </p>
              </li>
              <li class='address-info'>
                  <input ref='useraddress' type='text' pattern='.+' placeholder='详细地址（门牌号/楼层等）' vtitle='收货人详细地址' name='addressDetail' id='addressDetail' maxLength='50' />
              </li>
          </ul>
      </div>
      <div class='newaddress-save-button button-style' v-on:click='save'><i>保存</i></div>
    </div>
    <locateView :class='{none:!showMap}'></locateView>
  </div>
</template>

<script>
import locateView from './locateView.vue'

let address

export default {
  data: function () {
    return {
      'showMap': false,
      'address': address
    }
  },
  methods: {
    showMapFrame: function () {
      this.showMap = true
    },
    save: function () {
      let This = this
      this.$postAPI({
        functionId: 'addresspdj/addAddress',
        body: {
          'name': This.$refs.username.value,
          'mobile': This.$refs.usertel.value,
          'addressDetail': This.address.address,
          'cityName': This.address.city,
          'countyName': This.address.district,
          'poi': This.address.title,
          'cityId': This.address.areaCode,
          'countyId': This.address.districtCode,
          'coordType': 2,
          'longitude': This.address.longitude,
          'latitude': This.address.latitude
        }
      }).then(response => {
        if (response.body.result) {
          alert('成功')
          history.go(-1)
        }
      }, response => {

      })
    }
  },
  created: function () {
    let This = this
    window.addEventListener('message', function (e) {
      window.removeEventListener('message')
      This.showMap = false
      This.$getAPI({
        functionId: 'local/getAddressN',
        body: {
          'longitude': e.data.latlng.lng,
          'latitude': e.data.latlng.lat,
          'coord_type': 2,
          'needMatch': 1
        }
      }).then(response => {
        This.address = response.body.result
        This.$refs.userpoi.innerText = response.body.result.title
      }, response => {

      })
    })
  },
  components: {
    locateView
  }
}
</script>
