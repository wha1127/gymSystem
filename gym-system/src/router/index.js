// 引入Vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入routers
import routes from './routes'
import store from '../store'
// 声明使用
Vue.use(VueRouter)

const router =  new VueRouter({
  mode:'history',
  routes
})
const paths = ["/home","/worker","/gym","/order","/coach","/banner",'/activity','/courseManagement','/redactClass','/classList','/editingCourse','/timeTable',]
router.beforeEach((to,from,next) => {
  
  if(paths.indexOf(to.path) !== -1){
    if(!store.state.user.token){
      router.push('/login')
    }
  } 
  if(to.path === '/login'){
    
    if(store.state.user.token){
      router.push('home')
    }
  }
  next()
})

export default router