<template>
  <div class="coach-outer">
    <Header />
    <div class="coach-main" v-if="isShow">
      <div class="main-header">
        <el-card class="box-card">
          <el-row :gutter="20">
            <el-col :offset="2" :span="1">
              <el-button size="mini" @click="$router.push('/order')">返回</el-button>
            </el-col>
            <el-col :span="10" :offset="1">
              <el-breadcrumb separator="/" id="boxBodyBooton">
                <el-breadcrumb-item :to="{path:'/'}">功能面板</el-breadcrumb-item>
                <el-breadcrumb-item>教练列表</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
          </el-row>
        </el-card>
      </div>
      <div class="coachContainer">
        <div class="coach-header">
          <p class="header-left">教练列表</p>
          <el-button class="header-right" type="primary" @click="goDetail">新增教练</el-button>
        </div>
        <div class="coach-search">
          <div class="coachName">
            <p>教练名字:</p>
            <el-input v-model="name" placeholder="请输入教练名字"></el-input>
          </div>
          <div class="coachGender">
            <span>性别:</span>
            <el-select v-model="value" placeholder="全部">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <el-button type="primary" plain @click="searchCoach">搜索</el-button>
        </div>
        <div class="coachList">
          <el-table :data="coaches" style="width: 100%">
            <el-table-column prop="_id" label="教练id" width="140"></el-table-column>
            <el-table-column prop="avatar" label="头像" width="140">
              <template slot-scope="scope">
                <img class="coachAvatar" :src="scope.row.avatar" alt="用户头像" />
              </template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="140"></el-table-column>
            <el-table-column prop="rank" label="教练等级" width="140"></el-table-column>
            <el-table-column prop="memberCount" label="私教课会员" width="140"></el-table-column>
            <el-table-column prop="sort" label="排序" width="140"></el-table-column>
            <el-table-column prop="gender" label="性别" width="140"></el-table-column>
            <el-table-column prop="star" label="星级" width="140"></el-table-column>
            <el-table-column prop="options" label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="goDetail">编辑</el-button>
                <span class="shu">|</span>
                <el-button type="text" size="small" @click="deleteCoach(scope.$index,scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :pager-count="5"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="5"
            layout="total, sizes, prev, pager, next"
            :total="coaches.length"
            style="{height:'300px'}"
          ></el-pagination>
        </div>
      </div>
    </div>
    <router-view v-if="!isShow" :isShowDetail="isShowDetail"></router-view>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { reqCoach, reqDeleteCoach } from '../../api'
export default {
  name: 'Coach',
  data() {
    return {
      isShow: true,
      name: '',
      value: '',
      options: [
        {
          value: '男',
          label: '男'
        },
        {
          value: '女',
          label: '女'
        }
      ]
      // ,
      // coaches: [
      //   {
      //     coachId: '0012',
      //     coachAvatar: '小狗',
      //     coachName: '张晓刚',
      //     coachGrade: '私教主管',
      //     personalMember: '20',
      //     sort: '1',
      //     gender: '男',
      //     star: '3',
      //     options: '编辑 | 删除'
      //   }
      // ]
    }
  },
  watch: {
    name() {
      if (this.name === '') {
        return this.getCoaches()
      }
    }
  },
  methods: {
    ...mapActions(['getCoaches', 'delCoach']),
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    goDetail() {
      this.isShowDetail()
      this.$router.push('/coach/detail')
    },
    isShowDetail() {
      this.isShow = !this.isShow
    },
    deleteCoach(index) {
      this.coaches.splice(index, 1)
      this.$store.commit('delete_coach', this.coaches)
    },
    searchCoach() {
      const searchName = this.name
      console.log(searchName)
      const coaches = this.coaches.filter(coach => {
        return coach.name.includes(searchName)
      })
      this.$store.commit('search_Coach', coaches)
    }
  },
  mounted() {
    this.isShow = true
    this.getCoaches()
    // console.log(this.coaches)
    // this.$nextTick(() => {
    //   this.coaches = this.coaches
    // })
  },
  computed: {
    ...mapState({
      coaches: state => state.coach.coaches
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.coach-outer
  width 100%
  background-color #ddd
  .coach-main
    width 100%
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
        .coachName
          display flex
          align-items center
          margin-right 60px
          p
            width 100px
          .el-input__inner
            width 250px
        .coachGender
          margin-right 40px
          span
            margin-right 10px
          .el-input__inner
            width 100px
        .el-button
          text-align center
      .coachList
        width 100%
        background-color #fff
        border-radius 6px
        .el-table
          border-radius 6px
          .cell
            text-align center
            .shu
              color #ccc
              margin 15px
          .coachAvatar
            width 100px
            height 50px
            border-radius 4px
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
          button
            border 1px solid #ccc
            margin-right 5px
            border-radius 4px
          .el-pager
            display flex
            align-items center
            li
              border 1px solid #ccc
              margin-right 5px
              border-radius 4px
</style>