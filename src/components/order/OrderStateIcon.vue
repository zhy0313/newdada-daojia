<template>
  <i :class="`order-state-icon icon-state${stateIcon}`"></i>
</template>

<script>
export default {
  props: {
    stateIcon: String
  }
}
</script>

<style lang="scss">
  .order-state-icon {
    display: inline-block;
    background: url(//static-o2o.360buyimg.com/daojia/new/images/order/order_status_map_icon.png) no-repeat;
    background-size: 467px 152px;
    background-position: -96px -28px;
    width: 27px;
    height: 27px;
    // /*注释掉的部分是切图对应的小图标的位置 从第一个到最后一个*/
    // /*// 人 绿*/
    &.icon-state1 {
      background-position: 0 0;
    }

    // /*// 人 灰*/
    &.icon-state-grey1 {
      background-position: -32px 0;
    }
    // /*// 房子 绿*/
    &.icon-state2 {
      background-position: -224px 0;
    }

    // /*// 房子 灰*/
    &.icon-state-grey2 {
      background-position: -256px 0;
    }

    // /*配送中*/
    // /*// 摩托 绿*/
    &.icon-state3 {
      background-position: -274px -62px;
    }

    // /*配送完成*/
    // /*// 摩托 灰*/
    &.icon-state-grey3 {
      background-position: -304px -62px;
    }

    /*// 订单 绿*/
    &.icon-state4{
        background-position: -96px -28px;
    }

    // /*// 订单 灰*/
    &.icon-state-grey4{
        background-position: -128px -28px;
    }

    // /*待支付*/
    // /*// 钱 红*/
    &.icon-state5{
        background-position: -96px 0;
    }

    // /*// 钱 绿*/
    &.icon-state6{
        background-position: -64px 0;
    }
    /*已支付*/
    /*// 钱 灰*/
    &.icon-state-grey6, &.icon-state-grey5{
        background-position: -128px 0;
    }
    /*// 心 绿*/
    &.icon-state7{
        background-position: -384px 0;
    }
    /*// 心 灰*/
    &.icon-state-grey7{
        background-position: -416px 0;
    }
    /*// 超时赔付红包 绿*/
    &.icon-state8{
        background-position: -385px -62px;
    }

    // /*// 超时赔付红包 灰*/
    &.icon-state-grey8{
        background-position: -355px -62px;
    }

    // /*.status9{// 叹号 绿
    //     background-position: -288px 0;
    // }
    // .status10{// 叹号 黄
    //     background-position: -320px 0;
    // }
    // .status11{// 叹号 灰
    //     background-position: -352px 0;
    // }*/

    &.icon-state-estimate {
      background-position: -334px -62px;
      width: 20px;
      height: 20px;
    }

    // /* 打电话 图标 */
    &.order-state-phone{
        position: absolute;
        top: 34px;
        right: 10px;
        background-position: 0 -32px;
    }

    // /*客服电话*/
    &.order-service, &.order-remove, &.order-complaint, &.order-more-dot, &.order-hide-phone{
      background-position: -30px -32px;
      width: 20px;
      height: 20px;
      position: absolute;
      top: 0px;
      left: 3px;
    }

    // /*删除订单*/
    &.order-remove{
      background-position: -53px -32px;
    }

    // /*//  投诉 */
    &.order-complaint{
        background-position: -417px -64px;
    }

    // /*//  隐藏的 电话 */
    &.order-hide-phone{
        background-position: -439px -64px;
    }

  }

</style>
