// 引入Vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入routers
import routes from './routes'
// 声明使用
Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes
})