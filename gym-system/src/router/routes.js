import Coach from "../pages/Coach/Coach.vue"
import Order from '../pages/Order/Order.vue'
import Banner from '../pages/Banner/Banner.vue'
import AddBanner from '../pages/Banner/AddBanner/AddBanner.vue'
// import Admin from '../components/Admin/Admin.vue'
import CoachDetail from '../pages/Coach/CoachDetail/CoachDetail.vue'

export default [
  {
    path: "/order",
    component: Order
  },
  {
    path: "/coach",
    component: Coach
  },
  {
    path: "/coach/detail",
    component: CoachDetail
  },
  {
    path: "/banner",
    component: Banner
  },
  {
    path: "/banner/add",
    component: AddBanner
  },
  {
    path: '/',
    redirect: '/coach'
  }
]