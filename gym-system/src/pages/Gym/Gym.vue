<template>
  <div class="gymContainer">
    <Header />
    <Split :name="$router.history.current.meta"/>
   <div class="gymContentContainer">
      <div class="gymContent">
      <el-table :data="tableData"
                  style="width: 100%">
          <el-table-column label="排序"
                           style="width:25%" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.sort }}</span>
            </template>
          </el-table-column>
          <el-table-column label="场馆图片"
                           style="width:25%" align="center">
            <template slot-scope="scope">
              <img :src="scope.row.image" alt="场馆图片" width="100px" height="100px">
            </template>
          </el-table-column>
          <el-table-column label="姓名"
                           style="width:25%" align="center">
            <template slot-scope="scope">
              {{scope.row.name}}
            </template>
          </el-table-column>
          <el-table-column label="操作" style="width:25%" align="center">
            <template slot-scope="scope">
              <el-button size="mini"
                         @click="$router.push('/gym/gymedit')">编辑</el-button>
              <el-button size="mini"
                         type="danger"
                         @click="deleteGym(scope.$index)">删除</el-button>
            </template>
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
    handleEdit(row, column){
      console.log(row, column)
    },
    deleteGym(index){
      this.tableData.splice(index,1)
    }
  },
  data () {
    return {
      tableData: [{
        sort: '1',
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576073852535&di=49ddee5cfbddac7b346af7c8b4a1c61f&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10%2F253%2Fw650h403%2F20180727%2Fbef8-hfvkitx5729475.jpg',
        name: '力量机械区',
        address: '力量机械区',
      }, {
        sort: '2',
        image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4189548746,2661140082&fm=26&gp=0.jpg',
        name: '普陀区',
        address: '大堂',
      }, {
        sort: '3',
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576073852534&di=55a2171d271d880c272d669bfc83c03f&imgtype=0&src=http%3A%2F%2Fimg.cndesign.com%2FWorks%2F20170605%2Ff66dfdfe78b34a4681498aa9ead7a872.jpeg',
        name: '普陀区',
        address: '跑步区',
      }, {
        sort: '4',
        image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576073917085&di=902a36d097164195f04dce5a694b976c&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1234273557%2C377465149%26fm%3D214%26gp%3D0.jpg',
        name: '普陀区',
        address: '瑜伽',
      }],
    }
  },
}
</script>

<style lang="stylus" scoped>
.gymContainer
  width 1440px
  height 100%
  display flex
  flex-wrap wrap
  justify-content center
  margin 0 auto
  .gymContentContainer
    width 1440px
    background-color rgb(240,242,245)
    display flex
    justify-content  center
    align-items center
    height 100%
    .gymContent
      width 1280px
</style>