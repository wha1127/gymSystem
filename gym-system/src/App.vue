<template>
  <div id="app">
<<<<<<< HEAD
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
=======
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background-color #ddd
</style>
>>>>>>> 教练列表,预约管理,banner图静态页面搭建完毕
