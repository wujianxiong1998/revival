import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topdatas: []
  },
  mutations: {
    // 写入top留言
    vuexTopdata(state, val) {
      state.topdatas = val
    }
  },
  actions: {
  },
  modules: {
  }
})
