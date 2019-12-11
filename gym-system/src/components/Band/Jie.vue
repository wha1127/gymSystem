<template>
  <div>
    <el-button type="text" @click="centerDialogVisible = true">借出手环</el-button>

    <el-dialog :visible.sync="centerDialogVisible" width="30%" center>
      <img src="../../../static/images/IMG_5044.jpg" style="width:50px,height:50px" alt />
      <p class="name">求风</p>
      <p class="phone">15846615991</p>
      <input type="text" placeholder="请输入手牌编号" />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="change" style="width:100%" >借出手环</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props:['scope.row'],
  name: 'Band',
  data() {
    return {
      centerDialogVisible: false
    }
  },
  methods:{
    change(){
      this.$attrs.change.handle=!this.$attrs.change.handle
      this.$attrs.change.degree--
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