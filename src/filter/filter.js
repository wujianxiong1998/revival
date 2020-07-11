import Vue from 'vue'
Vue.filter('handleWords', (val) => {
  if (val) {
    if (val.length > 72) {
      return val.slice(0, 72) + '...'
    }
    return val
  }
})
Vue.filter('filterStar', val => {
  if (val == undefined) {
    return 0
  } else {
    return val
  }
})