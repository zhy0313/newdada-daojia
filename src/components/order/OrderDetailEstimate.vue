<template>
  <div class="order-detail-estimate">
    <OrderStateIcon stateIcon="-estimate"></OrderStateIcon>{{estimate || "预计送达时间：\n2017-11-11 11:11:11"}}
  </div>
</template>

<script>
  import OrderStateIcon from './OrderStateIcon'

  export default {
    components: {
      OrderStateIcon
    },
    props: {
      estimate: String
    },
    computed: {
      adapatEstimate () {
        let width = window.innerWidth
        let estimate = this.estimate
        if (width <= 360 && this.estimate.indexOf('-') >= 0) {
          estimate = estimate.replace('：', '：\n')
        }

        return estimate
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/styles/mixins";
  @import "../../assets/styles/variables";

  .order-detail-estimate {
    position: relative;
    font-size: 17px;
    color: #333;
    padding: 15px 15px 15px 50px;
    margin-top: 10px;
    background-color: #fff;
    @include border-bottom();

    .icon-state-estimate{
      position: absolute;
      left: 15px;
    }
  }
</style>
