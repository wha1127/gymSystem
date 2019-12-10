import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Header from './components/Header/Header'
import store from './store'
Vue.use(ElementUI)
Vue.component(Header.name,Header)
Vue.config.productionTip = false

new Vue({
  el:'#app',
  components:{App},
  template:'<App/>',
  router,
  store
})
