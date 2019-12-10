<template>
  <div class="container">
    <div>
      <router-link to="/courseManagement"
                   class="course"> 课程管理</router-link>

      <router-link to="/timeTable"
                   class="course">课程表</router-link>
      <router-link to="/activity"
                   class="course">活动编辑</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'App',
  //注册
  components: {

  }

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.container
  width 100%
  height 100%
  .course
    margin-left 10px
    color blue
</style>