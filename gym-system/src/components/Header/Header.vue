<template>
  <div class="header">
    <div class="header-left">
      <img src="./images/logo.png"
         alt="logo"
         class="logo">
    <h2 class="title">商家管理后台</h2>
    </div>
    <div class="header-right">
        <img src="./images/message.png" alt="消息提示" class="message">
        <img src="./images/avatar.png" alt="头像" class="avatar">
        <span>用户{{user.name}}</span>
    </div>
  </div>

</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'Header',
  computed: {
    ...mapState({
      user: state => state.user.user
    }),
  },
  mounted() {
    this.$store.dispatch('autoLogin')
  },
}
</script>

<style lang="stylus" scoped>
.header
  height 64px
  width 1440px
  display flex
  justify-content space-between
  align-items center
  background rgba(255, 255, 255, 1)
  box-shadow 0px 2px 6px 0px rgba(221, 221, 221, 1)
  .header-left
    display flex
    align-items center
    .logo
      margin-left 100px
      margin-right 20px
    .title
      margin-left 22px
      font-weight bold
  .header-right
    margin-right 99px
    box-sizing border-box
    margin 20px 99px 20px 20px
    display flex
    align-items center
    .avatar
      margin 0 12px 0 40px
    .message
      margin 0 12px 0 40px
</style>