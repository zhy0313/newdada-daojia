<template lang="html">
  <div class="pay-wrapper">
      <div class="pay-header">
          <div class="pay-last-time-wrapper border-l border-r">
              <span class="last-time-title">剩余支付时间</span><span class="pay-last-time">00:00</span>
          </div>
          <div class="pay-store">
              <i class="store-top-bg"></i>
              <i class="store-left-bg"></i>
              <i class="store-right-bg"></i>
              <i class="store-bottom-bg"></i>
              <span class="store-name">dsds</span>
              <span class="store-account">￥<i>3.0</i></span>
          </div>
      </div>
      <p class="pay-title border-b">请选择支付方式</p>
      <ul></ul>
      <p class="dj-pay-desc"><span>马上支付，可领取分享红包。</span></p>
      <p class="pay-button">
          <button isSending="no" class="disable">确认支付<i>￥</i><em>0.00</em></button>
      </p>
      <p class="pay-button-confirm none">
          <button class="finish">已完成支付</button>
          <span></span>
          <button class="refresh" isSending="no">重新支付</button>
      </p>
  </div>
  <!-- <div class="daipay-masker">
      <img src="http://teststatic.jd.com/daojia/new/images/pay/share_guide.png" class="daipay-share-guide"/>
      <img src="http://teststatic.jd.com/daojia/new/images/pay/btn_know.png" class="daipay-share-know"/>
  </div> -->
</template>

<script>
export default {
  created () {
    var data = {
      params: {
        functionId: 'cashier/initCashierPageInfo',
        body: {
          'token': 'UlM3gd+vrHwuanrls9hK/h4Dnu6LrjZYAB3lrbh5EYbOb5FqxbeGSqtjQLPZkHVrFU4EbkvLxJ9x5VMW3omWCkwRgIJk/UFySmnsRm1nSnPYQoJBnINzmZZ8ZchI2ADhbghXBRH6uKIC9xFXXqaBGJXi6VSAniMI/zOvJKaAEnI='
        }
      }
    }
    this.$http.post('/client', data)
    .then((response) => {
      console.log(response)
    }).catch(() => {

    })
  }
}
</script>

<style lang="scss">@import '../css/cashier.scss';</style>
