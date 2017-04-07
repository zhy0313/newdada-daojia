<template>
  <div class="">
    <Loader v-if="loading"></Loader>
    <UserCover :userInfo="userInfo"></UserCover>
    <UserWallet :userInfo="userInfo"></UserWallet>
    <UserEntrance></UserEntrance>
    <FooterNav :activeKey="4"></FooterNav>
  </div>

</template>

<script>
  import FooterNav from '@/components/FooterNav'
  import Loader from '@/components/Loader'
  import UserCover from '@/components/user/UserCover'
  import UserWallet from '@/components/user/UserWallet'
  import UserEntrance from '@/components/user/UserEntrance'

  export default {
    components: {
      FooterNav,
      Loader,
      UserCover,
      UserWallet,
      UserEntrance
    },
    data () {
      return {
        loading: true,
        userInfo: {}
      }
    },
    created () {
      this.$postAPI({
        // functionId: 'login/testLogin'
        functionId: 'user/getUserInfo',
        body: { }
      }).then((response) => {
        if (response.body.code === '0') {
          console.log('接口成功')
          console.log('response', response.result)
          this.userInfo = response.result
        } else {
          console.log('接口失败', response.body)
        }
        this.loading = false
        // this.$loading.toggle()
        this.$toast({message: response.body.msg, position: 'center'})
      }, (err) => {
        console.log('err', err)
      })
    }
  }
</script>

<style lang="scss">
</style>
