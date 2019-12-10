//引入 vue
import Vue from 'vue'
//引入 vueRouter
import VueRouter from 'vue-router'
//引入router文件
import routes from './router.js'

//声明插件
Vue.use(VueRouter)

//暴露路由器
export default new VueRouter({
  mode: 'history',
  routes
})