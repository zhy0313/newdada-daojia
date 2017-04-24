import { isArray } from '../utils/type'

export default {
  props: {
    value: {},
    disabled: Boolean
  },
  data () {
    return {
      currentValue: this.value,
      isAdd: false
    }
  },
  watch: {
    // value (val) {
    //   console.log('set value', val)
    //   this.currentValue = val
    // },
    currentValue (val) {
      if (this.disabled) return

      if (isArray(val) && val.length === 0) {
        this.currentValue = undefined

        return
      }

      console.log('setCurrentValue', val, this.value, this.isAdd)
      // this.$emit('input', val)
      //
      if ((this.isAdd && val > this.value) ||
          !this.isAdd && val < this.value) {
        console.log('change value sync')
        this.$emit('change', val)
      }
    }
  }
}
