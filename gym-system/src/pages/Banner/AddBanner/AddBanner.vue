<template>
  <div class="addBanner-detail">
    <div class="main-header">
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :offset="2" :span="1">
            <el-button size="mini" @click="gabackaddBanner">返回</el-button>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-breadcrumb separator="/" id="boxBodyBooton">
              <el-breadcrumb-item :to="{path:'/'}">功能面板</el-breadcrumb-item>
              <el-breadcrumb-item>banner图列表</el-breadcrumb-item>
              <el-breadcrumb-item>上传banner图</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <div class="detail-main">
      <div class="addBanner-header">
        <span>上传banner图</span>
      </div>
      <div class="detail-content">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>banner信息</span>
          </div>
          <div class="text item">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="教练排序:" prop="ranking">
                <el-input v-model="ruleForm.ranking" placeholder="数字越大排位越靠前,数字越小排序越靠后"></el-input>
              </el-form-item>
              <el-form-item label="上传图片:">
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                >
                  <i class="el-icon-circle-plus" style="color: #06f"></i>
                  <span>添加图片</span>
                  <span>图片大小最多3M</span>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt />
                </el-dialog>
              </el-form-item>
              <el-form-item label="链接地址:" prop="adress">
                <el-input v-model="ruleForm.adress" placeholder="请输入http://开头的地址"></el-input>
                <div>
                  <i class="el-icon-warning-outline" style="color:red"></i>
                  <span>需要在微信小程序管理后台添加业务域名才可以访问这个链接</span>
                </div>
              </el-form-item>
              <el-form-item label="上架状态:" prop="state">
                <el-select v-model="ruleForm.state" placeholder="上架">
                  <el-option label="上架" value="upup"></el-option>
                  <el-option label="下架" value="downDown"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </div>
      <div class="detail-foot">
        <el-button type="mini" class="detailFoot" @click="onSubmit">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'addBannerDetail',
  props: ['isShowDetail'],
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      ruleForm: {
        ranking: '',
        adress: '',
        state: ''
      },
      rules: {
        ranking: [
          { required: true, message: '请选择教练排序', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    gabackaddBanner() {
      this.$router.back()
      this.isShowDetail()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.addBanner-detail
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
    .addBanner-header
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
              &:nth-child(2)
                .el-form-item__content
                  .el-upload
                    display flex
                    flex-direction column
                    line-height 2
                    justify-content center
              .el-form-item__label
                width 80px
                text-align left
    .detail-foot
      margin-top 20px
      margin-bottom 60px
      .detailFoot
        width 80px
        color #fff
        background-color #08f
</style>