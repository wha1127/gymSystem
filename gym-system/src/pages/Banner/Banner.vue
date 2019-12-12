<template>
  <div>
    <div class="banner-outer" v-if="isShow">
      <div class="main-header">
        <el-card class="box-card">
          <el-row :gutter="20">
            <el-col :offset="2" :span="1">
              <el-button size="mini" @click="$router.push('/order')">返回</el-button>
            </el-col>
            <el-col :span="10" :offset="1">
              <el-breadcrumb separator="/" id="boxBodyBooton">
                <el-breadcrumb-item :to="{path:'/'}">功能面板</el-breadcrumb-item>
                <el-breadcrumb-item>banner图列表</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
          </el-row>
        </el-card>
      </div>
      <div class="bannerContainer">
        <div class="banner-header">
          <p class="header-left">banner图列表</p>
          <el-button class="header-right" type="primary" @click='addBanner'>新增banner图</el-button>
        </div>
        <div class="bannerList">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="bannerSort" label="排序" width="200"></el-table-column>
            <el-table-column prop="bannerAvatar" label="banner图片" width="300">
              <img class="bannerAvatar" src="../../utils/images/avatar/01.jpg" alt />
            </el-table-column>
            <el-table-column prop="bannerUrl" label="跳转链接" width="300">
              <template slot-scope="scope">
                <div v-if="scope.row.bannerUrl">
                  <p @click="goNewPage(scope.row.bannerUrl)" style='cursor: pointer'>{{scope.row.bannerUrl}}</p>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="options" label="操作">
              <el-button type="text" size="small" @click="goDetail">编辑</el-button>
              <span class="shu">|</span>
              <el-button type="text" size="small">上架</el-button>
              <span class="shu">|</span>
              <el-button type="text" size="small">删除</el-button>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <router-view v-if="!isShow" :isShowDetail="isShowDetail"></router-view>
  </div>
</template>
<script>
export default {
  name: 'banner',
  data() {
    return {
      isShow: true,
      name: '',
      value: '',
      options: [
        {
          value: '男',
          label: '男'
        },
        {
          value: '女',
          label: '女'
        }
      ],
      tableData: [
        {
          bannerSort: '1',
          bannerAvatar: '',
          bannerUrl: 'http://www.baidu.com'
        },
        {
          bannerSort: '2',
          bannerAvatar: '',
          bannerUrl: 'http://www.jd.com'
        },
        {
          bannerSort: '3',
          bannerAvatar: '',
          bannerUrl: 'https://www.taobao.com'
        }
      ]
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    //跳转到添加banner界面
    goDetail() {
      this.isShowDetail()
      this.$router.push('/banner/detail')
    },
    isShowDetail() {
      this.isShow = !this.isShow
    },
    //点击链接跳转
    goNewPage(url) {
      window.open(url)
    },
    //跳转到添加banner图界面
    addBanner() {
      this.$router.push('/banner/add')
      this.isShowDetail()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.banner-outer
  width 100%
  height 100%
  .main-header
    width 100%
    .el-breadcrumb
      line-height 2
  .bannerContainer
    width 1280px
    margin 0 auto
    .banner-header
      width 100%
      height 60px
      line-height 60px
      display flex
      justify-content space-between
      align-items center
      .header-left
        height 25px
        line-height 25px
        font-size 20px
        padding-left 10px
        margin-left 20px
        border-left 3px solid #02a774
      .header-right
        height 40px
        font-size 16px
        color #fff
    .bannerList
      width 100%
      background-color #fff
      border-radius 6px
      .el-table
        border-radius 6px
        .cell
          text-align center
          .shu
            color #ccc
            margin 15px
        .bannerAvatar
          width 120px
          height 60px
          border-radius 3px
        .has-gutter
          tr
            th
              color #000
              background-color #cff
</style>