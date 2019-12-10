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

export const reqAutoLogin = () => ajax({
  method:'GET',
  url:BASE+`/auto_login`,
  headers:{
    needToken:true
  }
})

export const reqRole = ({name,phone,pwd,status,menus}) => ajax({
  method:'POST',
  url:BASE+'/role/update',
  data:{
    name,
    phone,
    pwd,
    status,
    menus
  }
})