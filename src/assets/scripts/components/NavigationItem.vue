<template>
  <router-link
    class="navigation-item" :to="path"
    :class="{'active': $parent.currentActiveKey === currentEventKey}">
    <slot></slot>
    <div class="navigation-item-label">
      {{label}}
    </div>
  </router-link>
</template>

<script>
  import TabItem from '../mixins/tabItem'

  export default {
    name: 'navigation-item',
    mixins: [TabItem],
    props: {
      label: String,
      path: String
    }
  }
</script>
