<template>
  <div class="store-home-wrap store-industry-1" v-bind:style="{ minHeight: winH + 'px'  }">
    <div class="store-title-wrap">
        <img src="https://img30.360buyimg.com/vendersettle/jfs/t3631/342/385184367/8543/b27a561a/58089137Nf2f1944d.png" class="store-logo">
        <div class="info-wrap">
          <h2 class="info-title">永辉超市-三环新城会员店永辉超市-三环新城会员店</h2>
          <div class="delivery-tip">
            达达专送<var class="line_split"></var><span class="delivery-time">42分钟</span>
          </div>
          <div class="delivery-tip">
            <div class="store-icon-txt">
              基础运费4元，满29基础运费2元
            </div>
          </div>
        </div>
        <div class="store-collection-wrap collection-active">
          <i class="collection-btn"></i>
        </div>
        <div class="list-tag-wrap">
          <ul class="list-tag-ul">
            <li class="list-tag-li">
              <i class="tag-icon">首单</i>
              <span class="tag-des">商家首单立减1</span>
            </li>
          </ul>
        </div>
    </div>
    <div class="store-info-floor">
      <div class="store-comment-wrap">
        <div class="store-public-title">
          <h2 class="public-store-title">店铺评价</h2>
        </div>
        <ul class="store-disc-address border-b">
          <li>
            <div class="store-comment-wrap border-b">
              <dl class="store-comment-dl border-r">
                    <dt>4.2</dt>
                    <dd>综合评分</dd>
              </dl>
              <dl class="store-comment-dl">
                  <dt>12</dt>
                  <dd>评论数</dd>
              </dl>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  // import { mapState, mapActions } from 'vuex'
  // import BookCard from '../components/BookCard'

  export default {
    data () {
      return {
        title: 'yanchengqu',
        winH: 0
      }
    },
    mounted () {
      this.winH = window.innerHeight
      console.log('dom形成')
    }

  }
</script>
<style lang="scss">
  @import "./style.scss";
</style>
