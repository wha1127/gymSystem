import Login from '../pages/Login/Login.vue'
import Home from '../pages/Home/Home.vue'
export default [
  {
    path:"/login",
    component:Login
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/",
    redirect:"/login"
  }
]