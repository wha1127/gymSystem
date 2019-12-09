<template>
  <div class="homeContainer">
    <Header />
    <div class="mainContent">
      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <span class="title">基础功能</span>
        </div>
        <ul class="manange">
          <li>
            <img src="./images/xitong.png" alt="">
            <p>系统设置</p>
          </li>
          <li>
            <img src="./images/jiaolian 拷贝 2.png" alt="">
            <p>工作人员</p>
          </li>
          <li>
            <img src="./images/形状 1.png" alt="">
            <p>会员管理</p>
          </li>
          <li>
            <img src="./images/形状 14.png" alt="">
            <p>入场管理</p>
          </li>
          <li>
            <img src="./images/形状 3.png" alt="">
            <p>仪表盘</p>
          </li>
          <li>
            <img src="./images/形状 4.png" alt="">
            <p>会员卡管理</p>
          </li>
        </ul>
      </el-card>
      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <span class="title">小程序管理</span>
        </div>
        <ul class="manange">
          <li>
            <img src="./images/形状 6.png" alt="">
            <p>课程管理</p>
          </li>
          <li>
            <img src="./images/形状 5.png" alt="">
            <p>课程表</p>
          </li>
          <li>
            <img src="./images/形状 7.png" alt="">
            <p>预约管理</p>
          </li>
          <li>
            <img src="./images/jiaolian 拷贝.png" alt="">
            <p>教练管理</p>
          </li>
          <li>
            <img src="./images/形状 8.png" alt="">
            <p>活动编辑</p>
          </li>
          <li>
            <img src="./images/形状 9.png" alt="">
            <p>场馆图片</p>
          </li>
          <li>
            <img src="./images/形状 13.png" alt="">
            <p>banner管理</p>
          </li>
        </ul>
      </el-card>
      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <span class="title">商场管理</span>
        </div>
        <ul class="manange">
          <li>
            <img src="./images/形状 10.png" alt="">
            <p>系统设置</p>
          </li>
          <li>
            <img src="./images/形状 11.png" alt="">
            <p>工作人员</p>
          </li>
          <li>
            <img src="./images/形状 12.png" alt="">
            <p>会员管理</p>
          </li>
        </ul>
      </el-card>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header'
export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style lang="stylus" scoped>
.homeContainer
  width 1440px
  display flex
  justify-content center
  flex-wrap wrap
  margin 0 auto
  .mainContent
    width 1440px
    background-color rgba(240,242,245,1)
    .box-card
      margin 30px 80px
      box-sizing border-box 
      height 258px
      .title
        position relative
        margin-left 10px
        &::before
          content ''
          border-left 4px solid #1c6ce6
          width 4px
          height 20px
          position absolute
          top 0
          left -18px
      .manange
        display flex
        li
          display flex
          justify-content center
          align-items center
          flex-direction column
          margin 23px 0 65px 74px
</style>