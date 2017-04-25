
// 获取接口数据

// 迷你购物车 门店购物车数据
export const miniCartInfo = state => state.miniCartInfo

// 当前门店信息，包含 storeId orgCode
export const currentStore = state => state.currentStore

export const isCheckAll = state => {
  let hasUncheck = true

  state.miniCartInfo.itemList.filter((val) => {
    return val.suitType !== 'invalidate'
  }).forEach((item) => {
    hasUncheck = item.skuList.some((sku) => {
      return sku.checkType === 0
    })
  })

  return !hasUncheck
}
