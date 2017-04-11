import * as cookie from './cookie'
import * as storage from './storage'

console.log('PDJ_H5_MOBILE', cookie.getCookie('PDJ_H5_MOBILE'))
console.log('PDJ_H5_JDPIN', cookie.getCookie('PDJ_H5_JDPIN'))
console.log('PDJ_H5_PIN', cookie.getCookie('PDJ_H5_PIN'))
console.log('sid', cookie.getCookie('sid'))
console.log('o2o_m_h5_sid', cookie.getCookie('o2o_m_h5_sid'))
console.log('deviceid_pdj_jd', cookie.getCookie('deviceid_pdj_jd'))

console.log('a', storage.sessionStorage.getItem('a'))
console.log('b', storage.sessionStorage.getItem('b'))
export default {
  ...cookie,
  ...storage
}
