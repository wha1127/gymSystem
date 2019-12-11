<template>
  <div class="GymEditContainer">
    <Header />
    <Split />
    <div class="GymEditContent">
      <div class="GymEditContentTop">
        <p>上传场馆图</p>
      </div>
      <div class="GymEditContentMain">
        <el-table :data="tableData"
                  height="250"
                  border
                  style="width: 100%">
          <el-table-column prop="date"
                           label="日期"
                           width="180">
          </el-table-column>
          <el-table-column prop="name"
                           label="姓名"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           label="地址">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"GymEdit",
  data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
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
    background-color rgb(240,242,245)
    .GymEditContentTop
      width 1280px
    .GymEditContentContent
      width 1280px
      height 100%
      display flex
      justify-content center
</style>