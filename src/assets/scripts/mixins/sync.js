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
    // value (val) {
    //   console.log(val)
    //   this.currentValue = val
    // },
    currentValue (val) {
      if (this.disabled) return

      if (isArray(val) && val.length === 0) {
        this.currentValue = undefined

        return
      }
      console.log('setCurrentValue', val)
      // this.$emit('input', val)
      this.$emit('change', val)
    }
  }
}
