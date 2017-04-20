import * as MutationTypes from '../mutation-types'

export default {
  [MutationTypes.LOADING] (state, isLoading) {
    state.isLoading = isLoading
  },
  [MutationTypes.CART_QUERY_SINGLE_CART] (state, miniCartInfo) {
    state.miniCartInfo = miniCartInfo
  }
}
