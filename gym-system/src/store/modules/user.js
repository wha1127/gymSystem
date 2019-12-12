import {RECEIVE_TOKEN,RECEIVE_USER,RECEIVE_STAFF} from '../mutation-type'
import {reqAutoLogin,reqRoleList} from '../../api'
const state = {
  token: localStorage.getItem('token_key'),
  user: {},
  staff:[]
}

const mutations = {
  [RECEIVE_USER](state,user){
    state.user = user
  },
  [RECEIVE_TOKEN](state,token){
    state.token = token
  },
  [RECEIVE_STAFF](state,staff){
    state.staff = staff
  }
}

const actions = {
  saveUser({commit},user){
    const token = user.token
    commit(RECEIVE_TOKEN,token)
    localStorage.setItem('token_key',token)
    delete user.token
    commit(RECEIVE_USER,user)
  },
  async autoLogin({commit,state}){
    if(state.token){
      const result = await reqAutoLogin()
      if(result.data.code === 0){
        const user = result.data.data
        commit(RECEIVE_USER, user)
      }
    }
  },
  async saveStaff({commit}){
    const result = await reqRoleList()
    console.log(result)
    if(result.data.status === 0){
      const staff = result.data.data
      commit(RECEIVE_STAFF,staff)
    }
  }
} 

const getters = {
  menus(){
    return state.staff.map(item => {
      item.menus = item.menus+','
      return item
    })
  }
}

export default {
  mutations,
  getters,
  actions,
  state
}