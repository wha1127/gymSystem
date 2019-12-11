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
                  <el-option label="男" value="man"></el-option>
                  <el-option label="女" value="women"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="星级:" prop="star">
                <el-select v-model="ruleForm.star" placeholder="请选择星级">
                  <el-option label="1星" value="one-star"></el-option>
                  <el-option label="2星" value="two-star"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="级别:" prop="grade">
                <el-select v-model="ruleForm.grade" placeholder="业余教练">
                  <el-option label="业余教练" value="amateur"></el-option>
                  <el-option label="专业教练" value="major"></el-option>
                  <el-option label="魔鬼教练" value="devil"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="教练排序:" prop="ranking">
                <el-input v-model="ruleForm.ranking" placeholder="数字越大排位越靠前,数字越小排序越靠后"></el-input>
              </el-form-item>
              <el-form-item label="上传图片:">
                <ul>
                  <li>
                    <i class="el-icon-circle-plus"></i>
                    <span>添加教练头像</span>
                    <span>(第一张图为默认头像)</span>
                  </li>
                  <li  @mouseenter="showDel=true" @mouseleave="showDel=false">
                    <img src="../images/photos/03.jpg" alt='教练头像' />
                    <a class="delImg" v-show='showDel'>删除</a>
                  </li>
                </ul>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </div>
      <div class="detail-introduce">
        <el-form>
          <el-form-item label="个人简介:" prop="dec1">
            <el-input type="textarea" v-model="ruleForm.dec1"></el-input>
          </el-form-item>
          <el-form-item label="训练介绍:" prop="desc2">
            <el-input type="textarea" v-model="ruleForm.desc2"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="detail-foot">
        <el-button type="mini" class="detailFoot" @click="addCoach">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import {reqAddCoach} from '../../../api'
export default {
  name: 'CoachDetail',
  props:['isShowDetail'],
  data() {
    return {
      showDel: false,
      ruleForm: {
        name: '',
        star: '',
        gender: '',
        grade: '',
        ranking: '',
        desc1: '',
        desc2: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入教练姓名', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        star: [{ required: true, message: '请选择性别', trigger: 'change' }],
        gender: [{ required: true, message: '请选择星级', trigger: 'change' }],
        grade: [{ required: true, message: '请选择级别', trigger: 'change' }],
        ranking: [
          { required: true, message: '请选择教练排序', trigger: 'blur' }
        ],
        desc1: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
        desc2: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      }
    }
  },
  methods: {
    gabackCoach(){
      this.$router.back()
      this.isShowDetail()
    },
    async addCoach(){
      const {name,star,gender,grade:rank,ranking:memberSort,avatar} = this.ruleForm
      console.log(name,star,gender,rank,memberSort,avatar)
      const result = await reqAddCoach({name,star,gender,rank,memberSort,avatar})
      console.log(result)
    }
  },
  
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
    height 700px
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
                  ul
                    display flex
                    li 
                      box-sizing border-box
                      width 200px
                      height 122px
                      display flex
                      flex-direction column
                      justify-content center
                      align-items center
                      margin-right 40px
                      position relative
                      &:nth-child(1)
                        width 200px
                        background-color #eee
                        border 1px dashed #ccc
                        border-radius 3px
                      i
                        padding-top 15px
                        padding-bottom 5px
                        font-size 30px
                        color #08f
                      span
                        height 24px
                        line-height 24px
                      img
                        width 200px
                        height 122px
                        vertical-align middle
                        border-radius 3px
                      .delImg
                        position absolute
                        bottom 0
                        width 100%
                        height 30px
                        line-height 30px
                        color #fff
                        background-color rgba(0,0,0,0.3)
                        text-align center
                        cursor pointer
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