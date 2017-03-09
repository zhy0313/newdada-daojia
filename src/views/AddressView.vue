<template>
  <UserAddress :items='items' :historyData='historyData' :city='city'></UserAddress>
</template>

<script>
import UserAddress from '../components/address/UserAddress'
/* eslint-disable */
let address = [{'id': 13946 ,'addressName':'拉萨市堆龙德庆县加木测试','name':'测试','cityId':2951,'countyId':3921,'cityName':'拉萨市','countyName':'堆龙德庆县','poi':'加木','addressDetail':'测试订单','fullAddress':'拉萨市堆龙德庆县加木测试订单','mobile':'186****7045','coordType':2,'longitude':90.9007,'latitude':29.6594,'pin':'JD_2d3v4bd9dbae0','lastUsedTime':1488249369021,'createPin':'JD_2d3v4bd9dbae0','yn':0,'quantityOfGoods':1,'exists':false,'needCheckDelivery':0,'canDelivery':true}];

let historyAddress = [{'title':'丰庄一村','address':'上海市嘉定区丰庄路450弄','location':{'lat':31.24761,'lng':121.36593},'adcode':'310114','cityCode':2,'districtCode':2826,'city':'上海市','district':'嘉定区'}];

let city = [{'areaCode':1,'areaName':'北京市','areaLevel':2},{'areaCode':2,'areaName':'上海市','areaLevel':2},{'areaCode':1381,'areaName':'武汉市','areaLevel':2},{'areaCode':1601,'areaName':'广州市','areaLevel':2},{'areaCode':1607,'areaName':'深圳市','areaLevel':2},{'areaCode':1930,'areaName':'成都市','areaLevel':2},{'areaCode':3,'areaName':'天津市','areaLevel':2},{'areaCode':904,'areaName':'南京市','areaLevel':2},{'areaCode':1158,'areaName':'宁波市','areaLevel':2},{'areaCode':274,'areaName':'廊坊市','areaLevel':2},{'areaCode':2376,'areaName':'西安市','areaLevel':2},{'areaCode':4,'areaName':'重庆市','areaLevel':2},{'areaCode':988,'areaName':'苏州市','areaLevel':2},{'areaCode':1213,'areaName':'杭州市','areaLevel':2},{'areaCode':1482,'areaName':'长沙市','areaLevel':2},{'areaCode':1007,'areaName':'青岛市','areaLevel':2},{'areaCode':1116,'areaName':'合肥市','areaLevel':2},{'areaCode':412,'areaName':'郑州市','areaLevel':2},{'areaCode':978,'areaName':'常州市','areaLevel':2},{'areaCode':1303,'areaName':'福州市','areaLevel':2},{'areaCode':2951,'areaName':'拉萨市','areaLevel':2}];
/*  eslint-enable */

export default{
  data () {
    return {
      items: address,
      historyData: historyAddress,
      city: city
    }
  },
  created () {
    this.getAddress()
  },
  // mounted() {
  //
  // },
  components: {
    UserAddress
  },
  methods: {
    getAddress: function () {
      let data = {
        functionId: 'addresspdj/getAddressList',
        body: {}
      }
      this.$http.get('/client', {params: data}).then(response => {
        address = response.body.result
        this.items = address
      }, response => {
        // return response
      })
    }
  },
  computed: {
    // getAddress: function () {
    //   let data = {
    //     functionId: 'addresspdj/getAddressList',
    //     body: {}
    //   }
    //   this.$http.get('/client', {params: data}).then(response => {
    //     address = response.body.result
    //     return address
    //   }, response => {
    //     return response
    //   })
    // }
  }
}
</script>

<style lang='scss'>
  @import '../css/public.scss';
  @import '../css/address.scss';
</style>
