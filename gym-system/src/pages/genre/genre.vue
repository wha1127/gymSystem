<template>
  <div>
    <Header style="width:100%"/>
    <div>
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :offset="2"
                  :span="1">
            <el-button size='mini'
                       @click="goPage">返回</el-button>
          </el-col>
          <el-col :span="10"
                  :offset="1">
            <el-breadcrumb separator="/"
                           id="boxBodyBooton">
              <el-breadcrumb-item :to="{ path: '/' }">功能面板</el-breadcrumb-item>
              <el-breadcrumb-item>类型管理</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
        </el-row>
      </el-card>
      <div class="body">
        <div class="shop">类型管理</div>
        <el-button size='mini'
                   type="primary"
                   class="bodyBottn"
                   @click="centerDialogVisible = !centerDialogVisible">新增类型</el-button>
      </div>
      <div class="bodyBottom">
        <el-table :data="tableData"
                  style="width: 100%">
          <el-table-column prop="id"
                           label="id"
                           width="256">
          </el-table-column>
          <el-table-column prop="name"
                           label="类型名称"
                           width="256">
          </el-table-column>
          <el-table-column prop="type"
                           label="归属商品总数"
                           width="256">
          </el-table-column>
          <el-table-column prop="money"
                           label="实物/虚拟"
                           width="256">
          </el-table-column>
          <el-table-column label="操作"
                           width="256">
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData)"
                         type="text">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-dialog title="添加商品"
                 :visible.sync="centerDialogVisible"
                 width="30%"
                 center
                 class="centerDialogVisible">
        <div>id
          <el-input placeholder="id"
                    v-model="inputTian.id"
                    clearable
                    style="width:250px">
          </el-input>
        </div>
        <div>类型名称
          <el-select v-model="inputTian.name"
                     slot="prepend"
                     placeholder="请选择"
                     style="width:250px">
            <el-option label="运动用品"
                       value="运动用品"></el-option>
            <el-option label="健身用品"
                       value="健身用品"></el-option>
            <el-option label="保健用品"
                       value="保健用品"></el-option>
          </el-select>
        </div>
        <div>归属商品总数
          <el-input placeholder="归属商品总数"
                    v-model="inputTian.type"
                    clearable
                    style="width:250px">
          </el-input>
        </div>
        <div>实物/虚拟
          <el-input placeholder="实物/虚拟"
                    v-model="inputTian.money"
                    clearable
                    style="width:250px">
          </el-input>
        </div>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary"
                     @click="Tianjia">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name: 'commodity',
  data () {
    return {
      input: '',
      centerDialogVisible: false,
      select: '',
      select1: '',
      inputTian: {
        id: null,
        name: '',
        type: '',
        money: ''
      },
      tableData: [],
      tableData1: [{
        id: 7736,
        name: '运动用品',
        type: 20,
        money: '实物'
      }, {
        id: 7746,
        name: '运动用品',
        type: 20,
        money: '实物'
      }]
    }
  },
  methods: {
    goPage () {
      this.$router.back()
    },
    deleteRow (index, rows) {
      rows.splice(index, 1);
    },
    goShop () {
      let input = this.input
      this.tableData = []
      this.tableData1.forEach((item) => {
        if (!input) {
          this.tableData = this.tableData1
        } else {
          if (item.name.startsWith(input)) {
            this.tableData.push(item)
          }
        }
      })
    },
    Tianjia () {
      this.centerDialogVisible = false
      this.tableData1.push(this.inputTian)
    }
  },
  mounted () {
    this.tableData = this.tableData1
  }
}
</script>
<style  lang="stylus" rel="stylesheet/stylus" scoped>

#boxBodyBooton
  line-height 2
.body
  width 1280px
  height 80px
  line-height 80px
  margin 0 auto
  position relative
  .shop
    width 90px
    height 24px
    line-height 24px
    text-align center
    border-left 4px solid #1C6CE6
    margin-left 20px
    position absolute
    top 30px
  .bodyBottn
    float right
    position absolute
    top 30px
    right 30px
.bodyBot
  width 1280px
  height 78px
  line-height 78px
  text-align center
  background-color #fff
  border-radius 10px
  margin 0 auto
  display flex
  .bodyBotTop
    display flex
    margin-left 40px
    .el-input
      width 280px
  .bodyBotBody
    margin-left 80px
    .el-input
      width 180px
  .bodyBotBotton
    margin-left 80px
    .el-input
      width 180px
.bodyBottom
  width 1280px
  border-radius 10px
  margin 0 auto 30px
.centerDialogVisible
  div
    input
      margin 10px auto
</style>
