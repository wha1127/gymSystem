<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="sizes, prev, pager, next"
      :total="100">
    </el-pagination>
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
  methods: {
    handleSizeChange(){

    },
    handleCurrentChange(){

    },
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.block
  float right 
  overflow hidden
  margin-right 60px 
  margin-bottom 70px
</style>