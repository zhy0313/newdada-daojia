<template>
<div>
  <div class="store-home-wrap store-industry-1" :style="{ minHeight: winH + 'px', 'position': storeIsFixed ? 'fixed' : 'relative' }" @click="storeHomeClick">
    <div class="store-title-wrap">
        <img src="https://img30.360buyimg.com/vendersettle/jfs/t3631/342/385184367/8543/b27a561a/58089137Nf2f1944d.png" class="store-logo">
        <div class="info-wrap">
          <h2 class="info-title">永辉超市-三环新城会员店永辉超市-三环新城会员店</h2>
          <div class="delivery-tip">
            达达专送<var class="line_split"></var>
            <!--  不在配送时间 添加class delivery-time-close-->
            <span class="delivery-time delivery-time-close">42分钟</span>
          </div>
          <div class="delivery-tip">
            <div class="store-icon-txt">
              基础运费4元，满29基础运费2元
            </div>
          </div>
        </div>
        <div class="store-collection-wrap " :class="{'collection-active' : storeFollow}">
          <i class="collection-btn"></i>
        </div>
        <div class="coupon-top-right-bag" v-show="storeIsFixed"></div>
        <div class="list-tag-wrap">
          <ul class="list-tag-ul">
            <li class="list-tag-li">
              <i class="tag-icon">首单</i>
              <span class="tag-des">商家首单立减1</span>
            </li>
            <li class="list-tag-li">
              <i class="tag-icon">首单</i>
              <span class="tag-des">商家首单立减1</span>
            </li>
            <li class="list-tag-li">
              <i class="tag-icon">首单</i>
              <span class="tag-des">商家首单立减1</span>
            </li>
            <li class="list-tag-li">
              <i class="tag-icon">首单</i>
              <span class="tag-des">商家首单立减1</span>
            </li>
            <li class="list-tag-li">
              <i class="tag-icon">首单</i>
              <span class="tag-des">商家首单立减1</span>
            </li>
            <li class="list-tag-li" v-show="!tagsMoreHide">
              <i class="tag-icon">首单</i>
              <span class="tag-des">商家首单立减1</span>
            </li>
            <li class="list-tag-li" v-show="!tagsMoreHide">
              <i class="tag-icon">首单</i>
              <span class="tag-des">商家首单立减1</span>
            </li>
          </ul>
          <div class="show-tag-more-wrap">
            <span class="show-tag-more"  :class="tagsMoreHide ? '' : 'show-tag-more-show'" @click="showMoreTags">{{tagsText}}</span>
          </div>
          <span class="list-tagTotal-title" v-show="storeIsFixed"><strong>10个活动</strong></span>
        </div>
    </div>
    <div class="store-info-floor">
      <!--门店店铺优惠券-->
      <div class="store-coupon-wrap">
        <div class="store-public-title">
          <h2 class="public-store-title">店铺优惠券</h2>
        </div>
        <Coupon></Coupon>
      </div>
      <!--门店店铺评价-->
      <div class="store-comment-wrap">
        <div class="store-public-title">
          <h2 class="public-store-title">店铺评价</h2>
        </div>
        <ul class="store-disc-address">
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
          <li class="store-comment-users-list">
            <ul class="store-comment-users-ul">
              <li class="user-li">
                <div class="header-pic">
                  <img src="//static-o2o.360buyimg.com/daojia/new/images/store/evaluateHeader.jpg" alt="" class="pic-img">
                </div>
                <dl class="user-dl">
                  <dt>
                    <div class="comment-user-name">E***i</div>
                    <span class="comment-date-time">2017-03-09 17:52:36</span>
                  </dt>
                  <dd>
                    <p class="user-comment">水果不怎么滴</p>


                    <div class="evaluate-wrap">
                      <i class="peisongMark"></i>
                      <div class="serviceWrap">
                        <span class="pieceFont">口味佳</span>
                        <span class="pieceFont">日期新</span>
                        <span class="pieceFont">分量足</span>
                        <span class="pieceFont">包装完好</span>
                        <span class="pieceFont">商品新鲜质量优</span>
                        <span class="pieceFont">服务态度好</span>
                      </div>
                    </div>

                    <div class="product-wrap">
                      <i class="finger-mark"></i>
                      <div class="single-proWrap">
                        <a href="#" class="single-pro">【满29减6】银鹭 桂圆八宝粥 360g/听</a>
                        <a href="#" class="single-pro">【满29减6】银鹭 桂圆八宝粥 360g/听</a>
                        <a href="#" class="single-pro">【满29减6】银鹭 桂圆八宝粥 360g/听</a>
                        <a href="#" class="single-pro">【满29减6】银鹭 桂圆八宝粥 360g/听</a>
                        <a href="#" class="single-pro">【满29减6】银鹭 桂圆八宝粥 360g/听</a>
                      </div>
                    </div>
                  </dd>
                </dl>
              </li>
            </ul>
          </li>
          <li class="border-t">
            <a href="" class="goto-evaluate">查看用户的全部评价&nbsp;&gt;</a>
          </li>
        </ul>
      </div>
      <!--门店店铺信息-->
      <div class="store-detail-wrap">
        <div class="store-public-title">
          <h2 class="public-store-title">店铺信息</h2>
        </div>
        <ul class="store-disc-address">
          <li class="title-mark-wrap">
            <div class="mark-wrap border-b">
              <a href="" class="public-mark-a" :style="{backgroundImage:`url('https://img30.360buyimg.com/mobilecms/jfs/t3289/113/4719052331/3944/a60eda23/58535991N127211a5.png')`}">
                <span class="public-links-font">超时赔付</span>
              </a>
            </div>
          </li>
          <li class="detail-list-wrap">
            <dl class="detail-list">
              <dt class="detail-name">商品数量：</dt>
              <dd class="detail-content">15件</dd>
            </dl>
            <dl class="detail-list">
              <dt class="detail-name">月销单量：</dt>
              <dd class="detail-content"> -- 单</dd>
            </dl>
            <dl class="detail-list">
              <dt class="detail-name">关注人数：</dt>
              <dd class="detail-content">26人</dd>
            </dl>
            <dl class="detail-list">
              <dt class="detail-name">营业时间：</dt>
              <dd class="detail-content">08:00-23:00</dd>
            </dl>
          </li>
          <li class="business-links border-t">
            <a href="#">
              <span>商家资质</span>
              <u class="arrow-links"></u>
            </a>
          </li>
          <li class="business-links border-t">
            <a href="#">
              <span>举报商家得红包</span>
              <u class="arrow-links"></u>
              <span class="award-money">最高奖100元</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!--门店列表-->
      <div class="store-article-wrap has-tags-wrap" :class="storeIsFixed ? '' : 'goods-floor-fixed-bottom'" @click="storeStopProp">
        <!--门店公告-->
        <div class="notice-tips">
          <i>公告</i>
          <div>
            <div class="tips-font" v-for="(item, index) of tipsArr" :style="item" :index="index" @click="tipsClick">{{item.value}}</div>
          </div>
          <u class="left-mark"></u>
        </div>
        <!--门店店内搜索框-->
        <div class="store-search-wrap">
          <div class="store-search-input">
            <span class="search-icon">搜索店内商品</span>
          </div>
        </div>

        <div class="store-menu-view menu-no-tip">
          <main class="store-main">
            <!--左边分类-->
            <ul class="menu-aside">
              <!--active-parent控制左边栏list父级选中,active-parent-show子级选中 -->
              <li class="menu-category active-parent-show">
                <div class="category-title">
                春游烧烤
                </div>
                <dl class="second-cateList">
                  <dd class="cateList-title">烧烤肉类</dd>
                  <dd class="cateList-title">水果/蔬菜</dd>
                  <dd class="cateList-title">酒水饮料</dd>
                </dl>
              </li>
            </ul>
            <!--分类信息-->
            <section class="container article-coupon-wrap">
              <!--列表内优惠券-->
              <Coupon></Coupon>
              <!--列表内banner图-->
              <div class="banner-list-wrap">
                <a class="banner-box" href=""><img class="a1x" src="https://img30.360buyimg.com/mobilecms/jfs/t4891/21/327258056/207114/8f7ad00e/58df23caN49ddcb7b.jpg" onerror="this.src='//static-o2o.360buyimg.com/daojia/new/images/index_banner_default_2.0.png'"></a>
              </div>
              <div class="fix-title">一次性用品(6)</div>
              <ul class="product-list-wrap">
                <li>
                  <a href="#" class="links-Goods border-b">
                    <img src="https://img30.360buyimg.com/n6//jfs/t2293/38/1264901140/305467/34a6fbf2/568b3e6bN3764f36b.jpg" class="pic" onerror="this.src='//static-o2o.360buyimg.com/daojia/new/images/index_sudoku_default_2.0.png'">
                    <dl>
                      <dt>【满10减5】香菜1把约100g/份</dt>
                      <dd>
                        <span :style="{background:'#FF5959'}">秒杀</span>
                      </dd>
                      <dd class="price-wrap">
                        <label class="real-price">
                          <em>￥</em>0.55
                        </label>
                        <strong class="basic-price">
                          <em>￥</em>2.7
                        </strong>
                      </dd>
                    </dl>
                  </a>
                  <div class="add-cart-wrap">
                    <span class="cart-btn reduce-cart"></span>
                    <label class="num">2</label>
                    <span class="cart-btn add-cart"></span>
                  </div>
                </li>
                <li>
                  <a href="#" class="links-Goods border-b">
                    <img src="https://img30.360buyimg.com/n6//jfs/t2293/38/1264901140/305467/34a6fbf2/568b3e6bN3764f36b.jpg" class="pic" onerror="this.src='//static-o2o.360buyimg.com/daojia/new/images/index_sudoku_default_2.0.png'">
                    <dl>
                      <dt>【满10减5】香菜1把约100g/份</dt>
                      <dd>
                        <span :style="{background:'#FF5959'}">秒杀</span>
                      </dd>
                      <dd class="price-wrap">
                        <label class="real-price">
                          <em>￥</em>0.55
                        </label>
                        <strong class="basic-price">
                          <em>￥</em>2.7
                        </strong>
                      </dd>
                    </dl>
                  </a>
                  <div class="add-cart-wrap">
                    <span class="cart-btn reduce-cart"></span>
                    <label class="num">2</label>
                    <span class="cart-btn add-cart"></span>
                  </div>
                </li>
                <li>
                  <a href="#" class="links-Goods border-b">
                    <img src="https://img30.360buyimg.com/n6//jfs/t2293/38/1264901140/305467/34a6fbf2/568b3e6bN3764f36b.jpg" class="pic" onerror="this.src='//static-o2o.360buyimg.com/daojia/new/images/index_sudoku_default_2.0.png'">
                    <dl>
                      <dt>【满10减5】香菜1把约100g/份</dt>
                      <dd>
                        <span :style="{background:'#FF5959'}">秒杀</span>
                      </dd>
                      <dd class="price-wrap">
                        <label class="real-price">
                          <em>￥</em>0.55
                        </label>
                        <strong class="basic-price">
                          <em>￥</em>2.7
                        </strong>
                      </dd>
                    </dl>
                  </a>
                  <div class="add-cart-wrap">
                    <span class="cart-btn reduce-cart"></span>
                    <label class="num">2</label>
                    <span class="cart-btn add-cart"></span>
                  </div>
                </li>
                <li>
                  <a href="#" class="links-Goods border-b">
                    <img src="https://img30.360buyimg.com/n6//jfs/t2293/38/1264901140/305467/34a6fbf2/568b3e6bN3764f36b.jpg" class="pic" onerror="this.src='//static-o2o.360buyimg.com/daojia/new/images/index_sudoku_default_2.0.png'">
                    <dl>
                      <dt>【满10减5】香菜1把约100g/份</dt>
                      <dd>
                        <span :style="{background:'#FF5959'}">秒杀</span>
                      </dd>
                      <dd class="price-wrap">
                        <label class="real-price">
                          <em>￥</em>0.55
                        </label>
                        <strong class="basic-price">
                          <em>￥</em>2.7
                        </strong>
                      </dd>
                    </dl>
                  </a>
                  <div class="add-cart-wrap">
                    <span class="cart-btn reduce-cart"></span>
                    <label class="num">2</label>
                    <span class="cart-btn add-cart"></span>
                  </div>
                </li>
                <li>
                  <a href="#" class="links-Goods border-b">
                    <img src="https://img30.360buyimg.com/n6//jfs/t2293/38/1264901140/305467/34a6fbf2/568b3e6bN3764f36b.jpg" class="pic" onerror="this.src='//static-o2o.360buyimg.com/daojia/new/images/index_sudoku_default_2.0.png'">
                    <dl>
                      <dt>【满10减5】香菜1把约100g/份</dt>
                      <dd>
                        <span :style="{background:'#FF5959'}">秒杀</span>
                      </dd>
                      <dd class="price-wrap">
                        <label class="real-price">
                          <em>￥</em>0.55
                        </label>
                        <strong class="basic-price">
                          <em>￥</em>2.7
                        </strong>
                      </dd>
                    </dl>
                  </a>
                  <div class="add-cart-wrap">
                    <span class="cart-btn reduce-cart"></span>
                    <label class="num">2</label>
                    <span class="cart-btn add-cart"></span>
                  </div>
                </li>
                <li>
                  <a href="#" class="links-Goods border-b">
                    <img src="https://img30.360buyimg.com/n6//jfs/t2293/38/1264901140/305467/34a6fbf2/568b3e6bN3764f36b.jpg" class="pic" onerror="this.src='//static-o2o.360buyimg.com/daojia/new/images/index_sudoku_default_2.0.png'">
                    <dl>
                      <dt>【满10减5】香菜1把约100g/份</dt>
                      <dd>
                        <span :style="{background:'#FF5959'}">秒杀</span>
                      </dd>
                      <dd class="price-wrap">
                        <label class="real-price">
                          <em>￥</em>0.55
                        </label>
                        <strong class="basic-price">
                          <em>￥</em>2.7
                        </strong>
                      </dd>
                    </dl>
                  </a>
                  <div class="add-cart-wrap">
                    <span class="cart-btn reduce-cart"></span>
                    <label class="num">2</label>
                    <span class="cart-btn add-cart"></span>
                  </div>
                </li>
                <li>
                  <a href="#" class="links-Goods border-b">
                    <img src="https://img30.360buyimg.com/n6//jfs/t2293/38/1264901140/305467/34a6fbf2/568b3e6bN3764f36b.jpg" class="pic" onerror="this.src='//static-o2o.360buyimg.com/daojia/new/images/index_sudoku_default_2.0.png'">
                    <dl>
                      <dt>【满10减5】香菜1把约100g/份</dt>
                      <dd>
                        <span :style="{background:'#FF5959'}">秒杀</span>
                      </dd>
                      <dd class="price-wrap">
                        <label class="real-price">
                          <em>￥</em>0.55
                        </label>
                        <strong class="basic-price">
                          <em>￥</em>2.7
                        </strong>
                      </dd>
                    </dl>
                  </a>
                  <div class="add-cart-wrap">
                    <span class="cart-btn reduce-cart"></span>
                    <label class="num">2</label>
                    <span class="cart-btn add-cart"></span>
                  </div>
                </li>
              </ul>
            </section>
          </main>

        </div>
      </div>
  </div>
<!--公告栏全屏状态-->
<div class="tips-poup-open" v-show="tipsPoup">
  <div class="poup-store-box">
    <div class="store-title">幸福e站鲜花-北京店</div>
    <div class="store-star-box"></div>
    <div class="sale-time-wrap">
      月售单量：<span>9单</span><span class="time-title">营业时间：</span>
      <span>08:30 - 23:59</span>
    </div>
    <dl class="tips-detail border-t">
      <dt>商家公告</dt>
      <dd>
        <u class="mark3"></u>
        <span class="font-txt">民生超市，百姓永辉.</span>
      </dd>
    </dl>
  </div>
  <div class="close-btn" @click="tipsPoupClose">
    <span class="part1"></span>
    <span class="part2"></span>
  </div>
</div>
<!--点击继续购物按钮-->
<div class="goback-store-btn" @click="storeHomeShow" v-show="!storeIsFixed">
  <i></i>
  <span>点击继续购物</span>
</div>
</div>
</template>

<script>
  // import { mapState, mapActions } from 'vuex'
  // import BookCard from '../components/BookCard'
  import Coupon from '../../components/couponStore/Coupon'
  export default {
    data () {
      return {
        title: 'yanchengqu',
        winH: 0,
        tipsPoup: false, // 公告
        storeFollow: false, // 门店关注
        storeIsFixed: true, // 门店定位是否fixed防止滑动
        tagsMoreHide: true, // 直降，满减默认隐藏
        couponReceive: false, // 门店背景列表领券
        tagsText: '查看更多',
        tipsArr: [{
          transform: 'translateY(0)',
          top: 0,
          value: ''
        }]
      }
    },
    components: {
      Coupon
    },
    created () {
      let tipsArr = [
        '7天无条件包退，品质放心，购物无忧。',
        '民生超市，百姓永辉.',
        '我们拼的是价格！'
      ]
      this.tipsArr.length = 0
      tipsArr.forEach((value, idx) => {
        let num = idx * 24
        this.tipsArr.push({
          transform: 'translateY(' + num + 'px)',
          top: num + 'px',
          value: value
        })
      })
    },
    mounted () {
      this.winH = window.innerHeight
      if (this.tipsArr.length > 1) {
        // 公告执行动画
        let Timer = null
        setInterval(() => {
          clearTimeout(Timer)
          this.tipsArr.forEach((obj, index) => {
            let top = parseInt(obj.top) - 24
            obj.top = top + 'px'
            obj.transform = 'translateY(' + top + 'px)'
            obj.transition = 'all 400ms ease-in-out'
            if (top <= -24) {
              Timer = setTimeout(() => {
                let newTop = 24 * (this.tipsArr.length - 1)
                obj.top = newTop + 'px'
                obj.transform = 'translateY(' + newTop + 'px)'
                obj.transition = 'none 100ms ease-in-out'
                console.log('小于了')
              }, 500)
            }
          })
        }, 3000)
      }
      // console.log('dom形成')
    },
    methods: {
      storeStopProp (e) {
        // 门店点击阻止冒泡
        e.stopPropagation()
      },
      tipsClick (e) {
        // 公告点击
        e.stopPropagation()
        this.tipsPoup = true
        console.log('点击')
      },
      tipsPoupClose () {
        // 公告关闭
        this.tipsPoup = false
      },
      storeHomeClick (e) {
        // 门店背景点击
        if (e.srcElement.className.indexOf('store-collection-wrap') > -1 || e.srcElement.className.indexOf('collection-btn') > -1) {
          this.storeFollow = this.storeFollow ? '' : true
          console.log('关注')
        } else {
          this.storeIsFixed = ''
          console.log('门店点击')
        }
      },
      storeHomeShow (e) {
        // 继续购物按钮点击
        this.storeIsFixed = true
      },
      showMoreTags (e) {
        // 直降，满减 查看更多
        e.stopPropagation()
        this.tagsMoreHide = !this.tagsMoreHide
        this.tagsMoreHide ? this.tagsText = '查看更多' : this.tagsText = '点击收起'
        console.log(this.tagsMoreHide)
      }
    }
  }
</script>
<style lang="scss">
  @import "./style.scss";
</style>
