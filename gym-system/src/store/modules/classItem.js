import { GET_CLASS, UPDATE_CLASS, ADD_CLASS, DELETE_CLASS } from '../mutaiton-type.js'
import { reqCourse, reqAddCourse, reqDeleteCourse, reqUpdateCourse } from '../../api/index'



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
  /*  [UPDATE_CLASS] (state, classes) {
     state.classes = classes
   }, */
  //增加
  [ADD_CLASS] (state, classes) {
    state.classes.push(classes)
  },
 /*  [DELETE_CLASS] (state, id) {
    state.classes.filter(item => {
      return item._id !== id
    })
  }, */
   // 删除
   [DELETE_CLASS] (state, title) {
     let classes = []
     state.classes.forEach((item) => {
       if (item.title !== title) {
         classes.push(item)
       }
     })
     console.log(classes)
     state.classes = classes
   }
}

// 获取异步的
const actions = {
  // 获取
  async getClass ({ commit }) {
    const result = await reqCourse()
    //console.log(result)
    if (result.status === 200) {
      const classes = result.data.data
      commit(GET_CLASS, classes)
    }
  },
  /*  //更改
   async updateClass ({ commit }, updateClass) {
     const result = await reqUpdateCourse(updateClass)
     console.log(result)
     commit(UPDATE_CLASS, updateClass)
 
   }, */
  //添加
  async addClass ({ commit }, newClass) {
    await reqAddCourse(newClass)
    commit(ADD_CLASS, newClass)

  },
  //删除
  async deleteClass ({ commit }, title) {
    await reqDeleteCourse(title)
    commit(DELETE_CLASS, title)
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