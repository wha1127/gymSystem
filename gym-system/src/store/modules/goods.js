import { reqAddGoods, reqGetGoods, reqDeleteGoods } from "../../api"
import { ADD_GOODS, GET_GOODS, DELE_GOODS } from "../mutations-type.js"
const state = {
  good: []
}
const mutations = {
  //添加商品
  [ADD_GOODS] (state, goods) {
    state.good.push(goods)
  },
  //获取商品
  [GET_GOODS] (state, good) {
    state.good = good
  },
  //删除商品
  [DELE_GOODS] (state, id) {
    let good = []
    state.good.forEach(item => {
      if (item._id !== id) {
        good.push(item)
      }
    });
    state.good = good
  }
}
const actions = {
  async addgoods ({ commit }, { name, type, price, points }) {
    const result = await reqAddGoods({ name, type, price, points })
    if (result.data.status === 0) {
      commit(ADD_GOODS, result.data.data)
    }
  },
  async getgood ({ commit }) {
    const result = await reqGetGoods()
    if (result.data.status === 0) {
      commit(GET_GOODS, result.data.data)
    }
  },
  async deletegoods ({ commit }, id) {
    const result = await reqDeleteGoods(id)
    if (result.data.status === 0) {
      commit(DELE_GOODS, id)
    }
  }
}
export default {
  state,
  mutations,
  actions
}
