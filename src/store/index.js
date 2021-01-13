import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageShow: true
  },
  mutations: {
    checkUser (state, pageShow) {
      state.pageShow = pageShow
    }
  },
  actions: {
    changePageShow (store, params) {
      store.commit('checkUser', params.pageShow);
    }
  },
  modules: {
  }
})
