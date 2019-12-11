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
            <el-button type="primary"
                       @click="addLine">创建课程</el-button>

          </div>
        </header>
        <!-- 课程搜索search -->
        <div class="search">
          <span>课程名称: </span>
          <el-input v-model="input"
                    placeholder="请输入内容"
                    class="input-search"
                    @input="classChangs"></el-input>
          <el-button plain
                     @click="searchClass">搜索</el-button>
        </div>
        <!-- 表单部分 -->
        <div class="con">
          <el-table :data="newClasses"
                    style="width: 90%">
            <el-table-column prop="avatar"
                             label="课程封面">
              <img src="./image/jianshen1.png"
                   alt>
            </el-table-column>
            <el-table-column prop="title"
                             label="课程名称">
            </el-table-column>>
            <el-table-column prop="price"
                             label="价格">
            </el-table-column>
            <el-table-column prop="salePrice"
                             label="优惠"
                             width="160">
            </el-table-column>
            <el-table-column prop="sign"
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
            <el-table-column prop="operate"
                             label="操作"
                             width="180">
              <template slot-scope="scope">
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
                           size="small"
                           @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

        </div>
      </div>

    </div>
  </div>

</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "courseManagement",
  computed: {
    ...mapState({
      classes: state => state.classItem.classes
    })
  },
  async mounted () {
    await this.$store.dispatch('getClass')
    this.$nextTick(() => {
      this.newClasses = this.classes
    })
  },
  data () {
    return {
      input: "",
      newClasses: []
    }
  },
  methods: {
    //搜索
    searchClass () {
      const { classes } = this
      //console.log(this.input)
      console.log(classes)
      const result = classes.filter(item => item.title.includes(this.input))
      this.newClasses = result
    },
    //删除行数
    handleDelete (index) {
      this.newClasses.splice(index, 1)
    },
    goTimetable () {
      //console.log(this.$router.history.current.path)
      this.$router.push("/timeTable")
    },
    goToClass () {

      this.$router.push("/classList")
    },
    editingClass () {
      this.$router.push("/editingCourse")
    },
    // 增加数据

    addLine () {
      this.$router.push("/editingCourse")
    },
    async classChangs () {
      if (this.input === '') {
        await this.$store.dispatch('getClass')
        this.$nextTick(() => {
          this.newClasses = this.classes
        })
      }
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
