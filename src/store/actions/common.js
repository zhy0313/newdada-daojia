import * as MutationTypes from '@/store/mutation-types'

// 查询购物车接口
// 要求传入参数 {storeId: this.storeId, orgCode: this.orgCode}
export const setCurrentStore = ({ commit }, options) => {
  commit(MutationTypes.CURRENT_STORE_INFO, options)
}
