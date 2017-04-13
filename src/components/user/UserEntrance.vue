<template>
  <div class="user-entrance-container">
    <div v-for="entrance in entranceList" class="entrance-block">
        <a v-for="item in entrance" :class="item.type" :href="item.href || `#${item.type}`">
          {{item.text}}
          <span v-if="item.mobile">{{binMobile || item.mobile}}</span>
        </a>
    </div>
  </div>
</template>

<script>
import { getCookie } from '../../store/util/cookie'

export default {
  props: {
    binMobile: String
  },
  data () {
    let sid = getCookie('o2o_m_h5_sid')
    let deviceId = getCookie('deviceid_pdj_jd')
    let returnUrl = encodeURIComponent(window.location.href)
    let bindHref = `https://msc.jd.com/phone/loginpage/wcoo/index?IsH5=true&source=7&sid=${sid}&deviceId=${deviceId}&returnUrl=${returnUrl}`
    return {
      entranceList: [
        [
          {text: '我的关注', type: 'focus'},
          {text: '我的评价', type: 'comments'},
          {text: '管理地址', type: 'addresslist'},
          {text: '绑定手机号', type: 'bind', mobile: '您还未绑定手机号', href: bindHref}
        ],
        [
          {text: '客服与反馈', type: 'service'},
          {text: '下载京东到家', type: 'download'},
          {text: '达达配送员招募', type: 'recruit'},
          {text: '分享有礼', type: 'share'},
          {text: '用户调研', type: 'research'},
          {text: '帮助中心', type: 'help'}
        ],
        [
          {text: '关于我们', type: 'about'}
        ]
      ]
    }
  }
}
</script>

<style lang="scss">
  .user-entrance-container {
    padding-bottom: 60px;

    /*功能区块*/
    .entrance-block {
      padding-left: 15px;
      margin-bottom: 10px;
      background: #fff;
    }

    a {
      display: block;
      height: 45px;
      line-height: 45px;
      border-bottom: 1px solid #e8e8e8;
      position: relative;
      padding-left: 28px;

      &:last-of-type{
        border-bottom: none;
      }

      &::after {
        content: '';
        position: absolute;
        right: 0;
        width: 44px;
        margin-left: 4px;
        height: 40px;
        background: url(https://static-o2o.360buyimg.com/daojia/new/images/icon/pdj_2_sprites.png) no-repeat -80px -264px;
        background-size: 320px auto;
      }

      &::before {
        content: '';
        position: absolute;
        left: 4px;
        top: -2px;
        width: 26px;
        height: 40px;
        background: url(https://static-o2o.360buyimg.com/daojia/new/images/icon/pdj_2_sprites.png) no-repeat;
        background-size: 320px auto;
      }
    }




    .focus::before{
      background: url(https://static-o2o.360buyimg.com/daojia/new/images/store/focus.png) -40px 14px no-repeat;
      background-size: 58px auto;
      left: 3px;
    }

    .comments::before {
      background-position: -278px -389px;
    }

    .addresslist::before {
      background-position: -191px -44px;
    }

    .bind {
      display: flex;
      justify-content: space-between;
      padding-right: 30px;
    }

    .bind::before {
      background-position: -191px -88px;
    }

    .service::before {
      background-position: -189px -132px;
    }

    // .feedback::before{
    //   background: url(http://storage.jd.com/wxapp/icon_feedback.png) no-repeat;
    //   background-size: 17px auto;
    //   left: 3px;
    //   top: 14px;
    // }

    // .store::before{
    //   background-position: -189px -132px;
    // }
    .counpon::before{
      background-position: -145px -42px;
    }
    .download::before{
      background-position: -101px -131px;
    }
    .recruit::before{
      background-position: -189px -176px;
    }
    .share::before{
      background: url(https://static-o2o.360buyimg.com/daojia/new/images/user/invite.png) no-repeat;
      background-size: 70% auto;
      top: 10px;
    }
    .research::before{
      background: url(https://static-o2o.360buyimg.com/daojia/new/images/user/research.png) 0 center no-repeat;
      background-size: 15px 17px;
    }
    .help::before{
      background: url(https://static-o2o.360buyimg.com/daojia/new/images/user/icon_list_help.png) no-repeat;
      background-size: 17px;
      top: 12px;
    }
    .about::before{
      background-position: -189px -220px;
    }
  }
</style>
