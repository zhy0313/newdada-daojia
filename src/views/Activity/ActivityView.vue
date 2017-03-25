<template>
</template>

<script>
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
    methods: {
      getActivity: function () {
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
        this.$getAPI(data).then(response => {
          activityData = response.body.result
          this.activityData = activityData
        }, response => {
          // return response
        })
      }
    }
  }
</script>
