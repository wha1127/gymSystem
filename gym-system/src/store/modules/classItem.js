import { GET_CLASS, UPDATE_CLASS, ADD_CLASS, DELETE_CLASS } from '../mutaiton-type.js'
import { reqCourse, reqAddCourse } from '../../api/index'



//状态
const state = {
  classes: []
}

// 同步
const mutations = {
  //获取
  [GET_CLASS] (state, classes) {
    state.classes = classes
  },
  //更新
  [UPDATE_CLASS] () {

  },
  //增加
  [ADD_CLASS] (state, classes) {
    state.classes.push(classes)
  },
  // 删除
  [DELETE_CLASS] () {

  }
}

// 获取异步的
const actions = {
  // 获取
  async getClass ({ commit }) {
    const result = await reqCourse()
    console.log(result)
    if (result.status === 200) {
      const classes = result.data.data
      commit(GET_CLASS, classes)
    }
  },

  //添加
  async addClass ({ commit }, newClass) {
    await reqAddCourse(newClass)
    commit(ADD_CLASS, newClass)

  }
}

//同步代码的异步get方法
const getters = {}


// 暴露
export default {
  state,
  mutations,
  actions,
  getters
}