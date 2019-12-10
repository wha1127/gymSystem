import Login from '../pages/Login/Login.vue'
import Home from '../pages/Home/Home.vue'
import Worker from '../pages/Worker/Worker.vue'
import Gym from '../pages/Gym/Gym.vue'
import Coach from "../pages/Coach/Coach.vue"
import Order from '../pages/Order/Order.vue'
import Banner from '../pages/Banner/Banner.vue'
import AddBanner from '../pages/Banner/AddBanner/AddBanner.vue'
import CoachDetail from '../pages/Coach/CoachDetail/CoachDetail.vue'
import aa from './1.vue'
import bb from './2.vue'
import cc from './3.vue'

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
    path:"/gym",
    component:Gym
  },
  {
    path: "/order",
    component: Order
  },
  {
    path: "/coach",
    component: Coach,
    children: [
      {
        path: "/coach/detail",
        component: CoachDetail
      }
    ]
  },
  {
    path: "/banner",
    component: Banner,
    children: [
      {
        path: "/banner/add",
        component: AddBanner
      }
    ]
  },
  {
    path:"/",
    redirect:"/login"
  }
]