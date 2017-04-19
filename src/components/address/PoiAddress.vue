<!-- poi地址 -->
<template>
  <ul>
    <li v-for='item in poiAddress'>
        <p class='list_wrapper'>
            <span class='history-address-tit'>{{item.title}}</span>
            <span class='history-address-con'>{{item.address}}</span>
        </p>
    </li>
  </ul>
</template>

<script>
export default{
  props: {
    poiAddress: Array
  }
}
</script>
