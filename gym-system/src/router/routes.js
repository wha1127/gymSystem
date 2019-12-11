// 引入路由组件
import Commodity from "../pages/commodity/commodity.vue"
import Order from "../pages/order/order.vue"
import Detail from "../pages/order/detail/detail.vue"
import Merchandise from "../pages/commodity/merchandise/merchandise.vue"
import Genre from "../pages/genre/genre.vue"
// 并暴露路由的数组配置
export default [
  {
    //商品管理
    path: '/home/commodity',
    component: Commodity
  },
  {
    //编辑商品
    path: '/home/merchandise',
    component: Merchandise
  },
  {
    //订单管理
    path: '/home/order',
    component: Order
  },
  {
    //查看订单详情
    path: '/home/detail',
    component: Detail
  },
  {
    path: '/home/genre',
    component: Genre
  },
  {
    path: '/',
    redirect: '/home/commodity'
  }
]
