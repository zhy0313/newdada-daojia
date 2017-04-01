<template>
  <div
    @click="$emit('click')"
    class="badge"
    :class="{'badge-gap': $slots.default}">
    <slot></slot>
    <div v-if="show" class="badge-addon" :class="'bg-' + theme">{{content}}</div>
  </div>
</template>

<script>
  export default {
    name: 'badge',
    props: {
      // 内容
      content: {},
      show: {
        type: Boolean,
        default: true
      },
      // 主题
      theme: {
        type: String,
        default: 'primary',
        validator (value) {
          return ['primary', 'secondary', 'success', 'warning', 'danger'].indexOf(value) > -1
        }
      }
    }
  }
</script>
