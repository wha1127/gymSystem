<template>
  <div class="GymEditContainer">
    <Header />
    <Split />
    <div class="GymEditContent">
      <div class="GymEditContentTop">
        <p>上传场馆图</p>
      </div>
      <div class="GymEditContentMain">
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>场馆信息</span>
            </div>
            <el-form label-width="80px"
                     label-position="left">
              <el-form-item label="图片标题:">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="排序:">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="上传图片:">
                <el-upload class="avatar-uploader"
                         action="https://jsonplaceholder.typicode.com/posts/"
                         :show-file-list="false"
                         :on-success="handleAvatarSuccess"
                         :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl"
                     :src="imageUrl"
                     class="avatar">
                <i v-else
                   class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              </el-form-item>
              
            </el-form>
          

        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GymEdit",
  data () {
    return {
      imageUrl: ''
    };
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>

<style lang="stylus" scoped>
.GymEditContainer
  width 100%
  height 100%
  display flex
  flex-wrap wrap
  justify-content center
  align-items center
  .GymEditContent
    display flex
    width 1440px
    height 100%
    flex-direction column
    flex-wrap wrap
    justify-content space-around
    background-color rgb(240, 242, 245)
    .GymEditContentTop
      width 1280px
      p
        font-size 22px
        font-weight bold
        margin-left 100px
        position relative
        &:before
          position absolute
          content ''
          height 25px
          left -20px
          border-left 4px solid rgb(28,108,230)
    .GymEditContentMain
      width 1440px
      display flex
      justify-content center
      .box-card
        width 1280px
        .avatar-uploader
          border 1px dashed #d9d9d9
          border-radius 6px
          cursor pointer
          position relative
          display block
          width 178px
          .avatar-uploader-icon
            font-size 28px
            color #8c939d
            width 178px
            height 178px
            line-height 178px
            text-align center
</style>