import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import classItem from './modules/classItem.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    classItem
  }
})