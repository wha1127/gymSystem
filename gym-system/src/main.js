import Vue from 'vue'
import App from './App.vue'

//引入路由并 注册
import router from './router'
// 引入store 使用vuex
import store from './store'
/* // 引入表单验证
import './vee-validate' */
//引入ElementUI
import {
  Button, Table, TableColumn, Input, InputNumber, Select, Option, Card, DatePicker,
  Checkbox, TimeSelect, TimePicker, Tag, Upload, FormItem, Form, Dialog, MessageBox
} from 'element-ui'
//将头部注册为全局组件
import Header from './components/Header/Header.vue'
import Split from './components/Split/Split.vue'
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.prototype.$alert = MessageBox.alert;
Vue.config.productionTip = false
//声明使用 elementUi

Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Select)
Vue.use(Option)
Vue.use(Card)
Vue.use(DatePicker)
Vue.use(Checkbox)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Tag)
Vue.use(Upload)
Vue.component(Header.name, Header)
Vue.component(Split.name, Split)
new Vue({

  router,
  store, //注册vuex
  render: h => h(App),
}).$mount('#app')
