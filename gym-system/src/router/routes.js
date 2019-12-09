import Login from '../pages/Login/Login.vue'
import Home from '../pages/Home/Home.vue'
import Worker from '../pages/Worker/Worker.vue'
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
    path:"/worker",
    component:Worker
  },
  {
    path:"/",
    redirect:"/login"
  }
]