<template>
  <div class="order-outer">
    <div class="main-header">
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :offset="2" :span="1">
            <el-button size="mini" @click="$router.back()">返回</el-button>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-breadcrumb separator="/" id="boxBodyBooton">
              <el-breadcrumb-item :to="{path:'/'}">功能面板</el-breadcrumb-item>
              <el-breadcrumb-item>预约管理</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <div class="coachContainer">
      <div class="coach-header">
        <p class="header-left">预约管理</p>
      </div>
      <div class="orderList">
        <el-table :data="orders" style="width: 100%">
          <el-table-column prop="userAvatar" label="头像" width="160">
            <img class="userAvatar" src="../../utils/images/user/dog.jpg" alt="用户头像" />
          </el-table-column>
          <el-table-column prop="name" label="用户姓名" width="160"></el-table-column>
          <el-table-column prop="phone" label="手机号" width="160"></el-table-column>
          <el-table-column prop="class" label="报名课程" width="160"></el-table-column>
          <el-table-column prop="orderedClass" label="报名班次" width="160"></el-table-column>
          <el-table-column prop="orderedTime" label="报名时间" width="160"></el-table-column>
          <el-table-column prop="status" label="状态">
            <template slot-scope="scope">
              <el-select :value="scope.row.status" class="blue">
                <el-option label="未确认" value="unconfirmed" style="color:#555"></el-option>
                <el-option label="已报班" value="submitted" style="color:#06f"></el-option>
                <el-option label="拒绝" value="refuse" style="color:#f00"></el-option>
              </el-select>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :pager-count="5"
          :page-size="10"
          layout=" prev, pager, next"
          :total="90"
          style="{height:'300px'}"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState,mapActions} from 'vuex'
export default {
  name: 'Order',
  data() {
    return {
      theState: ''
      // tableData: [
      //   {
      //     userAvatar: '',
      //     userName: '张小刚',
      //     phoneNumber: '13257490494',
      //     joinCourse: '基础普拉提',
      //     joinClass: 'A班',
      //     joinDate: '2019-12-10',
      //     theState: '',
      //     state: '已报名'
      //   },
      //   {
      //     userAvatar: '',
      //     userName: '张小刚',
      //     phoneNumber: '13257490494',
      //     joinCourse: '基础普拉提',
      //     joinClass: 'A班',
      //     joinDate: '2019-12-10',
      //     theState: '',
      //     state: '未确定'
      //   },
      //   {
      //     userAvatar: '',
      //     userName: '张小刚',
      //     phoneNumber: '13257490494',
      //     joinCourse: '基础普拉提',
      //     joinClass: 'A班',
      //     joinDate: '2019-12-10',
      //     theState: '',
      //     state: '拒绝'
      //   },
      //   {
      //     userAvatar: '',
      //     userName: '张小刚',
      //     phoneNumber: '13257490494',
      //     joinCourse: '基础普拉提',
      //     joinClass: 'A班',
      //     joinDate: '2019-12-10',
      //     theState: '',
      //     state: '已报名'
      //   },
      //   {
      //     userAvatar: '',
      //     userName: '张小刚',
      //     phoneNumber: '13257490494',
      //     joinCourse: '基础普拉提',
      //     joinClass: 'A班',
      //     joinDate: '2019-12-10',
      //     theState: '',
      //     state: '拒绝'
      //   }
      // ]
    }
  },
  methods: {
    ...mapActions(['getOrders']),
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  },
  computed:{
    ...mapState({
      orders: state => state.order.orders
    })
  },
  mounted() {
    this.getOrders()
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
input
  &.blue
    color blue
.order-outer
  width 100%
  height 100%
  overflow scroll
  .main-header
    width 100%
    .el-breadcrumb
      line-height 2
  .coachContainer
    width 1280px
    margin 0 auto
    .coach-header
      width 100%
      height 60px
      line-height 60px
      display flex
      justify-content space-between
      align-items center
      .header-left
        height 25px
        line-height 25px
        font-size 20px
        padding-left 10px
        margin-left 20px
        border-left 3px solid #02a774
      .header-right
        height 40px
        font-size 16px
        color #fff
    .coach-search
      padding-left 50px
      margin-bottom 20px
      border-radius 6px
      background-color #fff
      display flex
      align-items center
      height 60px
      line-height 60px
      .userName
        display flex
        align-items center
        margin-right 60px
        p
          width 100px
        .el-input__inner
          width 250px
      .coachjoinDate
        margin-right 40px
        span
          margin-right 10px
        .el-input__inner
          width 100px
      .el-button
        text-align center
    .orderList
      width 100%
      background-color #fff
      border-radius 6px
      .el-table
        border-radius 6px
        .cell
          text-align center
          .el-input__inner
            width 120px
        .userAvatar
          width 40px
          height 40px
          border-radius 50%
        .has-gutter
          tr
            th
              color #000
              background-color #cff
      .el-pagination
        height 50px
        line-height 50px
        padding 20px
        display flex
        align-items center
        justify-content flex-end
        .el-pager
          display flex
          align-items center
          li
            border 1px solid #ccc
            margin-right 5px
            border-radius 4px
</style>