<template>
  <div class="">
    <Loader></Loader>
    <FooterNav :activeKey="1"></FooterNav>

  </div>

</template>

<script>
  import FooterNav from '@/components/FooterNav'
  import Loader from '@/components/Loader'

  export default {
    components: {
      FooterNav,
      Loader
    },
    created () {
      let page = 0
      let careType = 1
      let address = {
        cityId: 1,
        longitude: 116.50628,
        latitude: 39.79311
      }

      this.$getAPI({
        // functionId: 'login/testLogin'
        functionId: 'feed/pagelist',
        body: {
          pageSize: 10,
          currentPage: page || 0,
          careType: careType,
          cityId: address.cityId,
          longitude: address.longitude,
          latitude: address.latitude
        }
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
