import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'lib-flexible/flexible'
import '@/assets/css/reset.css'
import '@/plugins/vant.js'

axios.defaults.baseURL = 'http://api.wujianxiong.top'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
