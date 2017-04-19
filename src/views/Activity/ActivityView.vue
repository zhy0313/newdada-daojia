<template>
  <div>
    <div v-for='value in activityData'>
      <div v-if='value.floorStyle==="floorBanner"'>
        <swipe
            :onDragStart='onDragStart'
            :onDrag='onDrag'
            :onDragEnd='onDragEnd'
            :autoplay='false'>
            <swipe-item v-for='$value in value.data'>
                <img :src='$value.imgUrl' />
            </swipe-item>
        </swipe>
        <!-- <div v-for='$value in value.data'>
          <img :src='$value.imgUrl' />
        </div> -->
      </div>
      <div v-else-if='value.floorStyle==="act1"||value.floorStyle==="act2"||value.floorStyle==="act3"||value.floorStyle==="act4"||value.floorStyle==="act5"'>
        <swipe
            :onDragStart='onDragStart'
            :onDrag='onDrag'
            :onDragEnd='onDragEnd'>
            <swipe-item v-for='$value in value.data'>
                <img :src='$value.imgUrl' />
            </swipe-item>
        </swipe>
        <!-- <div v-for='$value in value.data'>
          <img :src='$value.imgUrl'/>
        </div> -->
      </div>
      <div v-else-if='value.floorStyle==="product5" && value.styleTpl==="tpl2"'>
        <div class='store-goods-wrap' v-if='value.data[0]&&value.data[0].name'>
          <ul class="index-store-list-style">
            <tStoreList :result='v.data[0]'></tStoreList>
          </ul>
          <a class='showMore'>查看更多商品 ></a>
          <div class='activity-border-1'><i class='left'></i><i class='center'></i><i class='right'></i></div>
        </div>
        <div v-else class='store-goods-wrap'>
          <ul class='two-column-product' v-if='value.data[0] && value.data[0].name'>
            <li v-for='valueV in value.data' class='store-goods-list'>
              <activityTpl2 :valueV='valueV' :v='value' :skuToType='value.busyAttrMaps' :actStoreGoods='activityData.hideStoreTitle' ></activityTpl2>
            </li>
          </ul>
          <ul class='two-column-product' v-else>
            <li v-for='valueV in value.data' class='store-goods-list'>
              <activityTpl2 :valueV='valueV' :v='value' :skuToType='value.busyAttrMaps' :actStoreGoods='activityData.hideStoreTitle' ></activityTpl2>
            </li>
          </ul>
        </div>
        </div>
        <div v-else-if='value.floorStyle==="product5" && value.styleTpl==="tpl3"'>
          <div class='store-goods-wrap' v-if='value.data[0]&&value.data[0].name'>
            <ul class="index-store-list-style">
              <tStoreList :result='v.data[0]'></tStoreList>
            </ul>
            <a class='showMore'>查看更多商品 ></a>
            <div class='activity-border-1'><i class='left'></i><i class='center'></i><i class='right'></i></div>
          </div>
          <div v-else class='store-goods-wrap'>
            <ul class='horizontal-product' v-if='value.data[0] && value.data[0].name'>
              <li v-for='valueV in value.data' class='store-goods-list'>
                <activityTpl2 :valueV='valueV' :v='value' :skuToType='value.busyAttrMaps' :actStoreGoods='activityData.hideStoreTitle' ></activityTpl2>
              </li>
            </ul>
            <ul class='horizontal-product' v-else>
              <li v-for='valueV in value.data' class='store-goods-list'>
                <activityTpl3 :valueV='valueV' :v='value' :skuToType='value.busyAttrMaps' :actStoreGoods='activityData.hideStoreTitle' ></activityTpl3>
              </li>
            </ul>
          </div>
        </div>
        <div v-else-if='value.floorStyle==="product5" && value.styleTpl==="tpl4"'>
          <!--店铺活动新增一行3品start-->
          <div class='store-goods-wrap' floor v-if='!activityData.hideStoreTitle&&value.data[0] && value.data[0].name'>
            <ul class='index-store-list-style'>
              <tStoreList :result='v.data[0]'></tStoreList>
            </ul>
            <a class='showMore'>查看更多商品 ></a>
            <div class='activity-border-1'><i class='left'></i><i class='center'></i><i class='right'></i></div>
          </div>
          <div v-else-if class='store-goods-wrap'>
            <ul class='three-column-product' v-if='value.data[0] && value.data[0].name'>
              <li v-for='valueV in value.data' class='store-goods-list'>
                <activityTpl2 :valueV='valueV' :v='value' :skuToType='value.busyAttrMaps' :actStoreGoods='activityData.hideStoreTitle' ></activityTpl2>
              </li>
            </ul>
            <ul class='three-column-product' v-else>
              <li v-for='valueV in value.data' class='store-goods-list'>
                <activityTpl2 :valueV='valueV' :v='value' :skuToType='value.busyAttrMaps' :actStoreGoods='activityData.hideStoreTitle' ></activityTpl2>
              </li>
            </ul>
          </div>
        </div>
        <div v-else-if='value.floorStyle === "coupon"' class="show-activity2" floor>
          <a v-for='$value in value.data' :couponCode='$value.params.id'>
            <img class='act-inner-pic' :src='$value.imgUrl'/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import tStoreList from '../../components/activity/tstoreList'
  import activityTpl2 from '../../components/activity/activityTpl2'
  import activityTpl3 from '../../components/activity/activityTpl3'

  let activityData
  export default {
    created: function () {
      this.getActivity()
    },
    data () {
      return {
        activityData: activityData
      }
    },
    components: {
      tStoreList,
      activityTpl2,
      activityTpl3
    },
    methods: {
      getActivity: function () {
        let This = this
        let data = {
          functionId: 'act/getActivityFirst',
          body: {
            'longitude': 116.50628,
            'latitude': 39.79311,
            'activityId': '365',
            'city': '北京市',
            'shareFlag': false,
            'coordType': 2,
            'currentPage': 1
          }
        }
        This.$getAPI(data).then(response => {
          activityData = response.body.result
          This.activityData = activityData.data
        }, response => {
          // return response
        })
      }
    }
  }
</script>
<style lang='scss'>
  @import '../../css/public.scss';
  @import '../../css/activity.scss';
  img{
    width: 100%
  }
  .swipe{
    height: 200px;
  }
</style>
