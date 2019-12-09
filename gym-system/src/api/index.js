import ajax from './ajax'
const BASE = '/api'

export const reqLogin = ({name,pwd,captcha}) => ajax({
  method:'POST',
  url:BASE+'/login_pwd',
  data:{
    name,
    pwd,
    captcha
  }
})