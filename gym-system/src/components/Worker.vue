<template>
  <div id="worker-app">
    <el-container class="all-content">
      <!-- 头部样式开始 -->
      <div class="worker-title">
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
                <el-breadcrumb-item>编辑工作人员</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
          </el-row>
        </el-card>
      </div>
      <!-- 头部样式结束 -->

      <!-- 编辑工作人员 开始 -->
      <div class="content-title">
        <div class="a">编辑工作人员</div>
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
                         getCheckedNodes
                         getCheckedKeys
                         ref="tree">
                </el-tree>
              </div>
            </div>
          </div>
        </div>
      </el-main>
      <!-- 中间主体内容结束 -->

      <!-- 底部按钮 -->
      <el-footer>
        <div class="content">
          <el-button type="primary"
                     @click="postMessage">保存</el-button>
          <el-button>取消</el-button>
        </div>
      </el-footer>
    </el-container>
  </div>

</template>

<script>
import { reqRole } from '../api'
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
      status === '启用' ? status = true : status = false
      menus = ['']
      console.log(name, pwd, phone,status,  menus)
      const result = await reqRole({ name, pwd, phone, status, menus })
      console.log(result)
    },
    getCheckedNodes(event){
      console.log(event)
    },
    getCheckedKeys(event){
      console.log(event)
    }
  },

  data () {
    return {
      value: '启用',
      name: '',
      phone: '',
      pwd: '',
      filterText: [],
      options: [{
        value: '选项1',
        label: '启用'
      }, {
        value: '选项2',
        label: '未启用'
      }],
      data: [{
        id: 1,
        label: '课程表',
        children: [{
          id: 9,
          label: '课程表'
        }, {
          id: 10,
          label: '课程表'
        }]
      }, {
        id: 2,
        label: '课程列表',
        children: [{
          id: 5,
          label: '班级列表'
        }, {
          id: 6,
          label: '编辑班级'
        }]
      }, {
        id: 3,
        label: '会员管理',
        children: [{
          id: 7,
          label: '会员管理'
        }, {
          id: 8,
          label: '编辑会员'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#boxBodyBooton
  line-height 3
#worker-app
  width 100%
  height 100%
  .all-content
    width 1280px
    .worker-title
      width 100%
    .content-title
      width 1280px
      height 80px
      line-height 80px
      margin 0 auto
      position relative
      .a
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
      background-color #f0f2f5
      .content
        margin-left 106px
        background-color #fff
        .content-form
          width 100%
          height 620px
          background-color #fff
          margin-left 12px
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
    .content
      margin-left 106px
</style>

