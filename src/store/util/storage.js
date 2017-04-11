
const store = (type) => {
  let data = {}
  let storeEnabled = false

  try {
    type.setItem('a', 'a')
    storeEnabled = true
  } catch (e) { }

  return {
    getItem (key) {
      let value = ''

      if (storeEnabled) {
        try {
          value = JSON.parse(type.getItem(key))
        } catch (e) {
          value = type.getItem(key)
        }
      } else {
        value = data[key]
      }

      return value || ''
    },
    setItem (key, value) {
      if (storeEnabled) {
        type.setItem(key, JSON.stringify(value))
      } else {
        data[key] = JSON.stringify(value)
      }
    },
    removeItem (key) {
      if (storeEnabled) {
        type.removeItem(key)
      } else {
        delete data[key]
      }
    }
  }
}

export const sessionStorage = store(window.sessionStorage)
export const localStorage = store(window.localStorage)
