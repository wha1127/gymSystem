import axios from 'axios'
import qs from 'qs'
import router from '../router'

axios.interceptors.request.use((config) => {
  const {method, data} = config
  if(method.toUpperCase() === "POST" && data instanceof Object){
    config.data = qs.stringify(data)
  }
  return config
})

export default axios