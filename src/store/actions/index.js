import * as minicart from './minicart'
// 状态事件传参数

// export const loading = ({ commit }, payload) => commit(MutationTypes.LOADING, payload)

export default {
  ...minicart
}

// 接口数据操作
// export const querySingleCart = ({ commit }, storeId, orgCode) => {
//   // console.log('querySingleCart()')
//   Vue.getAPI({
//     functionId: 'cartV3_3_0/querySingleCart',
//     body: {
//       storeId: storeId,
//       orgCode: orgCode,
//       positionType: 2
//     }
//   }).then((response) => {
//     if (response.body.code === '0') {
//       commit(MutationTypes.QUERY_SINGLE_CART, response.result)
//       // this.miniCartInfo = response.result
//     } else {
//       Vue.$toast({message: response.body.msg})
//     }
//   })
// }
// commit(MutationTypes.QUERY_SINGLE_CART)
// querySingleCart = (storeId, orgCode) => {
//   console.log('querySingleCart()')
//   Vue.getAPI({
//     functionId: 'cartV3_3_0/querySingleCart',
//     body: {
//       storeId: storeId,
//       orgCode: orgCode,
//       positionType: 2
//     }
//   }).then((response) => {
//     if (response.body.code === '0') {
//       store.commit(MutationTypes.QUERY_SINGLE_CART, response.result)
//       // this.miniCartInfo = response.result
//     } else {
//       Vue.$toast({message: response.body.msg})
//     }
//   })
// }
