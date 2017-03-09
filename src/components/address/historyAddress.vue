<!-- 历史地址 -->
<template>
  <div>
    <h2>历史搜索记录</h2>
    <ul>
      <li v-for='item in historyData'>
          <p class='list_wrapper'>
              <span class='history-address-tit'>{{item.title}}<i>推荐</i></span>
              <span class='history-address-con'>{{item.address}}</span>
          </p>
      </li>
    </ul>
    <p class='clear-history' v-on:click='clearHistory'>
        <button>清除搜索历史</button>
    </p>
  </div>
</template>

<script>
export default{
  props: {
    historyData: Array
  },
  methods: {
    clearHistory: function () {
      let data = {
        functionId: 'local/delSearchInfos'
      }
      this.$http.get('/client', {params: data}).then(response => {
        this.historyData = {}
        this.$emit('clearHistory')
      }, reposonse => {

      })
    }
  }
}
</script>
