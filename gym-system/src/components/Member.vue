<template>
  <div>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :offset="2"
                :span="1">
          <el-button siza="mini">返回</el-button>
        </el-col>
        <el-col :span="10"
                :offset="1">
          <el-breadcrumb separator="/"
                         id="boxBodyBooton">
            <el-breadcrumb-item :to="{ path:'/'}">功能面板</el-breadcrumb-item>
            <el-breadcrumb-item>会员列表</el-breadcrumb-item>
            <el-breadcrumb-item>会员详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </el-card>
    <div class="member-title">
      <div>添加会员</div>
    </div>

    <!-- 会员基础信息开始 -->
    <el-card class="member-card">
      <div slot="header" class="clearfix">
        <span>会员基础信息</span>
      </div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" placeholder="输入会员姓名(必填)" ></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input label-width="40px" v-model="form.phone" placeholder="输入手机号(必填)"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.region" placeholder="男">
            <el-option label="男" value="man"></el-option>
            <el-option label="女" value="woman"></el-option>
          </el-select>
        </el-form-item>
      </el-form>  
    </el-card>
    <!-- 会员基础信息结束 -->

    <!-- 会员卡信息开始 -->
    <el-card class="member-card2">
      <div slot="header" class="clearfix">
        <span>会员卡信息</span>
      </div>
      <div class="club-card">
        <div class="club-card1">
          时长卡: 剩余:30天
          <el-button @click="dialogFormVisible = true" class="primary-club1" type="primary" plain>充值</el-button>
          <el-dialog title="充值会员卡" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="会员卡类型" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="时长卡">
                  <el-option label="时长卡" value="timeCard"></el-option>
                  <el-option label="次卡" value="onceCard"></el-option>
                  <el-option label="课程卡" value="classCard"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="会员卡名称" :label-width="formLabelWidth">
                <el-input v-model="form.card" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="备注信息" :label-width="formLabelWidth">
                <el-input v-model="form.remark" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="会员卡时长" :label-width="formLabelWidth">
                <el-input v-model="form.duration" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="会员卡售价" :label-width="formLabelWidth">
                <el-input v-model="form.price" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
          <el-button class="danger-club1" type="danger" plain>清空操作</el-button>
        </div>
        <!-- <div class="club-card2">
          次卡: 剩余2次,2018-12-31日到期
          <el-button  @click="dialogTableForm = true" class="primary-club2" type="primary" plain>充值</el-button>
          <el-dialog title="充值会员卡" :visible.sync="dialogTableVisible">
          <el-table :data="gridData">
            <template>
              <img class="club-img" src="../images/3.png" alt=""/>
            </template>            
          </el-table>
          </el-dialog>
          <el-button class="danger-club2" type="danger" plain>清空操作</el-button>
        </div> -->
        <div class="club-card3">
          课程卡: 基础普拉提
          <el-button class="primary-club3" type="primary" plain  @click="dialogTableVisible = true">搜索</el-button>
          <template class="class-card">
            <el-dialog title="充值会员卡" :visible.sync="dialogTableVisible"  width="960px">
            <el-table  :data="gridData" border >
              <el-table-column property="img" label="课程封面" width="120px">
                <template>
                  <img src="../images/01.jpg" alt="" style="width:80px;height:40px">
                </template>
              </el-table-column>
              <el-table-column property="name" label="课程名称" width="100px"></el-table-column>
              <el-table-column property="account" label="报名人数" width="100px"> </el-table-column>
              <el-table-column property="power" label="价格"  width="90px"> </el-table-column>
              <el-table-column property="state" label="优惠" width="90px"></el-table-column>
              <el-table-column label="标签" width="180px">
                <template>
                  <el-button type="primary" plain>燃脂</el-button>
                  <el-button type="success" plain>塑性</el-button>
                </template>
              </el-table-column>
              <el-table-column prop="state" label="状态" width="90px"></el-table-column>
              <el-table-column label="操作" width="120px">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">选择班级</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogTableVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
            </div>
            </el-dialog>
          </template>
          <el-button class="danger-club3" type="danger" plain>清空操作</el-button>          
        </div>
      </div>
    </el-card>
    <!-- 会员卡信息结束 -->
  </div>
</template>

<script>
export default {
  name: 'Member',
  data () {
    return {
      formLabelWidth: '120px',
      dialogTableVisible: false,
      dialogFormVisible: false, 
      form: {
        name: '',
        region: ''
      },
      gridData: [{
          img: '',
          name: '基础普拉提',
          account: '20',
          power: '4800元',
          state: '上架'
        }, {
          img: '',
          name: '基础普拉提',
          account: '20',
          power: '4800元',
          state: '上架'
        }, {
          img: '',
          name: '基础普拉提',
          account: '20',
          power: '4800元',
          state: '上架'
        }, {
          img: '',
          name: '基础普拉提',
          account: '20',
          power: '4800元',
          state: '上架'
        },{
          img: '',
          name: '基础普拉提',
          account: '20',
          power: '4800元',
          state: '上架'
        },{
          img: '',
          name: '基础普拉提',
          account: '20',
          power: '4800元',
          state: '上架'
        }]
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
body
  background-color #ccc
#boxBodyBooton
  line-height 3
.member-title
  width 1280px
  height 80px
  line-height 80px
  margin 0 auto
  position relative
  div
    width 108px
    height 24px
    line-height 24px
    border-left 4px solid #1c6ce6
    padding-left 20px
    position absolute
    top 30px
.member-card
  width 1280px
  margin 0 auto
.member-card2
  width 1280px
  margin 30px auto
  .club-card
    width 1200px
    margin 0 auto
    .club-card1
      margin-top 5px
      .primary-club1
        margin-left 258px
      .danger-club1
        margin-left 40px
    .club-card2
      margin-top 5px
      .primary-club2
        margin-left 146px
      .club-img
        width 340px
        height 189px
    .club-card3
      margin-top 5px
      .class-card
        width 960px
        display inline
      .primary-club3
        margin-left 248px
      .danger-club3
        margin-left 40px
.el-input__inner
  width 40px
</style>