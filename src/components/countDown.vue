<template>
<span>{{time}}</span>
</template>

<script>
export default {
  data () {
    return {
      time: '',
      now: 0
    }
  },
  props: ['countDownTime'],
  methods: {
    formate (time) {
      let hour = parseInt(time / 1000 / 3600)
      let min = parseInt((time / 1000 - hour * 3600) / 60)
      let sec = parseInt(time / 1000 - hour * 3600 - min * 60)
      return hour + '小时' + min + '分钟' + sec + '秒'
    }
  },
  computed: {
    'time': function () {
      console.log('ddd' + this.countDownTime)
      return this.formate(new Date(this.countDownTime).getTime() - this.now)
    }
  },
  ready () {
    let self = this
    setInterval(function () {
      self.now = new Date().getTime()
    }, 1000)
  }
}
</script>

<style lang="css">
</style>
