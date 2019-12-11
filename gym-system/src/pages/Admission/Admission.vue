<template>
<!-- 最外层 -->
  <div class="Outermost">
    <!-- 入场管理 -->
    <Header/>
    <div class="admission">
      <span class="title">入场管理</span>
      <el-button type="primary" class="btn" >刷新页面</el-button>
    </div>
    <div class="main">
      <form action='###'  >
        <span class="con" >用户昵称: </span>
        <input type="text" placeholder="请输入用户昵称">
        <span class="con" >用户昵称: </span>
        <input type="text" placeholder="请输入用户昵称" >
        <span class="con" >用户姓名: </span>
        <input type="text" placeholder="请输入用户姓名" >
        <br>
        <span class="con" >用户状态: </span>
        <select name="users">
          <option value="volvo">全部用户</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <span class="signIn" >今日签到:60人</span>
        <span class="signUp">签退人数:20人</span>
        <el-button type="primary" plain  size="mini" class="search" >搜所</el-button>
      </form>
    </div>
    <Loan/>
    <Broad/>
    <Users/>
    
  </div>
 
</template>

<script>
import Loan from '../../components/Loan/Loan'
import Broad from '../../components/Broad/Broad'
import Users from '../../components/Users/Users'
export default {
  name:'Admission',
  components:{
    Loan,
    Broad,
    Users
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.Outermost
  width 1400px
  background-color #f0f2f5
  margin 0 auto
  // 入场管理
  .admission
    width 100%
    height 82px
    display flex
    justify-content space-between
    align-items center 
    .title
      font-size 19px
      padding-left 15px
      border-left 4px solid #1c6ce6 
      margin-left 100px
    .btn
      margin-right 98px
  .main
    width 1280px
    height 132.3px
    background-color #ffffff
    margin 0 auto
    position relative
    .con
      margin-left 53px
    input
      width 280px
      height 30px
      margin-top 24px
      margin-bottom 24px
      font-size 16px
      border 1px solid #ddd
      border-radius 5px
    select
      width 120px
      height 30px
      color #b6b6b6
      border 1px solid #ddd
      border-radius 5px
    .signIn,.signUp
      color #3778e8
    .signIn
      margin-left 212px
    .signUp
      margin-left 32px
    .search
      position absolute
      right 46px
      bottom 24px
</style>