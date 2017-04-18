<template>
  <div>
    <Loader v-if="loading"></Loader>
    <DefaultPageTip v-else-if="orderlist.length == 0"></DefaultPageTip>
    <FooterNav :activeKey="3"></FooterNav>
  </div>
</template>
<script>
  import FooterNav from '@/components/FooterNav'
  import Loader from '@/components/Loader'
  import DefaultPageTip from '@/components/DefaultPageTip'

  export default {
    data () {
      return {
        startIndex: 0,
        orderlist: [],
        loading: true
      }
    },
    components: {
      FooterNav,
      Loader,
      DefaultPageTip
    },
    methods: {
      fetchOrderList () {
        this.$getAPI({
          functionId: 'order/list',
          body: {
            startIndex: this.startIndex,
            dataSize: 10
          }
        }).then((response) => {
          if (response.body.code === '0') {
            console.log('接口成功')
            console.log('response', response.result)
            // this.orderlist.push(response.result)
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
    },
    created () {
      this.fetchOrderList()
    }
  }
</script>

<style lang="scss">

</style>
