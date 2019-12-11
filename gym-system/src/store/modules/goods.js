import { reqGetGoods, reqAddGoods } from "../../api"
import { GET_GOODS, ADD_GOODS } from "../mutations-type.js"
const state = {
  goods: null
}
const mutations = {
  [GET_GOODS] (state, goods) {
    state.goods = goods
  },
  [ADD_GOODS] (state, goods) {
    state.goods = goods
  }
}
const actions = {
  async getggoods ({ commit }) {
    const result = await reqGetGoods()
    if (result.data.status === 0) {
      console.log(333)
      commit(GET_GOODS, result.data.data)
    }
  },
  async addgoods ({ commit }, { name, type, price, point }) {
    const result = await reqAddGoods({ name, type, price, point })
    console.log(result.data, { name, type, price, point })
    if (result.data.status === 0) {
      console.log(111)
      commit(ADD_GOODS, result.data.data)
    }
  }
}
export default {
  state,
  mutations,
  actions
}
