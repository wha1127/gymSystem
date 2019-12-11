<template>
  <div class="block">
    <!-- <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="sizes, prev, pager, next"
      :total="100">
    </el-pagination> -->
  </div>
</template>
<script>
export default {
  name:'Paginaction',
  data() {
    return {
      currentPage2:1
    }
  },
  
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.block
  width 1400px
  height 80px
  background-color #f0f2f5
</style>