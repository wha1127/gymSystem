// 引入路由组件
import Commodity from "../pages/commodity/commodity.vue"
import Order from "../pages/order/order.vue"
import Detail from "../pages/order/detail/detail.vue"
// 并暴露路由的数组配置
export default [
  {
    path: '/home/commodity',
    component: Commodity
  },
  {
    path: '/home/order',
    component: Order,
    children: [
      {
        path: '/home/order/detail',
        component: Detail
      }
    ]
  },
  {
    path: '/',
    redirect: '/home/commodity'
  }
]
