<template>
  <editView :id='id' :mobile='mobile' :name='name' :poi='poi' :fullAddress='fullAddress' :isEdit='isEdit'></editView>
</template>

<script>
import editView from '../components/address/editAddress'

let name
let id
let poi
let mobile
let fullAddress

export default {
  data: function () {
    return {
      'name': name,
      'id': id,
      'poi': poi,
      'mobile': mobile,
      'fullAddress': fullAddress,
      'isEdit': true
    }
  },
  components: {
    editView
  },
  created: function () {
    let data = this.$route.params
    this.name = data.name
    this.id = data.id
    this.poi = data.title
    this.mobile = data.tel
    this.fullAddress = data.poi
  }
}
</script>
