<template lang="html">
<div class="deliverTime-container">
  <p class="deliverTime-title">送达时间</p>
  <div class="deliverTime-data">
    <h4>日期选择</h4>
    <div class="date">
      <p v-for="(date, index) in deliverTime" :class="index == curDateIndex ? 'cur' : ''" @click="changeDate" :data-index="index" :data-date="date.promiseDateText">{{date.promiseDateText}}</p>
    </div>
    <h4>时间选择<em>（以支付时间为准）</em></h4>
    <div class="time">
      <template v-for="time in deliverTime">
        <p  v-for="(item, index) in time.promiseTimeRespItems" :class="index == curTimeIndex ? 'cur' : ''" @click="changeTime" :data-index="index" :data-time="item.promiseTimeText">{{item.promiseTimeText}}<br/>{{item.steppedFreight}}</p>
     </template>
    </div>
  </div>
  <a href="javascript:;" class="btn-ok" @click="toSubmit">确定</a>
</div>
</template>

<script>
export default {
  data () {
    return {
      deliverTime: [],
      curDateIndex: 0,
      curTimeIndex: 0,
      deliverdata: '',
      delivertime: ''
    }
  },
  created () {
    if (this.$route.params.deliverTime === undefined) {
      this.$router.push('settlement')
    }
    let data = this.$route.params.deliverTime.promiseServerResp.data
    this.deliverTime = data
  },
  methods: {
    changeDate: function (e) {
      this.curDateIndex = e.target.dataset.index
      this.deliverdata = e.target.dataset.date
    },
    changeTime: function (e) {
      this.curTimeIndex = e.target.dataset.index
      this.delivertime = e.target.dataset.time
    },
    toSubmit: function () {
      console.log(this.deliverdata)
      console.log(this.delivertime)
      this.$router.push({name: 'settlement', params: {deliverdate: this.deliverdate, delivertime: this.delivertime}})
    }
  }
}
</script>

<style lang="scss">@import "./style.scss";</style>
