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
import Paginaction from './Paginaction/Paginaction'
import Band from '../Band/Band'
import Jie from '../Band/Jie'
export default {
  name: 'Users',
  data() {
    return {
      tempalte: [
        {
          name: '求生',
          phone: '15666666666',
          sex: '男',
          degree: '20',
          time: '剩余30天',
          num: '剩余20次',
          how: '10',
          in: '2018-02-20  10:00',
          state: '入场',
          handle: true,
          image:'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg'
        },
        {
          name: '秋风',
          phone: '18888888888',
          sex: '女',
          degree: '20',
          time: '剩余30天',
          num: '剩余20次',
          how: '10',
          in: '2018-02-20  10:00',
          state: '入场',
          handle: true,
          image:'http://file02.16sucai.com/d/file/2014/0829/372edfeb74c3119b666237bd4af92be5.jpg'
        },
        {
          name: '下雨',
          phone: '13099999999',
          sex: '男',
          degree: '15',
          time: '剩余70天',
          num: '剩余28次',
          how: '10',
          in: '2018-02-20  10:00',
          state: '已离场',
          handle: false,
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576069438311&di=59e0e6bc4e246badd2eb207d2036590a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F79d9c9a1b559cbc8dee0dbb4130f9d6c381f0aad18116-PXTNYy_fw658'
        },
        {
          name: '刘雨',
          phone: '13099999939',
          sex: '男',
          degree: '13',
          time: '剩余70天',
          num: '剩余28次',
          how: '10',
          in: '2018-02-20  10:00',
          state: '已离场',
          handle: true,
          image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576069438310&di=d2f1bd6f1a66e609a7cca891d4dc7965&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20181018%2F21%2F1539869253-pjGAkBCJqM.jpg'
        },
        {
          name: '王雨',
          phone: '13099944999',
          sex: '男',
          degree: '335',
          time: '剩余70天',
          num: '剩余28次',
          how: '10',
          in: '2018-02-20  10:00',
          state: '已离场',
          handle: false,
          image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576069667350&di=863408f6178d6e0dab3c2cb83d4c83f6&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F5cfb520a18889f7e50cb7a70ed88d339f9056409d7a2-8cHPJm_fw658"
        },
        {
          name: '赵雨',
          phone: '13099933999',
          sex: '女',
          degree: '133',
          time: '剩余70天',
          num: '剩余28次',
          how: '10',
          in: '2018-02-20  10:00',
          state: '已离场',
          handle: true,
          image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576069667350&di=c95ce835697ed9831a712e2e08dd6f0b&imgtype=0&src=http%3A%2F%2Fp0.so.qhmsg.com%2Ft01e637e6fb60e4922f.jpg"
        },
        {
          name: '钱雨',
          phone: '13099999944',
          sex: '男',
          degree: '15',
          time: '剩余70天',
          num: '剩余28次',
          how: '10',
          in: '2018-02-20  10:00',
          state: '已离场',
          handle: false,
          image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576069667350&di=c81bb84eced7b0740f0217f7c145b5a5&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1c02fd473c85de24f7b59bdb4dcac465088579576998-2ocyn3_fw658"
        },
        {
          name: '孙雨',
          phone: '13033999999',
          sex: '男',
          degree: '15',
          time: '剩余70天',
          num: '剩余28次',
          how: '10',
          in: '2018-02-20  10:00',
          state: '已离场',
          handle: false,
          image:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2811981460,2826734177&fm=26&gp=0.jpg"
        },
        {
          name: '李雨',
          phone: '13399999999',
          sex: '男',
          degree: '15',
          time: '剩余70天',
          num: '剩余28次',
          how: '10',
          in: '2018-02-20  10:00',
          state: '已离场',
          handle: false,
          image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576069667346&di=b077d06b8f9d9b12cb72938b40782899&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F80453057b736ae8243b9ac34b51d695d5e27bc2c106a4-BnpKXJ_fw658"
        },
        {
          name: '周雨',
          phone: '14099999999',
          sex: '男',
          degree: '15',
          time: '剩余70天',
          num: '剩余28次',
          how: '10',
          in: '2018-02-20  10:00',
          state: '已离场',
          handle: false,
          image:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1295411592,3694069419&fm=26&gp=0.jpg"
        },
        {
          name: '吴雨',
          phone: '13099992399',
          sex: '男',
          degree: '15',
          time: '剩余70天',
          num: '剩余28次',
          how: '10',
          in: '2018-02-20  10:00',
          state: '已离场',
          handle: false,
          image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576069667346&di=0ff066abd86e7747bf56f8edd99bbca0&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140920%2F12106414_225818176676_2.jpg"
        },
        {
          name: '郑雨',
          phone: '13099999923',
          sex: '男',
          degree: '15',
          time: '剩余70天',
          num: '剩余28次',
          how: '10',
          in: '2018-02-20  10:00',
          state: '已离场',
          handle: false,
          image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4211761867,1180506769&fm=26&gp=0.jpg"
        },
        {
          name: '欧阳雨',
          phone: '13889999999',
          sex: '男',
          degree: '15',
          time: '剩余70天',
          num: '剩余28次',
          how: '10',
          in: '2018-02-20  10:00',
          state: '已离场',
          handle: false,
          image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2252990155,3982827049&fm=26&gp=0.jpg"
        },
        {
          name: '诸葛雨',
          phone: '12229999999',
          sex: '男',
          degree: '15',
          time: '剩余70天',
          num: '剩余28次',
          how: '10',
          in: '2018-02-20  10:00',
          state: '已离场',
          handle: false,
          image:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2935166841,1880939248&fm=26&gp=0.jpg"
        },
        {
          name: '夏侯雨',
          phone: '13099998769',
          sex: '男',
          degree: '15',
          time: '剩余70天',
          num: '剩余28次',
          how: '10',
          in: '2018-02-20  10:00',
          state: '已离场',
          handle: false,
          image:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2419253953,862047000&fm=26&gp=0.jpg"
        },
        {
          name: '东方雨',
          phone: '15099999999',
          sex: '男',
          degree: '15',
          time: '剩余70天',
          num: '剩余28次',
          how: '10',
          in: '2018-02-20  10:00',
          state: '已离场',
          handle: false,
          image:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2518382028,3837494011&fm=26&gp=0.jpg"
        },
      ],
      currentPage2: 3,
      
    }
  },

  components: {
    Paginaction,
    Band,
    Jie
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