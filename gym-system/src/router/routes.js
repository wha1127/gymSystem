import Coach from "../pages/Coach/Coach.vue"
import Order from '../pages/Order/Order.vue'
import Banner from '../pages/Banner/Banner.vue'
// import Admin from '../components/Admin/Admin.vue'
import CoachDetail from '../pages/Coach/CoachDetail/CoachDetail.vue'

export default [
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
    component: Banner
  },
  // {
  //   path: "/coach/detail",
  //   component: CoachDetail
  // },
  {
    path: '/',
    redirect: '/coach'
  }
]