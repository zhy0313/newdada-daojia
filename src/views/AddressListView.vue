<!-- 地址列表 -->
<template>
  <div>
    <p class='addresslist-title'>我的收货地址</p>
    <ul class='addresslist-item'>
      <li v-for='address in addressList'>
          <p class='user_info'>{{address.name}} <span>{{address.mobile}}</span></p>
          <p class='address_info'>{{address.fullAddress}}</p>
          <!-- <p :class='address.name'>123</p> -->
          <router-link :to='"editAddress"+"/"+address.name+"/"+address.mobile+"/"+address.id+"/"+address.fullAddress+"/"+address.poi'><span class='address-edit'>编辑</span></router-link>
      </li>
    </ul>
    <p class='detail-btn'>
        <router-link to='/newAddress'>新建收货地址</router-link>
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
