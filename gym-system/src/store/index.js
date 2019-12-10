import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
//使用vuex
Vue.use(Vuex)

//暴露
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})