<template>
  <div>
    <ul class='cityselect-list scroller'>
  		<li v-for='value in city' v-on:click='changeCity'>{{value.areaName}}</li>
  	</ul>
  </div>
</template>

<script>
export default {
  props: {
    city: Array
  },
  methods: {
    changeCity: function (e) {
      // $('.main-header-city').text($(e.currentTarget).text());
      // $('.address-city-div').addClass('none');
      // $('.main-history-content').removeClass('none');
    }
  }
}
</script>
