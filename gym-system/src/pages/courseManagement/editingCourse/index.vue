<template>
  <div class="containerClass">
    <Header style="width:100%"/>
    <Split :name="$router.history.current.meta" style="width:100%"/>
    <div class="container-one">
      <el-form class="content"
               :model="ruleForm"
               :rules="rules"
               ref="ruleForm">
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
            <el-form-item class="courseTitle"
                          prop="title">
              <span class="message-item">课程标题:</span>
              <el-input v-model="ruleForm.title"
                        placeholder="请输入课程标题"
                        style="width: 80%"></el-input>
            </el-form-item>

            <el-form-item class="price"
                          prop="price">
              <span class="message-item1">价格:</span>
              <el-input v-model="ruleForm.price"
                        placeholder="请输入课程价格"
                        style="width: 200px"></el-input>
              <el-checkbox>仅支持预约</el-checkbox>
              <el-checkbox v-model="checked"></el-checkbox>
            </el-form-item>

            <el-form-item class="discount">
              <span class="message-item">限时折扣(<span class="sp">选填</span>):</span>
              <el-form-item prop="salePrice">
                <el-input v-model="ruleForm.salePrice"
                          placeholder="请输入课程折扣价格"
                          style="width: 200px"></el-input>
              </el-form-item>

              <!-- 选择时间 -->

              <el-form-item class="block"
                            prop="value1">
                <el-date-picker unlink-panels
                                v-model="ruleForm.value1"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
            </el-form-item>

            <!-- 限时信息 -->
            <el-form-item class="info"
                          prop="saleMessage">
              <span class="message-item2">限时信息:</span>
              <el-input v-model="ruleForm.saleMessage"
                        placeholder="请输入课程折扣信息(最多10个字)"
                        style="width: 80%"></el-input>
            </el-form-item>

            <!-- 标签 -->
            <el-form-item class="label"
                          prop="sign">
              <span class="message-item3">标签:</span>
              <el-input v-model="ruleForm.sign"
                        placeholder="请输入标签(最多3个标签,最多4个字)"
                        style="width: 200px"></el-input>
              <el-tag v-for="tag in tags"
                      :key="tag.name"
                      closable
                      :type="tag.type">
                {{tag.name}}
              </el-tag>

            </el-form-item>

            <!-- 上传封面 -->
            <el-form-item class="select">
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
            </el-form-item>
          </div>
        </el-card>
        <!-- 编辑课程下card布局 -->
        <el-card class="box-card">

          <el-form-item label="课程简介:"
                        prop="introduce">
            <el-input type="textarea"
                      style="width: 90%"
                      v-model="ruleForm.introduce"
                      placeholder="请输入课程简介"></el-input>
          </el-form-item>
          <el-form-item label="训练效果:"
                        prop="influence">

            <el-input type="textarea"
                      style="width: 90%"
                      v-model="ruleForm.influence"
                      placeholder="请输入训练效果"></el-input>
          </el-form-item>
          <el-form-item label="注意事项:"
                        prop="attention">
            <el-input type="textarea"
                      style="width: 90%"
                      v-model="ruleForm.attention"
                      placeholder="请输入注意事项"></el-input>
          </el-form-item>

        </el-card>
        <el-button type="primary"
                   @click="submitForm('ruleForm')">保存</el-button>
      </el-form>

    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
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
      //表单初始值部分
      ruleForm: {
        title: '',
        price: '',
        salePrice: '',
        value1: '',
        saleMessage: '',
        sign: '',
        introduce: '',
        influence: '',
        attention: ''
      },
      //表单检验部分
      rules: {
        title: [
          { required: true, message: '请输入课程标题', trigger: 'blur' },
          { min: 4, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入课程价格', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        salePrice: [
          { required: true, message: '请输入课程折扣价格', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        value1: [
          { required: true, message: '请输入开始日期和结束日期', trigger: 'blur' }
        ],
        saleMessage: [
          { required: true, message: '请输入课程折扣信息', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ],
        sign: [
          { required: true, message: '请输入标签', trigger: 'blur' }
        ],

        introduce: [
          { required: true, message: '请输入课程简介', trigger: 'blur' },
          { min: 4, max: 100, message: '长度在 4 到 100 个字符', trigger: 'blur' }
        ],
        influence: [
          { required: true, message: '请输入训练效果', trigger: 'blur' },
          { min: 4, max: 100, message: '长度在 4 到 100 个字符', trigger: 'blur' }
        ],
        attention: [
          { required: true, message: '请输入注意事项', trigger: 'blur' },
          { min: 4, max: 100, message: '长度在 4 到 100 个字符', trigger: 'blur' }
        ]
      },

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
    },
    submitForm (formName) {
      const { title,
        price,
        salePrice,
        saleMessage,
        sign,
        introduce,
        influence,
        attention } = this.ruleForm
        console.log(title,price)
      this.$store.dispatch('addClass',
        {          title,
          price,
          salePrice,
          saleMessage,
          sign,
          introduce,
          influence,
          attention        })
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
      //跳转页面
      this.$router.push('/courseManagement')
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();

    }
  },
  mounted () {

    console.log(this.newClass)
  },
  computed: {
    ...mapState({
      className: state => state.classItem.className,
      newClass: state => state.classItem.newClass
    })
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
            margin-bottom 30px
            .message-item
              margin-right 53px
          .price
            margin-bottom 30px
            .message-item1
              margin-right 85px
            .el-checkbox__inner
              margin-left 15px
          .discount
            width 100%
            height 45px
            .el-form-item__content
              width 100%
              height 40px
              display flex
              margin-bottom 30px
            .message-item
              .sp
                color #ccc
            .block
              margin-left 20px
          .info
            margin-bottom 30px
            .message-item2
              margin-right 53px
          .label
            margin-bottom 30px
            .message-item3
              margin-right 85px
            .el-tag
              margin-left 20px
          .select
            display flex
            margin 20px 0
            width 100%
            .el-form-item__content
              width 100%
              display flex
              .message-item4
                margin-right 35px
            .el-upload
              width 200px
              height 100px
              margin 0 200px 0 0px
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
      .el-form-item__content
        margin-bottom 10px
      .el-button
        margin-left 10%
</style>