import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'
import App from './App.vue';
import Header from './components/Header/Header.vue'
import store from '../src/store/index'
Vue.use(ElementUI);
Vue.component(Header.name, Header)
Vue.config.productionTip = false

new Vue ({
  el:"#app",
  router,
  store,
  components:{
    App
  },
  template:'<App/>'
})
