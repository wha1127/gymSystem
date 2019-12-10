import {RECEIVE_TOKEN,RECEIVE_USER} from '../mutaiton-type'
import {reqAutoLogin} from '../../api'
const state = {
  token: localStorage.getItem('token_key'),
  user: {}
}

const mutations = {
  [RECEIVE_USER](state,user){
    state.user = user
  },
  [RECEIVE_TOKEN](state,token){
    state.token = token
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
  }
} 

const getters = {}

export default {
  mutations,
  getters,
  actions,
  state
}