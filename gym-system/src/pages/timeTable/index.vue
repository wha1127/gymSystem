<template>
  <div class="container">
    <Header style="width:100%"/>
    <Split :name="$router.history.current.meta" style="width:100%"/>
    <div class="content">
      <header class="title">
        <span class="title-left">课程表</span>
        <div class="title-right">
          <el-button type="primary"
                     plain
                     @click="goToItem">切换到列表</el-button>
          <el-button type="primary" @click="$router.push('/editingCourse')">创建课程</el-button>

        </div>
      </header>
      <div class="con">
        <el-table :data="tableData"
                  height="400"
                  border
                  style="width: 90%">
          <el-table-column label="周一"
                           prop="Monday">
            <template slot-scope="scope">
              <div v-if="scope.row.Monday">

                <p>{{scope.row.Monday[0]}}</p>
                <p>{{scope.row.Monday[1]}}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="Tuesday"
                           label="周二">
            <template slot-scope="scope">
              <div v-if="scope.row.Tuesday">

                <p>{{scope.row.Tuesday[0]}}</p>
                <p>{{scope.row.Tuesday[1]}}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="Wednesday"
                           label="周三">
            <template slot-scope="scope">
              <div v-if="scope.row.Wednesday">

                <p>{{scope.row.Wednesday[0]}}</p>
                <p>{{scope.row.Wednesday[1]}}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="Thursday"
                           label="周四">
            <template slot-scope="scope">
              <div v-if="scope.row.Thursday">

                <p>{{scope.row.Thursday[0]}}</p>
                <p>{{scope.row.Thursday[1]}}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="Friday"
                           label="周五">
            <template slot-scope="scope">
              <div v-if="scope.row.Friday">

                <p>{{scope.row.Friday[0]}}</p>
                <p>{{scope.row.Friday[1]}}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="Sat"
                           label="周六">
            <template slot-scope="scope">
              <div v-if="scope.row.Sat">

                <p>{{scope.row.Sat[0]}}</p>
                <p>{{scope.row.Sat[1]}}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="Week"
                           label="周日">
            <template slot-scope="scope">
              <div v-if="scope.row.Week">

                <p>{{scope.row.Week[0]}}</p>
                <p>{{scope.row.Week[1]}}</p>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

  </div>

</template>
<script>

export default {
  name: 'TimeTable',
  data () {
    return {
      tableData: [{
        Monday: ['基础普拉提', '18:30-19:30 王国强'],
        Tuesday: ['基础普拉提', '18:30-19:30 王国强'],
        Wednesday: '',
        Thursday: '',
        Friday: '',
        Sat: '',
        Week: ''
      }, {
        Monday: '',
        Tuesday: '',
        Wednesday: ['基础普拉提', '18:30-19:30 王国强'],
        Thursday: '',
        Friday: '',
        Sat: '',
        Week: ''
      },
      {
        Monday: '',
        Tuesday: '',
        Wednesday: '',
        Thursday: ['基础普拉提', '18:30-19:30 王国强'],
        Friday: '',
        Sat: '',
        Week: ''
      }, {
        Monday: '',
        Tuesday: '',
        Wednesday: '',
        Thursday: '',
        Friday: '',
        Sat: '',
        Week: ['基础普拉提', '18:30-19:30 王国强']
      }
      ]
    }
  },
  methods: {
    goToItem () {
      this.$router.push('/courseManagement')
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.container
  width 100%
  height 100%
  // background-color rgba(0, 0, 255, .08)
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
    .con
      margin-left 10%
      .cell
        text-align center
</style>