import Vue from 'vue'
import App from './App.vue'
//引入element-ui
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入路由
import router from './router/index.js'
//引入store
import store from './store/index.js'
Vue.config.productionTip = false
// new Vue({
//   render: h => h(App),
// }).$mount('#app')


Vue.use(ElementUI)

//在脚手架3中使用脚手架2的配置,需要在vue.config.js中配置esm.js这个文件
//跨域需要在vue.config.js中配置devServer中的proxy代理
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})


// new Vue({
//   render: h => h(App),
// }).$mount('#app')

