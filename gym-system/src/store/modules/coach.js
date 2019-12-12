import { RECEIVE_COACHES, ADD_COACH, UPDATE_COACH, DELETE_COACH, SEARCH_COACH ,UPDATE_ID} from '../mutation-type'
import { reqCoach, reqAddCoach, reqDeleteCoach, reqUpdateCoach } from '../../api'
const state = {
  coaches: [],
  id: null
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
  [DELETE_COACH] (state, id) {
    const coaches = state.coaches.filter(item => (item._id !== id))
    state.coaches = coaches
  },
  // [DELETE_COACH] (state, id) {
  //   const newCoaches =[]
  //   state.coaches.forEach(item => {
  //     if(item._id !== id){
  //       newCoaches.push(item)
  //     }
  //   })
  //   state.coaches = newCoaches
  // },
  [SEARCH_COACH] (state, coaches) {
    state.coaches = coaches
  },

  [UPDATE_ID](state,id){
    state.id = id
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
  async addCoach ({ commit }, coach) {
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
  async delCoach ({ commit }, id) {
    const result = await reqDeleteCoach(id)
    console.log(result)
    if (result.data.status === 0) {
      console.log(result.data)
      commit(DELETE_COACH, id)
    }
  },
  //更新教练信息
  async updateCoach ({ commit }, coach) {
    const result = await reqUpdateCoach(coach)
    if (result.data.status === 0) {
      console.log("更新成功")
      console.log(result.data.data)
    } else {
      console.log("数据更新失败")
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