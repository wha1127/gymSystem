<template>
  <div class="loginContainer">
    <div class="loginLeft">
      <h2 class="title">健身房管理系统</h2>
      <p>账号</p>
      <el-input v-model="name" placeholder="请输入用户名称" class="input"></el-input>
      <p>密码</p>
      <el-input placeholder="请输入用户密码" v-model="pwd" show-password class="input"></el-input>
      <br>
      <div class="captcha">
        <el-input v-model="captcha" placeholder="请输入图形验证码" class="input"></el-input>
        <img src="http://localhost:5000/captcha" alt="" ref="im" @click="changeCaptcha">
      </div>
      <br>
      <el-button type="primary" class="login" @click="login">登录</el-button>
    </div>
    <div class="loginRight">
      <img src="./image/right.png" alt="">
    </div>
  </div>
</template>

<script>
import {reqLogin} from '../../api'
export default {
  name:"Login",
  data() {
    return {
      pwd:'',
      name:'',
      captcha:'',
      checked:false
    }
  },
  mounted() {
    console.log(this)
  },
  methods: {
    changeCaptcha(){
      this.$refs.im.src = `http://localhost:5000/captcha?time=${Date.now()}`
    },
    async login(){
      const {pwd,name,captcha} = this
      const result = await reqLogin({pwd,name,captcha})
      if(result.data.code === 0){
         this.$message({
          message: '登录成功',
          type: 'success'
        });
        this.$store.dispatch('saveUser',result.data.data)
        this.$router.replace('/home')
      }
      this.changeCaptcha()
    }
  },
}
</script>

<style lang="stylus" scoped>
  .loginContainer
    display flex
    justify-content center
    align-items  center
    height 100%
    width 100%
    background-color rgba(240,242,245,1)
    .loginLeft
      box-sizing border-box
      height 500px
      background-color #FFF
      .title
        margin 40px 60px
        font-size 20px
        font-weight bold
      .input
        width 250px
        margin 10px 10px 20px 10px
      .login
        width 250px
        margin 10px 10px 20px 30px
      .captcha
        .input
          width 150px
          height 50px
        img 
          vertical-align middle
      p
       margin 10px 20px
      img 
        vertical-align middle
    .loginRight
      height 500px
      img
        height 500px
</style>