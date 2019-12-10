var express = require('express');
// 引入jsonwebtoken
var jwt = require('jsonwebtoken')
var router = express.Router();
const md5 = require('blueimp-md5')
const UserModel = require('../models/UserModel')
const _filter = { 'pwd': 0, '__v': 0 } // 查询时过滤掉
const users = {}
const ajax = require('../api/ajax')
var svgCaptcha = require('svg-captcha')
const createToken = require('../token/createToken')
const checkToken = require('../token/checkToken')
const Roles = require('../models/Roles');
const Coaches = require('../models/Coaches')
const Orders = require('../models/Orders')
const Students = require('../models/Students')
const Courses = require('../models/Courses')


router.get('/captcha', function (req, res) {
  var captcha = svgCaptcha.create({
    ignoreChars: '0o1l',
    noise: 2,
    color: true
  });
  console.log(captcha)
  req.session.captcha = captcha.text.toLowerCase();
  console.log('/captcha', req.session.captcha)
  res.type('svg');
  res.send(captcha.data)
});
/*
密码登陆
 */
router.post('/login_pwd', function (req, res) {
  const name = req.body.name
  const pwd = md5(req.body.pwd)
  const captcha = req.body.captcha.toLowerCase()
  console.log('/login_pwd', name, pwd, captcha, req.session)

  // 可以对用户名/密码格式进行检查, 如果非法, 返回提示信息
  if (captcha !== req.session.captcha) {
    return res.send({ code: 1, msg: '验证码不正确' })
  }
  // 删除保存的验证码
  delete req.session.captcha

  UserModel.findOne({ name })
    .then((user) => {
      if (user) {
        if (user.pwd !== pwd) {
          res.send({ code: 1, msg: '用户名或密码不正确!' })
        } else {
          // req.session.userid = user._id
          // const token = tokenUtil.generateToken(name)
          // req.session.token = token
          res.send({ code: 0, data: { _id: user._id, name: user.name, phone: user.phone ,token:createToken(user._id)} })
        }
        return new Promise(() => {
        }) // 返回一个不调用resolve()/reject()的promise对象
      } else {
        return UserModel.create({ name, pwd })
      }
    })
    .then((user) => {
     // req.session.userid = user._id
      const data = { _id: user._id, name: user.name ,token:createToken(user._id)}
      // 3.2. 返回数据(新的user)
      res.send({ code: 0, data })
    })
    .catch(error => {
      console.error('/login_pwd', error)
    })
})

/*
一次性图形验证码
 */
router.get('/captcha', function (req, res) {
  var captcha = svgCaptcha.create({
    ignoreChars: '0o1l',
    noise: 2,
    color: true
  });
  req.session.captcha = captcha.text.toLowerCase();
  console.log('/captcha', req.session.captcha)
  res.type('svg');
  res.send(captcha.data)
});


/*
根据sesion中的userid, 查询对应的user
 */
// 根据请求携带的token查询对应的user
router.get('/auto_login', function (req, res) {
  // 获取请求头中的token
  const token=req.headers['authorization']
  // 如果请求头中没有token,直接返回token
  if(!token){
    return req.send({code:1,msg:'请先登录'})
  }
  // 解码token,如果失败或者过了有效期返回401
  const decoded=jwt.decode(token,'secret')
  if(!decoded||decoded.exp<Date.now()/1000){
    res.status(401)
    return res.json({message:'token过期,请重新登录'})
  }
   // 根据解码出的用户id,查询得到对应的user,返回给客户端
   const userId=decoded.id
   UserModel.findOne({_id:userId},_filter)
   .then(user=>{
     res.send({code:0,data:user})
   })
})

router.post('/role/add', async (req, res) => {
  const role = req.body;
  console.log(role)
  let roles
  try {
     roles = await Roles.create({...req.body})
    console.log(roles)
    res.json({status:0,msg:'创建角色成功'})
  } catch (error) {
    console.log(error)
    res.json({status: 1, msg: '创建角色权限失败'});
  }
});

router.get('/role/get',(req,res) => {
  Roles.find({})
    .then(roles => {
      res.json({status:0,data:roles})
    })
    .catch(error => {
      res.json({status:1,msg:'获取权限列表失败'})
    })
})

router.get('/coaches/get',(req,res)=>{
  Coaches.find({})
    .then(coaches =>{
      res.json({status: 0,data: coaches})
    })
    .catch(error => {
      res.json({status:1 ,msg: '获取教练列表失败'})
    })
});

router.post('/coaches/add',async (req,res)=>{
 const {name,avatar,rank,memberCount,sort,gender,star} = req.body;
 console.log(req.body)
 let coach
 try{
  coach = await Coaches.create({...req.body});
  console.log(coach)
   res.json({
     status: 0 ,
     data:{
      name,avatar,rank,memberCount,sort,gender,star,id:Date.now()
     }
   });
 }catch(error){
   res.json({status:1,msg:'添加失败'})
 }
});

router.post('/coaches/delete',(req,res)=>{
  const {name} = req.body;
  users.deleteOne({name})
    .then((doc) => {
      res.json({status:0,data:{}})
    })
    .catch(()=>{
      res.json({status:1,msg:'删除失败'})
    })
});

router.get('/order/get',(req,res) => {
  const orders = require('../data/orders.json')
  Orders.find({})
    .then(
      res.json({status:0,data:orders})
    )
    .catch(error => {
      res.json({status:1,msg:'获取订单列表失败'})
    })
})

router.get('/student/get',(req,res) => {
  const data = require('../data/students.json')
  Students.find({})
    .then(students => {
      res.json({status:0,data})
    })
    .catch(error => {
      res.json({status:1,msg:'获取订单列表失败'})
    })
})

router.get('/course/get',(req,res) => {
  Courses.find({})
    .then(courses => {
       res.json({status:0,data:courses})
    })
    .catch(error => {
      res.json({status:1,msg:'获取课程列表失败'})
    })
})

router.post('/course/add',(req,res) => {
  Courses.create({...req.body})
    .then(course => {
      res.json({status:0,data:course})
    })
    .catch(error => {
      res.json({status:1,msg:"添加课程失败"})
    })
})

router.post('/course/delete',(req,res) => {
  const {title} = req.body
  Courses.deleteOne({title})
  .then(() => {
    res.json({status:0,data:title})
  })
  .catch(error => {
    res.json({status:1,msg:'删除课程失败'})
  })
})

router.post('/course/update',(req,res) => {
  const {title} = req.body
  Courses.findByIdAndUpdate({title})
  .then(oldCourse => {
    res.json({status:0,data:{title}})
  })
  .catch(error => {
    res.json({status:1,msg:'更新课程失败'})
  })
})

module.exports = router;