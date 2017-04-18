import * as storage from './storage'

var Address = {
  // 获取当前地址
  getCurrentUse: function (options) {
    var needLocate = options.needLocate
    if (needLocate) {
      // 需要重新定位
      var geolocation = new qq.maps.Geolocation('TVABZ-XEVAX-M6E4K-ZAUPQ-L5U7O-OPB6P', 'jddjapp')
      geolocation.getLocation(function (address) {

      }, function () {})
    }
  },
  // 获取地址
  getLocalCurrent: function () {
    var address = Address.currnt_ || storage.sessionStorage.getItem(Address.key_)
    return address
  },
  // 缓存地址
  saveLocalCurrent: function (address) {
    Address.currnt_ = Address.formateAddressDate(address)
    storage.sessionStorage.setItem(Address.key_, address)
  },
  // 清除当前地址
  clearCurrentAddress: function () {
    delete Address.currnt_
    storage.sessionStorage.removeItem(Address.key_)
  },
  // 格式化地址对象
  formateAddressDate: function (address) {
    address = Object.extend(address, {
      cityId: address.cityId || address.cityCode || address.areaCode || 0,
      city: address.city || address.cityName,
      district: address.district || address.countyName,
      districtCode: address.districtCode || address.countyId,
      address: address.address || address.addressName,
      title: address.title || address.poi
    })
    return address
  }

}
