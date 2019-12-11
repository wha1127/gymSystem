<template>
  <div class="container-list">
    <div class="container-one">
      <div class="content">
        <!-- 课程头部 -->
        <header class="title">
          <span class="title-left">课程列表</span>
          <div class="title-right">
            <el-button type="primary"
                       plain
                       @click="goTimetable">切换到课程表</el-button>
            <el-button type="primary">创建课程</el-button>

          </div>
        </header>
        <!-- 课程搜索search -->
        <div class="search">
          <span>课程名称: </span>
          <el-input v-model="input"
                    placeholder="请输入内容"
                    class="input-search"></el-input>
          <el-button plain>搜索</el-button>
        </div>
        <!-- 表单部分 -->
        <div class="con">
          <el-table :data="tableData"
                    style="width: 90%">
            <el-table-column prop="cover"
                             label="课程封面">
              <img src="./image/jianshen1.png"
                   alt>
            </el-table-column>
            <el-table-column prop="className"
                             label="课程名称">
            </el-table-column>
            <el-table-column prop="people"
                             label="报名人数">
            </el-table-column>
            <el-table-column prop="price"
                             label="价格">
            </el-table-column>
            <el-table-column prop="discounts"
                             label="优惠"
                             width="160">
            </el-table-column>
            <el-table-column prop="label"
                             label="标签"
                             width="160">
              <template>
                <el-button type="primary"
                           plain>燃脂</el-button>
                <el-button type="success"
                           plain>塑形</el-button>
              </template>

            </el-table-column>
            <el-table-column prop="state"
                             label="状态">
              <el-button type="text"
                         size="small">上架</el-button>
            </el-table-column>
            <el-table-column prop="class"
                             label="班级">
            </el-table-column>
            <el-table-column prop="operate"
                             label="操作"
                             width="180">
              <template>
                <el-button type="text"
                           size="small"
                           @click="editingClass">
                  编辑
                </el-button>
                <span class="shu">|</span>
                <el-button type="text"
                           size="small"
                           @click="goToClass">
                  班级管理
                </el-button>
                <span class="shu">|</span>
                <el-button type="text"
                           size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

        </div>
      </div>

    </div>
  </div>

</template>
<script>
import {reqAddCourse} from '../../api'
export default {
  data () {
    return {
      input: "",
      tableData: [{
        date: '',
        className: '',
        people: '24',
        price: '5000元',
        discounts: '4800元 省4天',
        label: '',
        state: '',
        class: '2',
        operate: ''
      }, {
        date: '',
        name: '王小黑',
        people: '14',
        price: '5000元',
        discounts: '4800元 省4天',
        label: '',
        state: '',
        class: '2',
        operate: ''
      }]
    }
  },
  methods: {
    goTimetable () {
      //console.log(this.$router.history.current.path)
      this.$router.push("/classList")
    },
    goToClass () {

      this.$router.push("/classList")
    },
    editingClass () {
      this.$router.push("/editingCourse")
    },
    async addCourse(){
      const result = await reqAddCourse()
      console.log(result)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.container-list
  width 100%
  height 100%
  background-color rgba(0, 0, 255, .08)
  .container-one
    width 100%
    height 100%
    .content
      width 100%
      height 90%
      padding 15px
      .title
        width 80%
        margin-left 10%
        height 60px
        display flex
        justify-content space-between
        align-items center
        .title-left
          font-size 20px
          font-weight 700
          padding-left 15px
          height 20px
          border-left 3px solid #00c
      .search
        width 90%
        height 50px
        background-color #fff
        margin 0 0 20px 10%
        display flex
        align-items center
        padding-left 10px
        .input-search
          width 200px
          margin-right 5px
          margin-left 5px
      .con
        margin-left 10%
        .shu
          color #cccccc
          margin 10px
        .cell
          text-align center
</style>
