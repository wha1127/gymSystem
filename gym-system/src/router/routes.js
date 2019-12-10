import Login from '../pages/Login/Login.vue'
import Home from '../pages/Home/Home.vue'
import Worker from '../pages/Worker/Worker.vue'
import Gym from '../pages/Gym/Gym.vue'
import Coach from "../pages/Coach/Coach.vue"
import Order from '../pages/Order/Order.vue'
import Banner from '../pages/Banner/Banner.vue'
import AddBanner from '../pages/Banner/AddBanner/AddBanner.vue'
import CoachDetail from '../pages/Coach/CoachDetail/CoachDetail.vue'
//课程管理
import Activity from '../pages/activity'
//课程表
import CourseManagement from '../pages/courseManagement'
//活动管理
import TimeTable from '../pages/timeTable'
//班级列表
import ClassList from '../pages/courseManagement/classList'
// 编辑课程
import EditingCourse from '../pages/courseManagement/editingCourse'
//编辑班级 三级路由
import RedactClass from '../pages/courseManagement/classList/redactClass'

export default [
  {
    path:"/login",
    component:Login
  },
  {
    path:"/home",
    component:Home,
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
    path: '/activity',
    component: Activity
  },

  {
    path: '/courseManagement',
    component: CourseManagement
  },
  {
    path: '/redactClass',
    component: RedactClass
  },
  {
    path: '/classList',
    component: ClassList,
  },
  {
    path: '/editingCourse',
    component: EditingCourse
  },
  {
    path: '/timeTable',
    component: TimeTable
  },
  {
    path:"/",
    redirect:"/home"
  }
]