<template>
  <div class="splitContainer">
    <el-button class="return"
               @click="goBack">返回</el-button>
    <span class="blue">功能面板</span>
    <span class="split">/</span>
    <span>banner图列表</span>
  </div>
</template>

<script>
export default {
  name: "Split",
  methods: {
    goBack () {
      this.$router.back()
    }
  }
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
    color rgba(28, 108, 230, 1)
  .split
    margin 0 5px
</style>