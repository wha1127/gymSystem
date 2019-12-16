<template>
  <div class="container-class">
    <Header style="width:100%"/>
    <Split :name="$router.history.current.meta" style="width:100%"/>
    <div class="container-one">
      <div class="content">
        <!-- 课程头部 -->
        <header class="title">
          <span class="title-left">瑜伽课班级列表</span>
          <div class="title-right">
            <el-button type="primary">创建课程</el-button>

          </div>
        </header>
        <!-- 课程搜索search -->
        <div class="search">
          <span>班级名称: </span>
          <el-input v-model="input"
                    placeholder="请输入内容"
                    class="input-search"></el-input>
          <span>教练名称: </span>
          <el-input v-model="input"
                    placeholder="请输入内容"
                    class="input-search"></el-input>
          <span>课程状态: </span>
          <template>
            <el-select v-model="value"
                       placeholder="请选择"
                       class="input-search">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </template>
          <el-button plain>搜索</el-button>
        </div>
        <!-- 表单部分 -->
        <div class="con">
          <el-table :data="tableData"
                    style="width: 90%">
            <el-table-column prop="ClassName"
                             label="班级名称">

            </el-table-column>
            <el-table-column prop="coach"
                             label="教练">
            </el-table-column>
            <el-table-column prop="people"
                             label="报名人数">
            </el-table-column>
            <el-table-column prop="schoolTime"
                             label="上课时间"
                             width="200">
            </el-table-column>

            <el-table-column prop="state"
                             label="状态">
              <template slot-scope="scope">
                <div v-if="scope.row.state">
                  <el-button type="text"
                             size="small">{{scope.row.state[0]}}</el-button>

                </div>
              </template>
            </el-table-column>
            <el-table-column prop="operate"
                             label="操作"
                             width="180">
              <template>
                <el-button type="text"
                           size="small"
                           @click="goToRC">编辑</el-button>
                <el-button type="text"
                           size="small">
                  删除
                </el-button>

                <el-button type="text"
                           size="small">上架</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>

    </div>
  </div>

</template>
<script>
export default {
  data () {
    return {
      input: "",
      tableData: [{
        ClassName: '基础普拉提',
        coach: '王小虎',
        people: '24',
        schoolTime: '每周一,三,五 10:00-12:00',
        state: ['进行中'],
        operate: ''
      }, {
        ClassName: '基础普拉提',
        coach: '王小虎',
        people: '24',
        schoolTime: '每周一,三,五 10:00-12:00',
        state: ['已结束'],
        operate: ''
      }],
      options: [{
        value: '选项1',
        label: '进行中'
      }, {
        value: '选项2',
        label: '已结束'
      }],
      value: ''
    }
  },
  methods: {
    goToRC () {
      this.$router.push('/redactClass')
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.container-class
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
        width 80%
        height 50px
        background-color #fff
        margin 0 0 20px 10%
        display flex
        align-items center
        padding-left 10px
        .input-search
          width 200px
          margin-right 38px
          margin-left 5px
      .con
        margin-left 10%
        .cell
          text-align center
</style>