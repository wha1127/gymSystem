<template>
  <div>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :offset="2" :span="1">
          <el-button siza="mini" @click="goPage">返回</el-button>
        </el-col>
        <el-col :span="10" :offset="1">
          <el-breadcrumb separator="/" id="boxBodyBooton">
            <el-breadcrumb-item :to="{ path:'/'}">功能面板</el-breadcrumb-item>
            <el-breadcrumb-item>工作人员</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>        
      </el-row>         
    </el-card>
    <div class="person-title">
      <div>工作人员</div>
      <router-link to="/worker">
        <el-button 
        size="mini"
        type="primary"
        class="title-button"
      >
        添加用户
      </el-button>
      </router-link>
    </div>
    <el-table  :data="tableData" border style="width: 1280px" class="body" >
      <el-table-column prop="name" label="姓名" width="256"></el-table-column>
      <el-table-column prop="account" label="账号" width="256"> </el-table-column>
      <el-table-column prop="power" label="权限页面"  width="270"> </el-table-column>
      <el-table-column prop="state" label="状态" width="240"></el-table-column>
      <el-table-column label="操作" width="256">
        <template slot-scope="scope">
          
          <router-link to="/worker">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          </router-link>
          <el-button type="text" size="small">停用</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Person',
  methods: {
    goPage () {
      this.$router.back
    },
    handleClick(row) {
     console.log(row);
    }
  },
  data() {
      return {
        tableData: [{
          name: '王小虎',
          account: '12345678910',
          power: '超级管理员',
          state: '正常'
        }, {
          name: '王小虎',
          account: '12345678910',
          power: '会员卡管理,会员管理,课程表,商品管理',
          state: '正常'
        }, {
          name: '王小虎',
          account: '12345678910',
          power: '教练管理,活动编辑',
          state: '正常'
        }, {
          name: '王小虎',
          account: '12345678910',
          power: '财务',
          state: '正常'
        }, {
          name: '王小虎',
          account: '12345678910',
          power: '前台',
          state: '正常'
        }, {
          name: '王小虎',
          account: '12345678910',
          power: '教练管理,活动编辑',
          state: '正常'
        }, {
          name: '王小虎',
          account: '12345678910',
          power: '会员卡管理,会员管理,课程表,商品管理',
          state: '正常'
        },{
          name: '王小虎',
          account: '12345678910',
          power: '教练管理,活动编辑',
          state: '正常'
        },{
          name: '王小虎',
          account: '12345678910',
          power: '会员卡管理,会员管理,课程表,商品管理',
          state: '正常'
        }]
      }
    }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
body 
  background-color #ccc
#boxBodyBooton
  line-height 3  
.person-title
  width 1280px
  height 80px
  line-height 80px
  text-align center
  margin 0 auto
  position relative
  div
    width 108px
    height 24px
    line-height 24px
    border-left 4px solid #1c6ce6
    margin-right 2px
    position absolute
    top 30px
  .title-button
    position absolute
    top 24px
    right 0
.body
  margin 0 auto
  background-color #000

</style>