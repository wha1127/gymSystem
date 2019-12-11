<template>
  <el-card class="box-card">
    <el-row :gutter="20">
      <el-col :offset="2"
              :span="1">
        <el-button size='mini'>返回</el-button>
      </el-col>
      <el-col :span="10"
              :offset="1">
        <el-breadcrumb separator="/"
                       id="boxBodyBooton">
          <el-breadcrumb-item :to="{ path: '/' }">功能面板</el-breadcrumb-item>
          <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>

  </el-card>
</template>
<script>


export default {
  name:'Header'
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #boxBodyBooton
    line-height 2
</style>