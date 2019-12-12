import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import goods from './modules/goods'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    user,
    goods
  }
})