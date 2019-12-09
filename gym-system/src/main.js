import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import Header from './components/Header/Header.vue'

Vue.use(ElementUI)
Vue.component(Header.name,Header)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
