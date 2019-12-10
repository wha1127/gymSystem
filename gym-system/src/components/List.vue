<template>
<div>

  <el-card class="box-card">
    <el-row :gutter="20">
      <el-col :offset="2"
              :span="1">
        <el-button siza="mini">返回</el-button>
      </el-col>
      <el-col :span="10"
              :offset="1">
        <el-breadcrumb separator="/"
                        id="boxBodyBooton">
          <el-breadcrumb-item :to="{ path:'/'}">功能面板</el-breadcrumb-item>
          <el-breadcrumb-item>会员列表</el-breadcrumb-item>
          <el-breadcrumb-item>会员详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
  </el-card>

  <div class="list-title">
    <div>会员列表</div>
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

  <!--搜索开始 -->
  <el-card class="list-card"  style="width:1290px">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="用户ID" >
        <el-input style="width:300px" v-model="formInline.id" placeholder="请输入用户ID"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input style="width:380px" v-model="formInline.phone" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item style="width:390px" label="性别">
        <el-select v-model="formInline.sex" placeholder="全部">
          <el-option label="男" value="boy"></el-option>
          <el-option label="女" value="girl"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item  label="用户昵称">
        <el-input style="width:290px"  v-model="formInline.nickname" placeholder="请输入用户昵称"></el-input>
      </el-form-item>
      <el-form-item style="width:400px" label="注册时间" required>
        <el-col :span="10">
          <el-form-item>
            <el-date-picker type="date" placeholder="选择日期"  style="width: 138px;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="10">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间"  style="width: 138px;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item style="width:420px" label="用户状态">
        <el-select v-model="formInline.status" placeholder="全部">
          <el-option label="登录" value="login"></el-option>
          <el-option label="未登录" value="outer"></el-option>
        </el-select>
      </el-form-item>


       <el-form-item style="width:990px"  label="用户姓名">
        <el-input v-model="formInline.name" placeholder="请输入用户姓名"></el-input>
      </el-form-item>


      <el-form-item>
        <el-button class="chaXun" type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <!--搜索结束 -->

  <!-- 用户id表开始 -->
  <div class="list-content">
    <el-table :data="tableData" border class="list-bottom">
      <el-table-column  fixed  prop="id"  label="用户id"  width="80px" ></el-table-column>
      <el-table-column  fixed  prop="head"  label="头像"  width="80px">
        <template>
          <img src="../images/02.jpg" style="width:50px;height:50px">
        </template>
      </el-table-column>
      <el-table-column  fixed  prop="name"  label="用户姓名" width="100px">  </el-table-column>
      <el-table-column  fixed  prop="nickname"  label="用户昵称" width="100px">  </el-table-column>
      <el-table-column  fixed  prop="phone"  label="手机号"  width="115px"> </el-table-column>
      <el-table-column  fixed  prop="sex"  label="性别"  width="80px"> </el-table-column>
      <el-table-column  fixed  prop="count"  label="进场次数"  width="100px"> </el-table-column>
      <el-table-column  fixed  prop="timeCard"  label="时间卡"  width="100px"> </el-table-column>
      <el-table-column  fixed  prop="countCard"  label="次卡"  width="100px"> </el-table-column>
      <el-table-column  fixed  prop="number"  label="课程数量"  width="100px"> </el-table-column>
      <el-table-column  fixed  prop="joinDate"  label="注册时间"  width="124px"> </el-table-column>
      <el-table-column  fixed  prop="status"  label="状态"  width="100px"> </el-table-column>
      <el-table-column  fixed  prop="opteration"  label="操作" width="100px"></el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
  <!-- 用户id表结束 -->
</div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      currentPage: 4,
      tableData: [{
        id: '998',
        phone: '12345678910',
        sex: '男',
        nickname: '康师傅',
        status: '正常',
        name: '张小刚',
        head: '',
        count: '20',
        countCard: '剩余20次',
        timeCard: '剩余30天',
        number: '10',
        joinDate: '2018-08-03',
        opteration: '编辑'
      },{
        id: '998',
        phone: '12345678910',
        sex: '男',
        nickname: '康师傅',
        status: '正常',
        name: '张小刚',
        head: '',
        count: '20',
        countCard: '剩余20次',
        timeCard: '剩余30天',
        number: '10',
        joinDate: '2018-08-03',
        opteration: '编辑'
      },{
        id: '998',
        phone: '12345678910',
        sex: '男',
        nickname: '康师傅',
        status: '正常',
        name: '张小刚',
        head: '',
        count: '20',
        countCard: '剩余20次',
        timeCard: '剩余30天',
        number: '10',
        joinDate: '2018-08-03',
        opteration: '编辑'
      },{
        id: '998',
        phone: '12345678910',
        sex: '男',
        nickname: '康师傅',
        status: '正常',
        name: '张小刚',
        head: '',
        count: '20',
        countCard: '剩余20次',
        timeCard: '剩余30天',
        number: '10',
        joinDate: '2018-08-03',
        opteration: '编辑'
      },{
        id: '998',
        phone: '12345678910',
        sex: '男',
        nickname: '康师傅',
        status: '正常',
        name: '张小刚',
        head: '',
        count: '20',
        countCard: '剩余20次',
        timeCard: '剩余30天',
        number: '10',
        joinDate: '2018-08-03',
        opteration: '编辑'
      }],
      formInline: {
        id: '',
        phone: '',
        sex: '',
        nickname: '',
        status: '',
        name: '',
      },
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log('每页${val}条');
    },
    handleCurrentChange(val) {
      console.log('每页${val}条');
    },
    onSubmit () {
      console.log('submit');
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
body
  background-color #ccc
#boxBodyBooton
  line-height 3
.list-title
  width 1280px
  height 90px
  line-height 90px
  margin 0 auto
  position relative
  div
    width 108px
    height 24px
    line-height 24px
    border-left 4px solid #1c6ce6
    padding-left 20px
    position absolute
    top 30px  
  .title-button
    position absolute
    top 24px
    right 0
.list-card
  width 1290px
  margin 0 auto
  .demo-form-inline
    .chaXun
      float right 
.list-content
  width 1280px
  margin 30px auto
  .list-bottom
    text-align center
  .block
    background-color #fff
    width 1280px
    float right  
    padding-top 3px
    height 36px
    text-align center
</style>