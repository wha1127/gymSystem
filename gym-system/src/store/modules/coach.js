import { RECEIVE_COACHES, ADD_COACH, UPDATE_COACH, DELETE_COACH } from '../mutation-type'
import { reqCoach, reqAddCoach, reqDeleteCoach } from '../../api'
const state = {
  coaches: []
}

const mutations = {
  [RECEIVE_COACHES] (state, coaches) {
    state.coaches = coaches
  },
  [ADD_COACH] (state, coach) {
    state.coaches.push(coach)
  },
  [UPDATE_COACH] (state, coach) {
    state.coach = coach
  },
  [DELETE_COACH] (state, coach) {
    state.coach = coach
  }
}

const actions = {
  //获取教练信息
  async getCoaches ({ commit }) {
    const result = await reqCoach()
    // console.log(result)
    if (result.data.status === 0) {
      const coaches = result.data.data
      commit(RECEIVE_COACHES, coaches)
    } else {
      console.log("获取教练信息出错")
    }
  },

  //添加教练信息
  async addCoach ({ commit },coach) {
    const result = await reqAddCoach(coach)
    // console.log(result)
    if (result.data.status === 0) {
      const coach = result.data.data
      console.log(coach)
      commit(ADD_COACH, coach)
    } else {
      console.log("添加教练信息出错")
    }
  },

  //删除教练信息
  async delCoach ({commit},name) {
    const result = await reqDeleteCoach(name)
    console.log(result)
    if(result.data.status === 0){
      console.log("删除成功")
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