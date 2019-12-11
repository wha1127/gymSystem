import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import coach from './modules/coach'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    user,
    coach
  }
})