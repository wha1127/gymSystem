<template>
  <div class="gymContainer">
    <Header />
    <Split />
   <div class="gymContentContainer">
      <div class="gymContent">
      <el-table :data="tableData"
                border
                style="width: 100%" @row-click="handleClick">

        <el-table-column prop="name"
                         label="排序"
                         style="width: 25%" align="center" current-row-key>
        </el-table-column>
        <el-table-column label="场馆图片"
                         style="width: 25%" align="center" current-row-key> 
          <template slot-scope="image">
            <img v-for="(item,index) in image.gym" :src=item :key=index class="head_pic" />
          </template>
        </el-table-column>
        <el-table-column prop="address"
                         label="名称"
                         style="width: 25%" align="center" >
        </el-table-column>

        <el-table-column label="操作"
                         style="width: 25%" align="center" >

          <el-button 
                     type="text"
                     size="small">编辑</el-button>
          <el-button type="text"
                     size="small">上架</el-button>
          <el-button type="text"
                     size="small">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "Gym",
  methods: {
    handleClick(row, column, event){
      console.log(row, column, event)
    }
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '1',
        image: './image/形状 13.png',
        city: '普陀区',
        address: '力量机械区',
        zip: 200333,
      }, {
        date: '2016-05-02',
        name: '2',
        province: '上海',
        city: '普陀区',
        address: '大堂',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '3',
        province: '上海',
        city: '普陀区',
        address: '跑步区',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '4',
        province: '上海',
        city: '普陀区',
        address: '瑜伽',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '4',
        province: '上海',
        city: '普陀区',
        address: '瑜伽',
        zip: 200333
      }],
      image:{
        gym:[
        './image/xitong.png','./image/right.png','./image/形状 11.png','./image/形状 11.png','./image/形状 11.png'
      ]
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
.gymContainer
  width 1440px
  display flex
  flex-wrap wrap
  justify-content center
  margin 0 auto
  .gymContentContainer
    width 1440px
    background-color rgb(240,242,245)
    display flex
    justify-content  center
    .gymContent
      width 1280px
</style>