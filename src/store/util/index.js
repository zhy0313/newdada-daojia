import * as cookie from './cookie'
import * as storage from './storage'

console.log('PDJ_H5_MOBILE', cookie.getCookie('PDJ_H5_MOBILE'))
console.log('PDJ_H5_JDPIN', cookie.getCookie('PDJ_H5_JDPIN'))
console.log('PDJ_H5_PIN', cookie.getCookie('PDJ_H5_PIN'))
console.log('sid', cookie.getCookie('sid'))
console.log('o2o_m_h5_sid', cookie.getCookie('o2o_m_h5_sid'))
console.log('deviceid_pdj_jd', cookie.getCookie('deviceid_pdj_jd'))

console.log('sessionStorage: a', storage.sessionStorage.getItem('a'))
console.log('sessionStorage: b', storage.sessionStorage.getItem('b'))
console.log('localStorage: a', storage.localStorage.getItem('a'))
console.log('localStorage: b', storage.localStorage.getItem('b'))
export default {
  ...cookie,
  ...storage
}
