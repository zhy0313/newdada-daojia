<template>
    <flex direction="column">
        <navbar>
            <h5 slot="body">vue-impression</h5>
        </navbar>
        <flex-item>
            <group-title>Hello, impression!</group-title>
            <group>
                <cell to="counter">Counter</cell>
                <cell to="square">Square</cell>
                <cell to="search">search</cell>
            </group>
        </flex-item>
        <router-link to="/address"><p style="height:40px;line-height:40px;">进行地址选择</p></router-link>
        <FooterNav></FooterNav>
    </flex>
</template>
<script>
import FooterNav from '@/components/FooterNav'

export default {
  components: {
    FooterNav
  },
  created () {
    // 实例外部使用 Vue.postAPI
    this.$getAPI({
      // functionId: 'login/testLogin'
      functionId: 'login/testLogin',
      body: {jdPin: 'jd_57593b3c2bc17'}
    }).then((response) => {
      if (response.body.code === '0') {
        console.log('接口成功')
        console.log('response', response.result)
      } else {
        console.log('接口失败', response.body)
      }
      this.$toast({message: response.body.msg, position: 'center'})
    }, (err) => {
      console.log('err', err)
    })

    // 实例外部使用 Vue.postAPI
    this.$postAPI({
      functionId: 'user/getUserInfo',
      body: {}
    }).then((response) => {
      console.log('response', response.result)
    }, (err) => {
      console.log('err', err)
    })
  }
}
</script>
