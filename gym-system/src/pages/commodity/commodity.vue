<template>
  <div>
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
              <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
        </el-row>
      </el-card>
      <div class="body">
        <div class="shop">商品管理</div>
        <el-button size='mini'
                   type="primary"
                   class="bodyBottn"
                   @click="centerDialogVisible = !centerDialogVisible">添加商品</el-button>
      </div>
      <div class="bodyBot">
        <div class="bodyBotTop">
          <span>商品名称：</span>
          <el-input placeholder="请输入商品名称"
                    v-model="input"></el-input>
        </div>
        <el-col :offset="2"
                :span="1">
          <el-button size='mini'
                     @click="goShop">搜索</el-button>
        </el-col>
      </div>
      <div class="bodyBottom">
        <el-table :data="tableData"
                  style="width: 100%">
          <el-table-column prop="id"
                           label="商品id"
                           width="130">
          </el-table-column>
          <el-table-column prop="name"
                           label="名称"
                           width="130">
          </el-table-column>
          <el-table-column prop="type"
                           label="类型"
                           width="130">
          </el-table-column>
          <el-table-column prop="money"
                           label="金额"
                           width="130">
          </el-table-column>
          <el-table-column prop="integral"
                           label="积分"
                           width="130">
          </el-table-column>
          <el-table-column prop="sort"
                           label="排序"
                           width="130">
          </el-table-column>
          <el-table-column prop="sold"
                           label="已售"
                           width="130">
          </el-table-column>
          <el-table-column label="操作"
                           width="240">
            <template slot-scope="scope">
              <el-breadcrumb separator="|">
                <el-breadcrumb-item>
                  <el-button type="text"
                             @click="goMerchandise(scope.$index)">编辑</el-button>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                  <el-button @click.native.prevent="deleteRow(scope.$index, tableData)"
                             type="text">
                    删除
                  </el-button>

                </el-breadcrumb-item>
              </el-breadcrumb>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-dialog title="添加商品"
                 :visible.sync="centerDialogVisible"
                 width="30%"
                 center
                 class="centerDialogVisible">
        <div>商品id
          <el-input placeholder="商品id"
                    v-model="inputTian.id"
                    clearable>
          </el-input>
        </div>
        <div>名称
          <el-input placeholder="名称"
                    v-model="inputTian.name"
                    clearable>
          </el-input>
        </div>
        <div>类型
          <el-input placeholder="类型"
                    v-model="inputTian.type"
                    clearable>
          </el-input>
        </div>
        <div>金额
          <el-input placeholder="金额"
                    v-model="inputTian.money"
                    clearable>
          </el-input>
        </div>
        <div>积分
          <el-input placeholder="积分"
                    v-model="inputTian.integral"
                    clearable>
          </el-input>
        </div>
        <div>排序
          <el-input placeholder="排序"
                    v-model="inputTian.sort"
                    clearable>
          </el-input>
        </div>
        <div>已售
          <el-input placeholder="已售"
                    v-model="inputTian.sold"
                    clearable>
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
        money: 0,
        integral: 0,
        sort: 0,
        sold: 0
      },
      tableData: [],
      tableData1: [{
        id: 7736,
        name: '运动手环',
        type: '运动',
        money: 200,
        integral: 5000,
        sort: 1,
        sold: 20
      }, {
        id: 7746,
        name: '手表',
        type: '运动',
        money: 200,
        integral: 5000,
        sort: 2,
        sold: 20
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
    },
    goMerchandise (index) {
      const rows = JSON.stringify(this.tableData1)
      this.$router.push({ path: '/home/merchandise', query: { rows, index } })
    }
  },
  mounted () {
    this.tableData = this.tableData1
    if (this.$route.query.rows) {
      const index = JSON.parse(this.$route.query.index)
      const rows = JSON.parse(this.$route.query.rows)
      this.tableData1[index] = rows
    }
  }
}
</script>
<style  lang="stylus" rel="stylesheet/stylus">
body
  background-color #ccc
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
  margin 30px auto
.centerDialogVisible
  div
    input
      margin 10px auto
</style>
