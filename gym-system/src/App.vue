<template>
  <div class="container">
    <Header />
    <Split />
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
  // height 100%
  .course
    margin-left 10px
    color blue
</style>