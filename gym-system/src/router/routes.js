// 引入路由组件
import Worker from '../components/Worker.vue'
import Person from '../components/Person.vue'
import Member from '../components/Member.vue'
import List from '../components/List.vue'
// 暴露路由数组配置
export default [
  {
    path: '/worker',
    component: Worker
  },
  {
    path: '/person',
    component: Person
  },
  {
    path:'/member',
    component: Member
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/',
    redirect: '/person'
  },
]