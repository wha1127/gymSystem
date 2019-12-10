// 引入vue
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// 申明使用插件
Vue.use(VueRouter)
// 暴露路由
export default new VueRouter({
  mode: 'history',
  routes
})