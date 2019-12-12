<template>
  <div>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :offset="2"
                :span="1">
          <el-button size='mini'
                     @click="goPage">返回</el-button>
        </el-col>
        <el-col :span="10"
                :offset="1">
          <el-breadcrumb separator="/"
                         id="boxBodyBooton">
            <el-breadcrumb-item :to="{ path: '/' }">功能面板</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
            <el-breadcrumb-item>编辑商品</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </el-card>
    <div class="body">
      <div class="shop">编辑商品</div>
    </div>
    <el-card class="boxCard">
      <el-form ref="form"
               :model="rows"
               label-width="100px">
        <el-form-item label="商品id："
                      style="width:330px">
          <el-input v-model="rows.name"
                    placeholder="请输入商品id(1-12个字符)"></el-input>
        </el-form-item>
        <el-form-item label="商品名称："
                      style="width:330px">
          <el-input v-model="rows.type"
                    placeholder="请输入商品名称(1-12个字符)"></el-input>
        </el-form-item>
        <el-form-item label="商品类型：">
          <el-select v-model="rows.price"
                     placeholder="电子">
            <el-option label="电子"
                       value="电子"></el-option>
            <el-option label="运动"
                       value="运动"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="金额："
                      style="width:330px">
          <el-input v-model="rows.points"
                    placeholder="请输入正整数"></el-input>
        </el-form-item>
      </el-form>
      <div style="display:flex"
           class="upload">
        商品图片：
        <el-upload action="http://localhost:5000"
                   list-type="picture-card"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
      </div>
    </el-card>
    <el-row>
      <el-button class="boxBottom"
                 type="primary"
                 @click="goCommodity">保存</el-button>
    </el-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { type } from 'os';
export default {
  name: 'commodity',
  data () {
    return {
      rows: {
        name: '',
        type: '',
        price: '',
        points: 0,
        id: 0
      },
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  computed: {
    ...mapState({
      good: state => state.goods.good
    })
  },
  methods: {
    goPage () {
      this.$router.back()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    goCommodity () {
      this.$router.back()
      const { _id, type, price, name, points } = this.rows
      this.$store.dispatch('updategoods', { _id, type, price, name, points })
    }
  },
  async mounted () {
    this.$store.dispatch('getgood')
    const index = this.$route.query.index
    this.rows = this.good[index]
    this.rows.name = this.$route.query.row
    this.rows.id = this.rows._id
  }
}
</script>
<style  lang="stylus" rel="stylesheet/stylus">
body
  background-color #ccc
#boxBodyBooton
  line-height 2
.body
  width 1280px
  height 80px
  line-height 80px
  margin 0 auto
  position relative
  .shop
    width 90px
    height 24px
    line-height 24px
    text-align center
    border-left 4px solid #1C6CE6
    margin-left 20px
    position absolute
    top 30px
.boxCard
  width 1280px
  margin 0 auto
  .upload
    margin-left 19px
    font-size 14px
    color #353535
    .el-upload
      margin-left 10px
.boxBottom
  width 104px
  height 40px
  line-height 19px
  text-align center
  margin 25px auto 100px 119px
</style>
