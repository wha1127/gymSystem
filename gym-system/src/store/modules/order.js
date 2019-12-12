import { RECEIVE_ORDERS } from '../mutation-type'
import { reqOrder } from '../../api'
const state = {
  orders: []
}

const mutations = {
  [RECEIVE_ORDERS ] (state, orders) {
    state.orders = orders
  }
}

const actions = {
  //获取教练信息
  async getOrders ({ commit }) {
    const result = await reqOrder()
    // console.log(result)
    if (result.data.status === 0) {
      const orders = result.data.data
      commit(RECEIVE_ORDERS, orders)
    } else {
      console.log("获取预约信息出错")
    }
  }
}

const getters = {}

export default {
  mutations,
  getters,
  actions,
  state
}