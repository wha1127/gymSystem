<template>
  <div>
    <!-- 头部样式开始 -->
    <Header style="width:100%"/>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :offset="2"
                :span="1">
          <el-button siza="mini"
                      @click="goPage">返回</el-button>
        </el-col>
        <el-col :span="10"
                :offset="1">
          <el-breadcrumb separator="/"
                          id="boxBodyBooton">
            <el-breadcrumb-item :to="{ path:'/'}">功能面板</el-breadcrumb-item>
            <el-breadcrumb-item>工作人员</el-breadcrumb-item>
            <el-breadcrumb-item>添加工作人员</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </el-card>
    <!-- 头部样式结束 -->

    <!-- 编辑工作人员 开始 -->
    <div class="content-title">
      <div>添加工作人员</div>
    </div>
    <!-- 编辑工作人员 结束 -->

    <!-- 中间主体内容开始 -->
    <el-main class="worker-content">
      <div class="content">
        <div class="content-form">
          <p>
            <span class="el-span1">姓名:</span>
            <el-input class="el-input"
                      v-model="name"
                      placeholder="请输入工作人员姓名(必填)">
            </el-input>
          </p>
          <p><span class="el-span2">手机号:</span>
            <el-input class="el-input"
                      v-model="phone"
                      placeholder="请输入手机号(必填,手机号为登录账号)">
            </el-input>
          </p>
          <p><span class="el-span3">登录密码:</span>
            <el-input class="el-input"
                      v-model="pwd"
                      placeholder="请输入登录密码">
            </el-input>
          </p>
          <p><span class="el-span4">账号状态:</span>
            <el-select v-model="value"
                      placeholder="启用">
              <el-option class="el-option"
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
              </el-option>
            </el-select>
          </p>
          <div><span>账号权限:</span>
            <div class="worker-power">

              <el-tree class="filter-tree"
                      :data="data"
                      show-checkbox
                      node-key="id"
                      default-expand-all
                      :default-checked-keys="[]"
                      :props="defaultProps"
                      :filter-node-method="filterNode"
                      @check = "getCurrentKey"
                      ref="tree">
              </el-tree>
            </div>
          </div>
        </div>
      </div>
    </el-main>
    <!-- 中间主体内容结束 -->

    <!-- 底部按钮 -->
    <el-footer class="worker-footer">
      <div>
        <el-button type="primary"
                    @click="postMessage" >保存</el-button>
        <el-button>取消</el-button>
      </div>
    </el-footer>
  </div>

</template>

<script>
import { reqRole } from '../../api'
export default {
  name: 'Worker',
  methods: {
    goPage () {
      this.$router.back()
    },
    filterNode (value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    async postMessage () {
      let { name, pwd, phone, value: status, filterText: menus } = this
      console.log(name, pwd, phone,status,  menus)
      const result = await reqRole({ name, pwd, phone, status, menus })
      console.log(result)
      this.$router.replace('/person')
    },
    getCurrentKey(event1,event2){
      console.log(event1,event2)
      let {filterText} = this
      for(let i=0;i<event2.checkedNodes.length;i++){
        if(filterText.indexOf(event2.checkedNodes[i].label) === -1){
          filterText.push(event2.checkedNodes[i].label)
        }
      }
      
      this.filterText = filterText
      filterText = {}
      console.log(this.filterText)
    },
  },
  
  data () {
    return {
      value: '启用',
      name: '',
      phone: '',
      pwd: '',
      filterText: [],
      options: [{
        label: '启用',
        value: '启用',
      }, {
        label: '未启用',
        value: '未启用',
      }],
      data: [{
        id: 1,
        label: '会员卡管理',
        children: [{
          id: 6,
          label: '会员卡'
          }, {
          id: 7,
          label: '编辑会员卡'
          }]
          }, {
          id: 3,
          label: '会员管理',
          children: [{
            id: 10,
            label: '会员管理'
            }, {
            id: 11,
            label: '编辑会员'
            }]
          }, {
          id: 4,
          label: '教练管理',
          children: [{
            id: 12,
            label: '教练管理'
            }, {
            id: 13,
            label: '编辑教练'
            }]
          }, {
          id: 5,
          label: '商品管理',
          children: [{
            id: 14,
            label: '商品管理'
            }, {
            id: 15,
            label: '编辑编辑商品教练'
          }],
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }      
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
body 
  background-color #ccc
#boxBodyBooton
  line-height 3
.content-title
  width 1280px
  height 70px
  line-height 70px
  margin-left 100px
  position relative
  div
    width 108px
    height 24px
    line-height 24px
    text-align center
    border-left 4px solid #1c6ce6
    margin-left 126px
    position absolute
    top 30px
.worker-content
  width 1280px
  margin 0 auto
  .content
    display flex
    justify-content center
    background-color #fff
    .content-form
      width 1280px
      height 620px
      margin-left: 100px
      background-color #fff
      .el-span1
        margin-right 44px
      .el-span2
        margin-right 30px
      .el-span3
        margin-right 15px
      .el-span4
        margin-right 15px
      .el-input
        width 330px
      .el-input2
        margin-left 15px
      .worker-power
        width 342px
        height 100%
        border 1px solid #fff
        margin-left 69px
        margin-top -24px
.worker-footer
  width 1280px
  margin 0 auto
</style>

