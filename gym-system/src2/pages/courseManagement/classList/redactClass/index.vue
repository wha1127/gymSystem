<template>
  <div class="containerClass">
    <div class="container-one">
      <div class="content">
        <!-- 课程头部 -->
        <header class="title">
          <span class="title-left">编辑班级</span>
        </header>
        <!-- 班级信息 -->
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>班级信息</span>
          </div>
          <div class="text">
            <div>
              <span class="message-item">班级名称:</span>
              <el-input v-model="input"
                        placeholder="请输入内容"
                        style="width: 90%"></el-input>
            </div>

            <div class="select">
              <span>选择教练:</span>
              <div class="add-coach">
                <el-button type="text"
                           @click="dialogTableVisible = true">
                  <i class="el-icon-circle-plus"></i>
                </el-button>

                <el-dialog title="选择教练"
                           :visible.sync="dialogTableVisible"
                           style="width: 100%">
                  <el-table :data="gridData">
                    <el-table-column property="photo"
                                     label="教练头像">
                      <img src="./image/jiaolian.png"
                           class="imgs"
                           alt>
                    </el-table-column>
                    <el-table-column property="name"
                                     label="姓名"></el-table-column>
                    <el-table-column property="old"
                                     label="年龄"></el-table-column>
                    <el-table-column property="six"
                                     label="性别"></el-table-column>
                    <el-table-column property="operate"
                                     label="操作">
                      <template slot-scope="scope">
                        <div>
                          <div v-if="scope.row.operate">
                            <el-checkbox v-model="checked"></el-checkbox>
                          </div>
                          <div v-else>
                            <el-checkbox></el-checkbox>
                          </div>
                        </div>

                      </template>

                    </el-table-column>
                  </el-table>
                  <el-button type="primary">提交</el-button>
                </el-dialog>

                <p>添加教练</p>
              </div>

              <img src="./image/jiaolian.png"
                   alt>
            </div>
            <div>
              <span class="message-item">教练名称:</span>
              <el-input v-model="input"
                        placeholder="请输入内容"
                        style="width: 90%"></el-input>
            </div>
            <div class="add-student">
              <span class="message-item">添加学生:</span>
              <div>
                <el-button type="primary"
                           class="add-student-btn"
                           @click="dialogTableVisible1 = true">添加学生
                </el-button>
                <el-dialog title="学员列表"
                           :visible.sync="dialogTableVisible1"
                           style="width: 100%">
                  <el-table :data="gridData1">
                    <el-table-column property="Id"
                                     label="用户id">

                    </el-table-column>
                    <el-table-column property="icon"
                                     label="头像"></el-table-column>
                    <el-table-column property="user"
                                     label="用户姓名"></el-table-column>
                    <el-table-column property="cellphone"
                                     label="手机号"></el-table-column>
                    <el-table-column property="gender"
                                     label="性别"></el-table-column>
                    <el-table-column property="Time"
                                     label="报名时间"></el-table-column>
                    <el-table-column property="operat"
                                     label="操作">
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </div>

              <span>已报20人,查看名单</span>
            </div>
          </div>
        </el-card>
        <!-- 开课部分 -->
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>开课时间</span>
          </div>
          <!-- 选择时间 -->
          <div class="selectTime">
            <span class="selectTime-size">选择时间:</span>
            <div class="block">
              <el-date-picker v-model="value1"
                              unlink-panels
                              type="daterange"
                              range-separator="至"
                              start-placeholder="开始日期"
                              end-placeholder="结束日期">
              </el-date-picker>
            </div>
          </div>
          <!-- 多选框 -->
          <div class="checked">
            <el-checkbox>周一</el-checkbox>
            <el-checkbox v-model="checked">周二</el-checkbox>
            <el-checkbox>周三</el-checkbox>
            <el-checkbox>周四</el-checkbox>
            <el-checkbox>周五</el-checkbox>
            <el-checkbox>周六</el-checkbox>
            <el-checkbox>周日</el-checkbox>
          </div>
          <!-- 下面表单 -->
          <div class="bottomTable">
            <el-table :data="tableData"
                      style="width: 80%">
              <el-table-column prop="week"
                               label="星期">
              </el-table-column>
              <el-table-column prop="startTime"
                               label="开始时间"
                               width="180">
                <el-time-select v-model="value"
                                :picker-options="{
                                start: '08:30',
                                step: '00:15',
                                end: '18:30'}"
                                placeholder="选择时间(时分)"
                                width="220">
                </el-time-select>
              </el-table-column>
              <el-table-column prop="to"
                               label="至">
              </el-table-column>
              <el-table-column prop="overTime"
                               label="结束时间">
                <el-time-picker v-model="value2"
                                :picker-options="{
                                selectableRange: '00:00:00 - 23:59:00' }"
                                placeholder="任意时间点">
                </el-time-picker>
              </el-table-column>
              <el-table-column prop="operate"
                               label="操作">
                <el-button type="text"
                           size="small">同上</el-button>
              </el-table-column>

            </el-table>
          </div>
        </el-card>
        <el-button type="primary">保存</el-button>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "redactClass",
  data () {
    return {
      gridData: [{
        photo: '',
        name: '王小虎',
        old: '25',
        six: '男',
        operate: ''
      }, {
        photo: '',
        name: '王小虎',
        old: '25',
        six: '男',
        operate: 'true'
      }, {
        photo: '',
        name: '王小虎',
        old: '25',
        six: '男',
        operate: ''
      }, {
        photo: '',
        name: '王小虎',
        old: '25',
        six: '男',
        operate: ''
      }],
      gridData1: [{
        Id: "123",
        icon: "",
        user: '王小虎',
        cellphone: "12313123",
        gender: "男",
        Time: "2016-08-03",
        operat: '删除'
      },
      {
        Id: "123",
        icon: "",
        user: '王小虎',
        cellphone: "12313123",
        gender: "男",
        Time: "2016-08-03",
        operat: '删除'
      },
      {
        Id: "123",
        icon: "",
        user: '王小虎',
        cellphone: "12313123",
        gender: "男",
        Time: "2016-08-03",
        operat: '删除'
      },
      {
        Id: "123",
        icon: "",
        user: '王小虎',
        cellphone: "12313123",
        gender: "男",
        Time: "2016-08-03",
        operat: '删除'
      },
      {
        Id: "123",
        icon: "",
        user: '王小虎',
        cellphone: "12313123",
        gender: "男",
        Time: "2016-08-03",
        operat: '删除'
      }],
      dialogTableVisible: false,
      dialogTableVisible1: false,
      value2: new Date(2016, 9, 10, 18, 0),
      value: '',
      checked: true,
      input: '',
      //选择时间的部分  
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value1: '',
      //下card表单
      tableData: [{
        week: '二',
        startTime: '',
        to: '至',
        overTime: '',
        operate: ''
      }, {
        week: '三',
        startTime: '',
        to: '至',
        overTime: '',
        operate: ''
      }, {
        week: '四',
        startTime: '',
        to: '至',
        overTime: '',
        operate: ''
      }, {
        week: '五',
        startTime: '',
        to: '至',
        overTime: '',
        operate: ''
      },
      {
        week: '六',
        startTime: '',
        to: '至',
        overTime: '',
        operate: ''
      },
      {
        week: '日',
        startTime: '',
        to: '至',
        overTime: '',
        operate: ''
      }]
    }
  },
  methods: {


  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.containerClass
  width 100%
  background-color #eee
  .container-one
    .content
      // width 100%
      // height 90%
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
      .box-card
        width 80%
        background-color #fff
        margin 0 0 20px 10%
        padding-left 10px
        // 公共卡片样式
        .clearfix
          display flex
          justify-content space-between
          align-items center
          // 班级信息中的第一个
        .selectTime
          display flex
          align-items center
          .selectTime-size
            margin-right 10px
        .text
          .message-item
            margin-right 10px
          .select
            display flex
            margin 20px 0
            .add-coach
              width 200px
              height 100px
              margin 0 200px 0 20px
              border 1px dashed rgba(6, 6, 6 .1)
              display flex
              flex-direction column
              justify-content center
              align-items center
              background-color rgba(6, 6, 6 .1)
              &:hover
                border-color #409EFF
              .el-button
                margin-left 0
              .imgs
                width 60px
                height 40px
              .el-button--primary
                width 100%
              i
                margin-bottom 10px
                font-size 30px
                color #00c
            img
              width 200px
              height 100px
          .add-student
            margin 20px 0
            display flex
            align-items center
            .add-student-btn
              margin 0 30px 0 0
        .checked
          margin 10px 0 20px 77px
          // 下card表单样式
        .bottomTable
          margin-left 77px
          .el-input__inner
            width 160px
        .cell
          text-align center
      .el-button
        margin-left 10%
</style>