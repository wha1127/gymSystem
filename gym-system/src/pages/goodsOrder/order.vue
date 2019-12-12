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
              <el-breadcrumb-item>订单列表</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
        </el-row>
      </el-card>
      <div class="body">
        <div class="shop">订单列表</div>
      </div>
      <div class="bodyBot">
        <div class="bodyBotTop">
          <span>订单id：</span>
          <el-input placeholder="请输入id"
                    v-model="inputid"></el-input>
        </div>
        <el-col :offset="2"
                :span="1">
          <el-button size='mini'
                     @click="goID">搜索</el-button>
        </el-col>
      </div>
      <div class="bodyBottom">
        <el-table :data="tableData"
                  style="width: 100%"
                  max-height="250">
          <el-table-column prop="id"
                           label="订单id"
                           width="183">
          </el-table-column>
          <el-table-column prop="orderID"
                           label="订单号"
                           width="183">
          </el-table-column>
          <el-table-column prop="price"
                           label="订单价格"
                           width="183">
          </el-table-column>
          <el-table-column prop="integral"
                           label="订单积分"
                           width="183">
          </el-table-column>
          <el-table-column prop="date"
                           label="兑换日期"
                           width="183">
          </el-table-column>
          <el-table-column prop="redeem"
                           label="兑换码"
                           width="183">
          </el-table-column>
          <el-table-column label="操作"
                           width="183">
            <el-button type="text"
                       @click="goDetail">查看详情</el-button>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'order',
  data () {
    return {
      inputid: '',
      select: '',
      select1: '',
      tableData: [],
      tableData1: [{
        id: 7716,
        orderID: '谁变智能健身房',
        price: 200,
        integral: 2000,
        date: '2018-07-20',
        redeem: 165485
      }, {
        id: 7746,
        orderID: '谁变智能健身房',
        price: 200,
        integral: 2000,
        date: '2018-07-20',
        redeem: 165485
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
    goDetail () {
      this.$router.push('/detail')
    },
    goID () {
      let inputid = this.inputid * 1
      this.tableData = []
      this.tableData1.forEach((item) => {
        if (!inputid) {
          this.tableData = this.tableData1
        } else {
          if (item.id === inputid) {
            this.tableData.push(item)
          }
        }
      })
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
  margin 30px auto
</style>
