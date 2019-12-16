import Login from '../pages/Login/Login.vue'
import Home from '../pages/Home/Home.vue'
import Worker from '../pages/Worker/Worker.vue'
import Gym from '../pages/Gym/Gym.vue'
import Coach from "../pages/Coach/Coach.vue"
import Order from '../pages/Order/Order.vue'
import Banner from '../pages/Banner/Banner.vue'
import AddBanner from '../pages/Banner/AddBanner/AddBanner.vue'
import CoachDetail from '../pages/Coach/CoachDetail/CoachDetail.vue'
import Commodity from "../pages/commodity/commodity.vue"
import GoodsOrder from "../pages/goodsOrder/order.vue"
import Detail from "../pages/goodsOrder/detail/detail.vue"
import Merchandise from "../pages/commodity/merchandise/merchandise.vue"
import Genre from "../pages/genre/genre.vue"
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
import GymEdit from '../pages/Gym/GymEdit/GymEdit.vue'
import Admission from '../pages/Admission/Admission.vue'
import Member from '../pages/Member/Member.vue'
import Bianji from '../pages/Member/Bianji/Bianji.vue'
import Person from '../pages/Person/Person.vue'
import List from '../pages/List/List.vue'
import MemberList from '../pages/List/Member/Member.vue'
export default [
  {
    path:"/login",
    component:Login,
  },
  {
    path:"/home",
    component:Home,
  },
  {
    path:"/worker",
    component:Worker,
  },
  {
    path:"/gym",
    component:Gym,
    meta:'场馆管理'
  },
  {
    path: "/order",
    component: Order
  },
  {
    path:'/gym/gymedit',
    component:GymEdit
  },
  {
    path: "/coach",
    component: Coach,
  },
  {
    path: "/coach/detail",
    component: CoachDetail
  },
  {
    path: "/banner",
    component: Banner,
    meta:'banner管理',

  },
  {
    path: "/banner/add",
    component: AddBanner
  },
  {
    path: '/activity',
    component: Activity,
    meta:'活动编辑'
  },

  {
    path: '/courseManagement',
    component: CourseManagement,
    meta:'课程管理'
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
    component: TimeTable,
    meta:'课程表'
  },
  {
    //商品管理
    path: '/commodity',
    component: Commodity
  },
  {
    //编辑商品
    path: '/merchandise',
    component: Merchandise
  },
  {
    //订单管理
    path: '/goodsorder',
    component: GoodsOrder
  },
  {
    //查看订单详情
    path: '/detail',
    component: Detail
  },
  {
    path: '/genre',
    component: Genre
  },
  {
    path: '/Admission',
    component: Admission,
    meta:'入场管理'
  },
  {
    path: '/Member',
    component: Member,
    meta:'会员卡管理'
  },
  {
    path: '/Bianji',
    component: Bianji
  },
  {
    path:'/person',
    component:Person
  },
  {
    path:'/list',
    component:List
  },
  {
    path:'/memberlist',
    component:MemberList
  },
  {
    path:"/",
    redirect:"/home"
  }
]