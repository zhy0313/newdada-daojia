<template>
<span>{{time}}</span>
</template>

<script>
export default {
  data () {
    return {
      time: '',
      flag: false,
      startTime: new Date().getTime()
    }
  },
  props: {
    endTime: String
  },
  methods: {
    timeDown () {
      let nowTime = new Date().getTime()
      let times = nowTime - this.startTime
      let lastTime = new Date(parseInt(this.endTime) - times)
      let min = this.formate(lastTime.getMinutes())
      let sec = this.formate(lastTime.getSeconds())
      if (lastTime <= 0) {
        this.flag = true
      }
      this.time = `${min}:${sec}`
    },
    formate (time) {
      if (time >= 10) {
        return time
      } else {
        return `0${time}`
      }
    }
  },
  mounted () {
    let time = setInterval(() => {
      if (this.flag === true) {
        clearInterval(time)
      }
      this.timeDown()
    }, 1000)
  }
}
</script>

<style lang="css">
</style>
