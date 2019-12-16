<template>
  <!-- 搜索的弹窗 elementUi对话框组件 -->
  <div>
    <el-button type="text" @click="centerDialogVisible = true">搜索</el-button>

    <el-dialog :visible.sync="centerDialogVisible" width="30%" center>
      <img src="http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg" style="width:50px,height:50px" alt />
      <p class="name">王雨</p>
      <p class="phone">13099944999</p>
      <p class="phone">离场</p>
      <!-- <input type="text"  placeholder="请输入手牌编号" /> -->
      <span slot="footer" class="dialog-footer">
        <!-- <el-button  @click="fang">确认归还</el-button> -->
        <el-button type="primary" @click="fang">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  porps: ['scope.row'],
  name: 'Band',
  data() {
    return {
      centerDialogVisible: false,
      
    }
  },
  methods: {
    fang() {
      // window.console.log(this.scope.row)
      
      this.centerDialogVisible=false
      // this.$attrs.change.degree++
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.el-dialog__body
  display flex
  flex-direction column
  align-items center
  img
    width 100px
    height 100px
    display inline-block
  .name
    text-align center
    font-size 20px
  .phone
    text-align center
    font-size 20px
  input
    width 80%
    display block
    height 50px
    margin 0 auto
    font-size 25px
    text-align center
</style>