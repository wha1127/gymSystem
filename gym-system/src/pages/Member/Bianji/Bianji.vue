<template>
  <div class="edit" >
    <Header/>
    <Split :name="$router.history.current.meta"/>
    <div class="edit-title" >
      <span class="title" >编辑会员卡</span>
    </div>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="会员卡类型" >
          <el-select v-model="form.region" placeholder="时长卡">
              <el-option label="半年卡" value="bannian"></el-option>
              <el-option label="两年卡" value="liangnian"></el-option>
              <el-option label="次卡" value="cika"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="会员卡名称">
          <el-input v-model="form.a" placeholder="请输入会员卡名称" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="备注信息">
          <el-input v-model="form.b" placeholder="请输入备注信息" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="会员卡时长">
          <el-input v-model="form.c" placeholder="请输入备注信息" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="会员卡售价">
          <el-input v-model="form.d" placeholder="请输入备注信息" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="启用状态" >
          <el-select v-model="form.region1" placeholder="启用">
              <el-option label="启用" value="qiyong"></el-option>
              <el-option label="停用" value="ting'yong"></el-option>
            </el-select>
        </el-form-item>
      </el-form>
    </el-card>
    <el-button type="primary" class="botton" @click="goback" >保存</el-button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      form: {
          region: '',
          region1: '',
          a:'',
          b:'',
          c:'',
          d:''
        }
    }
  },
  methods: {
    goback(){
      this.$router.back('/Member')
    }
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.edit
  width 1400px
  background-color #f0f2f5
  margin 0 auto
  .edit-title
    width 100%
    height 82px
    display flex
    align-items center
    .title
      font-size 19px
      padding-left 15px
      border-left 4px solid #1c6ce6 
      margin-left 100px
  .box-card
    width 1280px
    margin 30px auto
  .botton
    margin 0 auto 150px 100px
</style>