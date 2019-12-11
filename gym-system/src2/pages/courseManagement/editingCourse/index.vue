<template>
  <div class="containerClass">
    <div class="container-one">
      <div class="content">
        <!-- 课程头部 -->
        <header class="title">
          <span class="title-left">编辑课程</span>
        </header>
        <!-- 课程信息 -->
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>课程信息</span>
          </div>
          <div class="text">
            <div class="courseTitle">
              <span class="message-item">课程标题:</span>
              <el-input v-model="input"
                        placeholder="请输入课程标题"
                        style="width: 80%"></el-input>
            </div>
            <div class="price">
              <span class="message-item1">价格:</span>
              <el-input v-model="input"
                        placeholder="请输入课程价格"
                        style="width: 200px"></el-input>
              <el-checkbox>仅支持预约</el-checkbox>
              <el-checkbox v-model="checked"></el-checkbox>
            </div>
            <div class="discount">
              <span class="message-item">限时折扣(<span class="sp">选填</span>):</span>
              <el-input v-model="input"
                        placeholder="请输入课程折扣价格"
                        style="width: 200px"></el-input>
              <!-- 选择时间 -->

              <div class="block">
                <el-date-picker unlink-panels
                                v-model="value1"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                </el-date-picker>
              </div>
            </div>
            <!-- 限时信息 -->
            <div class="info">
              <span class="message-item2">限时信息:</span>
              <el-input v-model="input"
                        placeholder="请输入课程折扣信息(最多10个字)"
                        style="width: 80%"></el-input>
            </div>
            <!-- 标签 -->
            <div class="label">
              <span class="message-item3">标签:</span>
              <el-input v-model="input"
                        placeholder="请输入标签(最多3个标签,最多4个字)"
                        style="width: 200px"></el-input>
              <el-tag v-for="tag in tags"
                      :key="tag.name"
                      closable
                      :type="tag.type">
                {{tag.name}}
              </el-tag>

            </div>
            <!-- 上传封面 -->
            <div class="select">
              <span class="message-item4">上传封面:</span>

              <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                         list-type="picture-card"
                         :on-preview="handlePictureCardPreview"
                         :on-remove="handleRemove">
                <i class="el-icon-circle-plus"></i>
                <p>上传封面</p>
                <p>至少一张,最多5张,建议尺寸</p>
                <p>750*443px</p>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%"
                     :src="dialogImageUrl"
                     alt="">
              </el-dialog>

              <img src="./image/jiaolian.png"
                   alt>
            </div>
          </div>
        </el-card>
        <!-- 编辑课程下card布局 -->
        <el-card class="box-card">
          <el-form>
            <el-form-item label="课程简介:">
              <el-input type="textarea"
                        style="width: 90%"
                        v-model="desc"
                        placeholder="请输入课程简介"></el-input>
            </el-form-item>
            <el-form-item label="训练效果:">

              <el-input type="textarea"
                        style="width: 90%"
                        v-model="desc"
                        placeholder="请输入训练效果"></el-input>
            </el-form-item>
            <el-form-item label="注意事项:">
              <el-input type="textarea"
                        style="width: 90%"
                        v-model="desc"
                        placeholder="请输入注意事项"></el-input>
            </el-form-item>
          </el-form>

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
      // 标签部分
      tags: [
        { name: '燃脂', type: '' },
        { name: '塑形', type: 'success' },
        { name: '瘦形', type: 'danger' }
      ],
      checked: true,
      input: '',
      desc: '',
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
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.containerClass
  width 100%
  background-color #eee
  .container-one
    .content
      margin-top 30px
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
          .courseTitle
            margin-bottom 10px
            .message-item
              margin-right 53px
          .price
            margin-bottom 10px
            .message-item1
              margin-right 85px
            .el-checkbox__inner
              margin-left 15px
          .discount
            display flex
            align-items center
            margin-bottom 10px
            .message-item
              .sp
                color #ccc
            .block
              margin-left 20px
          .info
            margin-bottom 10px
            .message-item2
              margin-right 53px
          .label
            margin-bottom 10px
            .message-item3
              margin-right 85px
            .el-tag
              margin-left 20px
          .select
            display flex
            margin 20px 0
            .message-item4
              margin-right 35px
            .el-upload
              width 200px
              height 150px
              margin 0 200px 0 53px
              display flex
              flex-direction column
              justify-content center
              align-items center
              line-height 1.1
              i
                margin-bottom 10px
                font-size 30px
                color #00c
            img
              width 200px
              height 100px
          .add-student
            margin 20px 0
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