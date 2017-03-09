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
    </flex>
</template>
<script>
export default {
  created () {
    // 实例外部使用 Vue.postAPI
    this.$getAPI({
      functionId: 'login/testLogin',
      body: {jdPin: 'jd_57593b3c2bc17'}
    }).then((response) => {
      console.log(response)
    }, (err) => {
      console.log('err', err)
    })

    // 实例外部使用 Vue.postAPI
    this.$postAPI({
      functionId: 'user/getUserInfo',
      body: {}
    }).then((response) => {
      console.log(response)
    }, (err) => {
      console.log('err', err)
    })
  }
}
</script>
