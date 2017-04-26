<template>
<a href="javascript:;">
	<img v-bind:src="floorBanner.data[0].floorCellData.imgUrl" />
</a>
</template>
<script>
export default {
  props: {
    floorBanner: Array
  },
  data: function () {
    return {
    }
  }
}
</script>
<style lang="scss">
</style>
