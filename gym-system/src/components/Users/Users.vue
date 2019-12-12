<template>
  <div class="users">
    <div class="users-title">
      <p class="title">入场用户</p>
    </div>
    <div>
      <el-table class="From" :data="tempalte" style="width: 1280px" height="500">
        <el-table-column fixed label="头像" width="80">
          <template slot-scope="scope">
            <img    :src="scope.row.image" alt style="width: 50px;height: 50px" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="用户姓名" width="80"></el-table-column>
        <el-table-column prop="phone" label="手机号" width="200"></el-table-column>
        <el-table-column prop="sex" label="性别" width="70"></el-table-column>
        <el-table-column prop="degree" label="进场次数" width="80"></el-table-column>
        <el-table-column prop="time" label="时间卡" width="120"></el-table-column>
        <el-table-column prop="num" label="次卡" width="80"></el-table-column>
        <el-table-column prop="how" label="课程数量" width="80"></el-table-column>
        <el-table-column prop="in" label="入会时间" width="150"></el-table-column>
        <el-table-column prop="state" label="状态" width="100"></el-table-column>
        <el-table-column label="操作" width="190">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">
              <Band :change="scope.row" v-if="scope.row.handle" />
              <Jie :change='scope.row' v-else/>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <Paginaction />
    </div>
    <!-- <router-view></router-view> -->
   
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Paginaction from './Paginaction/Paginaction'
import Band from '../Band/Band'
import Jie from '../Band/Jie'

export default {
  name: 'Users',
  data() {
    return {
      
      currentPage2: 3,
      
    }
  },

  components: {
    Paginaction,
    Band,
    Jie
  },
  computed:{
    ...mapState(['tempalte'])
  },
  methods:{
    handleClick(row){
     if(row.handle){
      //  window.console.log('111')
       row.state='入场'
     }else{
       row.state='离场'
     }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.users
  width 1400px
  background-color #f0f2f5
  margin 0 auto
  .users-title
    width 100%
    height 82px
    display flex
    align-items center
    .title
      font-size 19px
      padding-left 15px
      border-left 4px solid #1c6ce6
      margin-left 100px
  .From
    margin 0 auto
</style>