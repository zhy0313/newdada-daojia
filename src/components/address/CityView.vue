<template>
  <div>
    <ul class='cityselect-list scroller'>
  		<li v-for='value in city' v-on:click='changeCity' :data-city-name='value.areaName' ref='cityName' :data-city-id='value.areaCode'>{{value.areaName}}</li>
  	</ul>
  </div>
</template>

<script>
export default {
  props: {
    city: Array,
    showCity: Boolean,
    showHeader: Boolean,
    showCityName: Boolean,
    showHistory: Boolean
  },
  methods: {
    changeCity: function (e) {
      // 把数据带回去
      let cityName = e.currentTarget.dataset.cityName
      let cityId = e.currentTarget.dataset.cityId
      // 子组件像 父组件 传递数据
      this.$emit('chooseCity', cityId, cityName)
      // this.props.showHeader = true
      // this.props.showCityName = false
      // this.props.showHistory = true
    }
  },
  computed: {
  }
}
</script>
