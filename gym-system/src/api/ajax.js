import axios from 'axios'
import qs from 'qs'
import store from '../store'

axios.interceptors.request.use((config) => {
  const {method, data} = config
  if(method.toUpperCase() === "POST" && data instanceof Object){
    config.data = qs.stringify(data)
  }
  if(config.headers.needToken){
    const token = store.state.user.token
    if(!token){
      const error = new Error('登录失效,请重新登录')
      error.status = 401
      throw error
    }else{
      config.headers.authorization = token
    }
  }
  return config
})

export default axios