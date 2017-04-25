import { isArray } from '../utils/type'

export default {
  props: {
    value: {},
    disabled: Boolean
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value (val) {
      console.log('set value', val)
      this.currentValue = val
    },
    currentValue (val) {
      if (this.disabled) return

      if (isArray(val) && val.length === 0) {
        this.currentValue = undefined
        return
      }

      if (val === this.value) {
        return
      }

      console.log('setCurrentValue value sync', val, this.value)
      this.$emit('change', val)
    }
  }
}
