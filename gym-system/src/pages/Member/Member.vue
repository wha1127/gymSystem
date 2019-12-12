<template>
  <div class="member" >
    <Header/>
    <Split :name="$router.history.current.meta"/>
    <div class="member-title">
      <span class="title">
        会员卡管理
      </span>
    </div>
    <ul class="main" v-show="showCard">
      <li class="ban">
        <!-- <p>半年卡</p>
        <p>半年无限进场,送私教课</p> -->
        <button @click="$router.push('/Bianji')" class="alter"></button>
        <button class="start" ></button>
      </li>
      <li class="ci">kojiu
        <!-- <p>次卡</p>
        <p>20次入场,送体验课一次</p> -->
        <button class="alter"></button>
        <button class="start" ></button>
      </li>
      <li class="nian">
        <!-- <p>两年卡</p>
        <p>两年无限进场,送10次私教课</p> -->
        <button class="alter"></button>
        <button class="start" ></button>
      </li>
      <li class="ci" >
        <!-- <p>1</p>
        <p>半年无线进场,送私教课</p> -->
        <button class="alter"></button>
        <button class="start" ></button>
      </li>
    </ul>
    
  </div>
</template>
<script>
export default {
  name:'Member',
  data() {
    return {
      showCard:true
    }
  },
  methods:{
    
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.member
  width 1400px
  height 776px
  background-color #f0f2f5
  margin 0 auto
  // 入场管理
  .member-title
    width 100%
    height 82px
    display flex
    justify-content space-between
    align-items center 
    .title
      font-size 19px
      padding-left 15px
      border-left 4px solid #1c6ce6 
      margin-left 100px
  .main
    width 1280px
    height 526px
    background-color #ffffff
    margin 0 auto
    display flex
    
    flex-wrap wrap
    li
      width 373px
      height 208px
      // background-color green
      margin-top 40px
      margin-left 40px
      display flex
      align-items flex-end
      &.ban
        background-image url('../../../static/images/ban.png')
      &.ci
        background-image url('../../../static/images/ci.png')
      &.nian
        background-image url('../../../static/images/two.png')
      button
        width 186px
        height 47px
        border-style none 
        opacity 0

</style>