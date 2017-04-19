<template>
  <UserAddress :items='items' :city='city'></UserAddress>
</template>

<script>
import UserAddress from '../components/address/UserAddress'
/* eslint-disable */
let address;
let city;
/*  eslint-enable */

export default{
  data () {
    return {
      items: address,
      city: city
    }
  },
  created () {
    this.getAddress()
    this.getCity()
  },
  components: {
    UserAddress
  },
  methods: {
    getAddress: function () {
      let data = {
        functionId: 'addresspdj/getAddressList',
        body: {}
      }
      this.$getAPI(data).then(response => {
        address = response.body.result
        this.items = address
      }, response => {
        // return response
      })
    },
    getCity: function () {
      let data = {
        functionId: 'addresspdj/getCities',
        body: {}
      }
      this.$postAPI(data).then(response => {
        this.city = response.body.result
      }, response => {

      })
    }
  }
}
</script>

<style lang='scss'>
  @import '../css/public.scss';
  @import '../css/address.scss';
</style>
