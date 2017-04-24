import * as minicart from './minicart'
import * as common from './common'
// 状态事件传参数

// export const loading = ({ commit }, payload) => commit(MutationTypes.LOADING, payload)

export default {
  ...common,
  ...minicart
}
