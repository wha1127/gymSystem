import ajax from './ajax'
const BASE = '/api'

export const reqLogin = ({
  name,
  pwd,
  captcha
}) => ajax({
  method: 'POST',
  url: BASE + '/login_pwd',
  data: {
    name,
    pwd,
    captcha
  }
})

export const reqAutoLogin = () => ajax({
  method: 'GET',
  url: BASE + `/auto_login`,
  headers: {
    needToken: true
  }
})

export const reqRole = ({
  name,
  phone,
  pwd,
  status,
  menus
}) => ajax({
  method: 'POST',
  url: BASE + '/role/add',
  data: {
    name,
    phone,
    pwd,
    status,
    menus
  }
})

export const reqRoleList = () => ajax({
  method: 'GET',
  url: BASE + '/role/get',
  data: {

  }
})

export const reqOrder = () => ajax({
  method: 'GET',
  url: BASE + '/order/get',
  data: {

  }
})

export const reqCoach = () => ajax({
  method: 'GET',
  url: BASE + '/coaches/get',
  data: {

  }
})

export const reqAddCoach = ({
  name,
  avatar,
  rank,
  memberCount,
  sort,
  gender,
  star
}) => ajax({
  method: 'POST',
  url: BASE + '/coaches/add',
  data: {
    name,
    avatar,
    rank,
    memberCount,
    sort,
    gender,
    star
  }
})

export const reqDeleteCoach = (name) => ajax({
  method: 'POST',
  url: BASE + '/coaches/delete',
  data: {
    name
  }
})

export const reqGetStudents = () => ajax({
  method: 'GET',
  url: BASE + '/student/get',
  data: {

  }
})

export const reqAddCourse = ({
  title,
  price,
  salePrice,
  saleMessage,
  sign,
  avatar,
  introduce,
  influence,
  attention
}) => ajax({
  method: 'POST',
  url: BASE + '/course/add',
  data: {
    title,
    price,
    salePrice,
    saleMessage,
    sign,
    avatar,
    introduce,
    influence,
    attention
  }
})

export const reqDeleteCourse = (title) => ajax({
  method:"POST",
  url:BASE+'/course/delete',
  data:{
    title
  }                                                                        
})

export const reqUpdateCourse = ({
  title,
  price,
  salePrice,
  saleMessage,
  sign,
  avatar,
  introduce,
  influence,
  attention
}) => ajax({
  method: 'POST',
  url: BASE + '/course/update',
  data: {
    title,
    price,
    salePrice,
    saleMessage,
    sign,
    avatar,
    introduce,
    influence,
    attention
  }
})

//获取商品列表
export const reqGetGoods = () => ajax({
  method:'GET',
  url:BASE+'/goods/get',
  data:{

  }
})

//增加商品
export const reqAddGoods = ({name,type,price,points}) => ajax({
  method:'POST',
  url:BASE+'/goods/add',
  data:{
    name,
    type,
    price,
    points
  }
})

//删除商品
export const reqDeleteGoods = (id) =>ajax({
  method:'POST',
  url:BASE+'/goods/delete',
  data:{
    id
  }
})

//更新商品
export const reUpdateGoods = ({id,type,price,name,points}) => ajax({
  method:'POST',
  url:BASE+'/goods/update',
  data:{
    id,
    type,
    price,
    name,
    points
  }
})