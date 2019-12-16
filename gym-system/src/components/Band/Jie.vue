<template>
<!-- 借 -->
  <div>
    <el-button type="text" @click="centerDialogVisible = true">借出手环</el-button>

    <el-dialog :visible.sync="centerDialogVisible" width="30%" center>
      <img :src="this.$attrs.change.image" style="width:50px,height:50px" alt />
      <p class="name">{{this.$attrs.change.name}}</p>
      <p class="phone">{{this.$attrs.change.phone}}</p>
      <input type="text" v-model='jie' placeholder="请输入手牌编号" />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="change" style="width:100%" >借出手环</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  props:['scope.row'],
  name: 'Band',
  data() {
    return {
      centerDialogVisible: false,
      jie:''
    }
  },
  methods:{
    change(){
      this.$attrs.change.handle=!this.$attrs.change.handle
      this.$attrs.change.degree++
      // window.console.log(this.bill)
      this.$store.dispatch('downBill',this.jie)
    }
  },
  computed:{
    ...mapState(['bill','tempalte'])
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