<template>
  <div class="loan">
    <div class="loan-title">
      <span class="title">借出手环清单</span>
    </div>
    <ul class="main1">
      <li :class="{action:isShowbulk===index}"  v-for="(item,index) in bill" :key='index' @click="addClass(index)">{{item}}</li>

      
    </ul>
  </div>
</template>
<script>
export default {
  name:'Loan',
  data() {
    return {
      bill:['00001111','00001112','00001113','00001114','00001115','00001116','00001117','00001118','00001119','00001110','00001120','000011121','000011122','000011123','000011124','000011125','000011126','000011127','000011128','000011129','000011130','000011131','000011132','000011133','000011134','000011135','000011136'],
      lindex:''
    }
  },
  computed: {
    isShowbulk(){
      return this.lindex
    }
  },
  methods: {
    addClass(index){
      this.lindex = index
    }
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .loan
    width 1400px
    background-color #f0f2f5
    margin 0 auto
    .loan-title
      width 100%
      height 82px
      display flex
      align-items center
      .title
        font-size 19px
        padding-left 15px
        border-left 4px solid #1c6ce6 
        margin-left 100px
    .main1
      width 1280px
      height 184px
      background-color #ffffff
      margin 0 auto
      border-radius 15px
      display flex
      flex-wrap wrap
      padding-bottom  24px
      li
        width 99px
        height 32px
        border 1px solid  #dddddd
        margin-left 36px
        margin-top 24px
        text-align center
        border-radius 5px
        line-height 32px
        &.action
          border 1px solid #1c6ce6
          color #1c6ce6
</style>