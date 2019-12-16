<template>
  <div>
    <Header style="width:100%"/>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :offset="2"
                :span="1">
          <el-button size='mini'
                     @click="goPage">返回</el-button>
        </el-col>
        <el-col :span="10"
                :offset="1">
          <el-breadcrumb separator="/"
                         id="boxBodyBooton">
            <el-breadcrumb-item :to="{ path: '/' }">功能面板</el-breadcrumb-item>
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>订单详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </el-card>
    <div class="body">
      <div class="shop">订单详情</div>
    </div>
    <div class="bodyBott">
      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <span>订单信息</span>
        </div>
        <div class="boxCard">
          <div>
            <p>订单号：20180808073362</p>
            <p>订单时间：2018-08-09</p>
            <p>昵称：王小虎</p>
            <p>用户id：073362</p>
          </div>
          <div>
            <p>商品名称：运动手表</p>
            <p>金额：200元</p>
            <p>步数：5000步</p>
          </div>
        </div>
      </el-card>
    </div>
    <div class="bodyBottom">
      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <span>联系人信息</span>
        </div>
        <div class="boxCard">
          <div>
            <p>联系人姓名：yimbo</p>
            <p>充值账号：2376546765</p>
            <p>手机号：12376546765</p>
          </div>
          <div>
            <p>省市区：广东省-深圳市-南山区</p>
            <p>详细地址：大冲商务国际大厦A座2601</p>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'commodity',
  data () {
    return {

    }
  },
  methods: {
    goPage () {
      this.$router.back()
    },
    deleteRow (index, rows) {
      rows.splice(index, 1);
    }
  }
}
</script>
<style  lang="stylus" rel="stylesheet/stylus" scoped>

#boxBodyBooton
  line-height 2
.body
  width 1280px
  height 80px
  line-height 80px
  margin 0 auto
  position relative
  .shop
    width 90px
    height 24px
    line-height 24px
    text-align center
    border-left 4px solid #1C6CE6
    margin-left 20px
    position absolute
    top 30px
.bodyBott
  width 1280px
  border-radius 10px
  margin 0 auto
  .boxCard
    display flex
    div:nth-child(2)
      margin-left 220px
    div p
      margin 30px 0 30px 30px
.bodyBottom
  width 1280px
  border-radius 10px
  margin 30px auto
  .boxCard
    display flex
    div:nth-child(2)
      margin-left 220px
    div p
      margin 30px 0 30px 30px
</style>
