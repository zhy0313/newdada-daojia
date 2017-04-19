<template>
  <flex class="user-cover">
    <img class="user-avatar" :src="userInfo.yunBigImageUrl" alt="">
    <div class="user-info">
      {{userInfo.nickName}}
      <a v-if="userInfo.vipStatus != -1"
        href="https://daojia.jd.com/activity/vip/index.html"
        :class="`vip status${userInfo.vipStatus}`">
        {{userInfo.vipStatus == 2 ? "vip会员>" : "开通vip会员>"}}
      </a>
      <br> {{userInfo.mobile}}
    </div>
  </flex>
</template>

<script>
export default {
  props: {
    userInfo: Object
  }
}
</script>

<style lang="scss">
  .user-cover {
    padding: 22px 16px;
    color: #fff;
    background: url(//static-o2o.360buyimg.com/daojia/new/images/my_bg.jpg) center top no-repeat;
    background-size: cover;

    .user-avatar {
      width: 70px;
      height: 70px;
      padding: 6px;
      border-radius: 100%;
      background: url(//static-o2o.360buyimg.com/daojia/new/images/icon/bg_photo@2x.png) 0 2px  no-repeat;
      background-size: auto 70px;
    }

    .user-info {
      padding-left: 20px;
      line-height: 1.9;
    }

    .vip {
      display: inline-block;
      font-size: 11px;
      color: #fff;
      padding-left: 20px;
      background: url(//static-o2o.360buyimg.com/daojia/new/images/vip/icon_vip_y.png) no-repeat;
      background-position: 0 6px;
      background-size: 17px;
      &.status1 {
        background-image: url(//static-o2o.360buyimg.com/daojia/new/images/vip/icon_unvip.png);
      }
    }

  }
</style>
