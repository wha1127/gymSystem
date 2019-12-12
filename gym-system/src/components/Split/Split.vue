<template>
  <div class="splitContainer">
    <el-button class="return" @click="$router.back()">返回</el-button>
    <a href=""><span class="blue" @click="$router.replace('/home')">功能面板</span></a>
    <span class="split">/</span>
    <span>{{name}}</span>
  </div>
</template>

<script>
export default {
  name:"Split",
  props:['name'],
  mounted() {
    console.log(this.$router)
  },
}
</script>

<style lang="stylus" scoped>
  .splitContainer
    height 64px
    width 1440px
    display flex
    justify-content flex-start
    align-items center
    background rgba(255, 255, 255, 1)
    box-shadow 0px 2px 6px 0px rgba(221, 221, 221, 1)
    .return 
      margin-left 100px
    .blue
      margin-left 30px
      color rgba(28,108,230,1)
    .split
      margin 0 5px
</style>