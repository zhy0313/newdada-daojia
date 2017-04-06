<template>
  <div class="">
    <Loader v-if="loading"></Loader>
    <UserCover :userInfo="userInfo"></UserCover>
    <FooterNav :activeKey="4"></FooterNav>
  </div>

</template>

<script>
  import FooterNav from '@/components/FooterNav'
  import Loader from '@/components/Loader'
  import UserCover from '@/components/user/UserCover'

  export default {
    components: {
      FooterNav,
      Loader,
      UserCover
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
