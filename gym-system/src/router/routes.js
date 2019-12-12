import Coach from "../pages/Coach/Coach.vue"
import Order from '../pages/Order/Order.vue'
import Banner from '../pages/Banner/Banner.vue'
import AddBanner from '../pages/Banner/AddBanner/AddBanner.vue'
// import Admin from '../components/Admin/Admin.vue'
import CoachDetail from '../pages/Coach/CoachDetail/CoachDetail.vue'

export default [
  {
    path: "/order",
    component: Order,
    meta:[
      '预约管理'
    ]
  },
  {
    path: "/coach",
    component: Coach,
    meta:[
      '预约管理'
    ]
  },
  {
    path: "/coach/detail",
    component: CoachDetail,
    meta:[
      '预约管理'
    ]
  },
  {
    path: "/banner",
    component: Banner,
    meta:[
      '预约管理'
    ]
  },
  {
    path: "/banner/add",
    component: AddBanner,
    meta:[
      '预约管理'
    ]
  },
  {
    path: '/',
    redirect: '/coach'
  }
]