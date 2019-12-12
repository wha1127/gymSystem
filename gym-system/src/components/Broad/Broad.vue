<template>
  <div class="Broad">
    <div class="broad-title">
      <span class="title" >课程播报</span>
     </div> 
    <ul class="card">
      <li class="Yoga">
        <p class="course" >瑜伽课</p>
        <p class="time" >16:00-17:00</p>
      </li>
      <li class="bicycle">
        <p  class="course" >动感单车</p>
        <p  class="time" >17:00-18:00</p>
      </li>
      <li class="fit">
        <p  class="course" >有氧运动</p>
        <p class="time" >19:00-20:00</p>
      </li>
      <li class="mult">
        <p class="course" >综合有氧</p>
        <p class="time" >21:00-22:00</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'Broad'
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.Broad
  width 1400px
  background-color #f0f2f5
  margin 0 auto
  .broad-title
    width 100%
    height 82px
    display flex
    align-items center
    .title
      font-size 19px
      padding-left 15px
      border-left 4px solid #1c6ce6 
      margin-left 100px
  .card
    width 1280px
    height 147px
    background-color #f0f2f5
    display flex
    justify-content space-between
    margin 0 auto
    li
      width 297px
      height 139px
      background-color #ffffff
      display flex
      flex-direction column
      justify-content center
      align-items center
      &.Yoga
        border-bottom  8px solid #1c6ce6
      &.bicycle
        border-bottom  8px solid #42dedc
      &.fit
        border-bottom  8px solid #42de54
      &.mult
        border-bottom  8px solid #fdc140
      .course
        margin-bottom 10px
        font-size 20px
</style>