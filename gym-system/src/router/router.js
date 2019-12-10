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
    path: '/', //重定向
    redirect: '/courseManagement'
  }
]