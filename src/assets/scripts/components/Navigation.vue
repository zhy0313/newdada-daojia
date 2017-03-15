<template>
  <div class="navigation">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'navigation',
    props: {
      activeKey: {
        default: 0
      }
    },
    data () {
      return {
        currentActiveKey: this.activeKey
      }
    }
  }
</script>
