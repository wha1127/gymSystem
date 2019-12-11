<template>
  <div class="coach-detail">
    <div class="main-header">
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :offset="2" :span="1">
            <el-button size="mini" @click="gabackCoach">返回</el-button>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-breadcrumb separator="/" id="boxBodyBooton">
              <el-breadcrumb-item :to="{path:'/'}">功能面板</el-breadcrumb-item>
              <el-breadcrumb-item>教练管理 / 教练详情</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <div class="detail-main">
      <div class="coach-header">
        <span>教练详情</span>
      </div>
      <div class="detail-content">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>教练信息</span>
          </div>
          <div class="text item">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="教练姓名:" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入教练姓名/英文名"></el-input>
              </el-form-item>
              <el-form-item label="性别:" prop="gender">
                <el-select v-model="ruleForm.gender" placeholder="性别">
                  <el-option label="男" value="男"></el-option>
                  <el-option label="女" value="女"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="星级:" prop="star">
                <el-select v-model="ruleForm.star" placeholder="请选择星级">
                  <el-option label="1星" value="1星"></el-option>
                  <el-option label="2星" value="2星"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="级别:" prop="grade">
                <el-select v-model="ruleForm.grade" placeholder="业余教练">
                  <el-option label="业余教练" value="业余教练"></el-option>
                  <el-option label="专业教练" value="专业教练"></el-option>
                  <el-option label="魔鬼教练" value="魔鬼教练"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="教练排序:" prop="ranking">
                <el-input v-model="ruleForm.ranking" placeholder="数字越大排位越靠前,数字越小排序越靠后"></el-input>
              </el-form-item>
              <el-form-item label="上传图片:" prop="avatar">
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :on-success="upload"
                >
                  <i class="el-icon-circle-plus" style="color: #06f"></i>
                  <span>添加图片</span>
                  <span>图片大小最多3M</span>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt />
                </el-dialog>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </div>
      <div class="detail-introduce">
        <el-form :model="ruleForm" :rules="rules">
          <el-form-item label="会员种类:" prop="desc1">
            <el-input type="textarea" v-model="ruleForm.desc1"></el-input>
          </el-form-item>
          <el-form-item label="训练介绍:" prop="desc2">
            <el-input type="textarea" v-model="ruleForm.desc2"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="detail-foot">
        <el-button type="mini" :plain="true" class="detailFoot" @click.prevent="onSubmit(ruleForm)">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'CoachDetail',
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      showDel: false,
      ruleForm: {
        name: '',
        star: '',
        gender: '',
        grade: '',
        avatar: '',
        ranking: '',
        desc1: '',
        desc2: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入教练姓名', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        gender: [{ required: true, message: '请选择性别', trigger: 'change' }],
        star: [{ required: true, message: '请选择星级', trigger: 'change' }],
        grade: [{ required: true, message: '请选择级别', trigger: 'change' }],
        ranking: [
          { required: true, message: '请选择教练排序', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 5 个字符', trigger: 'blur' }
        ],
        desc1: [
          { required: true, message: '请填写活动形式', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ],
        desc2: [
          { required: true, message: '请填写活动形式', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions(['addCoach']),
    gabackCoach() {
      this.$router.back()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
      // console.log(file)
    },
    upload(response, file, fileList) {
      // console.log(response, file, fileList)
      this.ruleForm.avatar = file.url
    },
    onSubmit(ruleForm) {
      console.log(this.$refs.ruleForm)
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          const {
            name,
            desc1: memberCount,
            grade: rank,
            ranking: sort,
            gender,
            star,
            avatar
          } = this.ruleForm
          const coach = { name, avatar, memberCount, rank, sort, gender, star }
          // console.log(coach)
          const result = this.addCoach(coach)
          console.log('提交成功!')
          // this.ruleForm.name = ''
          // this.rueForm.star = ''
          // this.rueForm.gender = ''
          // this.rueForm.grade = ''
          // this.rueForm.avatar = ''
          // this.rueForm.ranking = ''
          // this.rueForm.desc1 = ''
          // this.rueForm.desc2 = ''
          this.$router.push('/coach')
          this.$message({
          message: '恭喜你，添加成功~',
          type: 'success'
        })
        } else {
          console.log('error submit!!')
          this.$message.error('错了哦，添加失败!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.coach-detail
  width 100%
  height 100%
  overflow scroll
  .main-header
    width 100%
    .el-breadcrumb
      line-height 2
  .detail-main
    width 1280px
    margin 0 auto
    .coach-header
      box-sizing border-box
      width 100%
      padding 30px
      span
        border-left 3px solid #0af
        padding-left 10px
    .detail-content
      .box-card
        .el-card__header
          padding-left 48px
        .el-card__body
          .el-form
            padding-left 30px
            .el-form-item
              .el-form-item__label
                width 80px
                text-align left
              &:nth-child(1)
                .el-form-item__content
                  .el-input
                    width 300px
              &:nth-child(2)
                .el-form-item__content
                  .el-input
                    width 150px
              &:nth-child(3)
                .el-form-item__content
                  .el-input
                    width 150px
              &:nth-child(4)
                .el-form-item__content
                  .el-input
                    width 150px
              &:nth-child(5)
                .el-form-item__content
                  .el-input
                    width 300px
              &:nth-child(6)
                .el-form-item__content
                  width 200px
                  height 122px
                  .el-upload
                    display flex
                    flex-direction column
                    line-height 2
                    justify-content center
    .detail-introduce
      background-color #fff
      margin-top 20px
      padding 10px 54px
      border-radius 6px
      .el-form
        .el-form-item
          display flex
          .el-form-item__label, .el-form-item__content
            .el-textarea
              .el-textarea__inner
                width 300px
                height 100px
    .detail-foot
      margin-top 20px
      margin-bottom 60px
      .detailFoot
        width 80px
        color #fff
        background-color #08f
</style>