// 引入路由文件
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





// 暴露路由的数组配置
export default [
  {
    path: '/activity',
    component: Activity,
    meta: ['活动列表']
  },

  {
    path: '/courseManagement',
    component: CourseManagement,
    meta: ['课程列表']
  },
  {
    path: '/redactClass',
    component: RedactClass,
    meta: ['编辑班级']
  },
  {
    path: '/classList',
    component: ClassList,
    meta: ['瑜伽课班级列表']
  },
  {
    path: '/editingCourse',
    component: EditingCourse,
    meta: ['编辑课程']
  },
  {
    path: '/timeTable',
    component: TimeTable,
    meta: ['课程表']
  },
  {
    path: '/', //重定向
    redirect: '/courseManagement'
  }
]