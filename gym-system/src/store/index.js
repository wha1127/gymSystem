import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import goods from './modules/goods'
import coach from './modules/coach'
import order from './modules/order'
import classItem from './modules/classItem'
import member from './modules/member'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    user,
    goods,
    coach,
    order,
    classItem,
    member
  }
})