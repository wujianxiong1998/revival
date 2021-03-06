import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './filter/filter'
import 'lib-flexible/flexible'
import '@/assets/css/reset.css'
import '@/plugins/vant.js'

axios.defaults.baseURL = 'http://api.wujianxiong.top/api'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
