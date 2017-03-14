<!-- 地址列表 -->
<template>
  <div>
    <p class='addresslist-title'>我的收货地址</p>
    <ul class='addresslist-item'>
      <li v-for='address in addressList'>
          <p class='user_info'>{{address.name}} <span>{{address.mobile}}</span></p>
          <p class='address_info'>{{address.fullAddress}}</p>
          <span class='address-edit'></span>
      </li>
    </ul>
    <p class='detail-btn'>
        <a>新建收货地址</a>
    </p>
  </div>
</template>

<script>
  let addressList

  export default {
    data: function () {
      return {
        'addressList': addressList
      }
    },
    created: function () {
      // 获取地址列表数据
      this.$getAPI({functionId: 'addresspdj/getAddressList', body: {}}).then(response => {
        this.addressList = response.body.result
      }, response => {

      })
    }
  }
</script>
