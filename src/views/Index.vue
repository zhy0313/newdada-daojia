<template>
<div>
	<IndexHead :address='address'></IndexHead>
	<div v-for="floor in floorItems.data">
		<floorBanner v-if="(floor.floorStyle == 'floorBanner') && (floor.styleTpl == 'tpl4')" :floorBanner='floor'></floorBanner>
		<IndexBall v-if="(floor.floorStyle == 'ball') && (floor.styleTpl == 'tpl1')" :ball='floor'></IndexBall>
		<IndexAct v-if="(floor.floorStyle.indexOf('act') == 0) && (floor.styleTpl == 'tpl1')" :IndexAct='floor'></IndexAct>
		<storeArea v-if="floor.floorStyle == 'storeArea'" :storeArea='floor'></storeArea>
		<IndexBrand v-if="(floor.floorStyle.indexOf('act') == 0) && (floor.styleTpl == 'tpl2')" :brand='floor'></IndexBrand>
	</div>
	<IndexTriple></IndexTriple>
</div>

</template>
<script>
import IndexHead from '../components/index/IndexHead'
import IndexBall from '../components/index/IndexBall'
import IndexBrand from '../components/index/IndexBrand'
import IndexEntrance from '../components/index/IndexEntrance'
import IndexTriple from '../components/index/IndexTriple'
import storeArea from '../components/index/storeArea'
import floorBanner from '../components/index/floorBanner'
import IndexAct from '../components/index/IndexAct'
/* eslint-disable */
let floorItems
let address
/*  eslint-enable */

export default{
  data () {
    return {
      floorItems: floorItems,
      address: address
    }
  },
  created () {
    this.getPoi()
    this.getfloor()
  },
  components: {
    IndexHead,
    IndexBall,
    IndexBrand,
    IndexEntrance,
    IndexTriple,
    storeArea,
    floorBanner,
    IndexAct
  },
  methods: {
    getPoi: function () {
      let data = {functionId: 'local/getAddressN', body: {'longitude': 116.45452, 'latitude': 39.91989, 'coordType': '2', 'needMatch': '1'}}
      this.$getAPI(data).then(response => {
        this.address = response.body.result
        console.log(this.address)
      }, response => {
        // return response
      })
    },
    getfloor: function () {
      let data = {functionId: 'indexh5/getIndex', body: {'address': '朝外SOHO', 'city': '北京市', 'longitude': 116.45452, 'latitude': 39.91989, 'coordType': '2', 'h5From': '', 'isglb': '', 'currentPage': '', 'storeId': '', 'activityId': ''}}
      this.$getAPI(data).then(response => {
        this.floorItems = response.body.result
        console.log(this.floorItem)
      }, response => {
        // return response
      })
    }
  }
}
</script>
<style lang="scss">
@import '../css/public.scss';
</style>
