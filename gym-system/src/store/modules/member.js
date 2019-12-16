import {DOWN_BILL,UP_BILL} from '../mutation-type'
const state = {
  member: [
    {
      name: '求生',
      phone: '15666666666',
      sex: '男',
      degree: '20',
      time: '剩余30天',
      num: '剩余20次',
      how: '10',
      in: '2018-02-20  10:00',
      state: '离场',
      handle: false,
      image:'http://file02.16sucai.com/d/file/2015/0128/8b0f093a8edea9f7e7458406f19098af.jpg'
    },
    {
      name: '秋风',
      phone: '18888888888',
      sex: '女',
      degree: '20',
      time: '剩余30天',
      num: '剩余20次',
      how: '10',
      in: '2018-02-20  10:00',
      state: '离场',
      handle: false,
      image:'http://file02.16sucai.com/d/file/2014/0829/372edfeb74c3119b666237bd4af92be5.jpg'
    },
    {
      name: '下雨',
      phone: '13099999999',
      sex: '男',
      degree: '15',
      time: '剩余70天',
      num: '剩余28次',
      how: '10',
      in: '2018-02-20  10:00',
      state: '离场',
      handle: false,
      image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576069438311&di=59e0e6bc4e246badd2eb207d2036590a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F79d9c9a1b559cbc8dee0dbb4130f9d6c381f0aad18116-PXTNYy_fw658'
    },
    {
      name: '刘雨',
      phone: '13099999939',
      sex: '男',
      degree: '13',
      time: '剩余70天',
      num: '剩余28次',
      how: '10',
      in: '2018-02-20  10:00',
      state: '离场',
      handle: false,
      image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576069438310&di=d2f1bd6f1a66e609a7cca891d4dc7965&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20181018%2F21%2F1539869253-pjGAkBCJqM.jpg'
    },
    {
      name: '王雨',
      phone: '13099944999',
      sex: '男',
      degree: '335',
      time: '剩余70天',
      num: '剩余28次',
      how: '10',
      in: '2018-02-20  10:00',
      state: '离场',
      handle: false,
      image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576069667350&di=863408f6178d6e0dab3c2cb83d4c83f6&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F5cfb520a18889f7e50cb7a70ed88d339f9056409d7a2-8cHPJm_fw658"
    },
    {
      name: '赵雨',
      phone: '13099933999',
      sex: '女',
      degree: '133',
      time: '剩余70天',
      num: '剩余28次',
      how: '10',
      in: '2018-02-20  10:00',
      state: '离场',
      handle: false,
      image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576069667350&di=c95ce835697ed9831a712e2e08dd6f0b&imgtype=0&src=http%3A%2F%2Fp0.so.qhmsg.com%2Ft01e637e6fb60e4922f.jpg"
    },
    {
      name: '钱雨',
      phone: '13099999944',
      sex: '男',
      degree: '15',
      time: '剩余70天',
      num: '剩余28次',
      how: '10',
      in: '2018-02-20  10:00',
      state: '离场',
      handle: false,
      image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576069667350&di=c81bb84eced7b0740f0217f7c145b5a5&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1c02fd473c85de24f7b59bdb4dcac465088579576998-2ocyn3_fw658"
    },
    {
      name: '孙雨',
      phone: '13033999999',
      sex: '男',
      degree: '15',
      time: '剩余70天',
      num: '剩余28次',
      how: '10',
      in: '2018-02-20  10:00',
      state: '离场',
      handle: false,
      image:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2811981460,2826734177&fm=26&gp=0.jpg"
    },
    {
      name: '李雨',
      phone: '13399999999',
      sex: '男',
      degree: '15',
      time: '剩余70天',
      num: '剩余28次',
      how: '10',
      in: '2018-02-20  10:00',
      state: '离场',
      handle: false,
      image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576069667346&di=b077d06b8f9d9b12cb72938b40782899&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F80453057b736ae8243b9ac34b51d695d5e27bc2c106a4-BnpKXJ_fw658"
    },
    {
      name: '周雨',
      phone: '14099999999',
      sex: '男',
      degree: '15',
      time: '剩余70天',
      num: '剩余28次',
      how: '10',
      in: '2018-02-20  10:00',
      state: '离场',
      handle: false,
      image:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1295411592,3694069419&fm=26&gp=0.jpg"
    },
    {
      name: '吴雨',
      phone: '13099992399',
      sex: '男',
      degree: '15',
      time: '剩余70天',
      num: '剩余28次',
      how: '10',
      in: '2018-02-20  10:00',
      state: '离场',
      handle: false,
      image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576069667346&di=0ff066abd86e7747bf56f8edd99bbca0&imgtype=0&src=http%3A%2F%2Fpic49.nipic.com%2Ffile%2F20140920%2F12106414_225818176676_2.jpg"
    },
    {
      name: '郑雨',
      phone: '13099999923',
      sex: '男',
      degree: '15',
      time: '剩余70天',
      num: '剩余28次',
      how: '10',
      in: '2018-02-20  10:00',
      state: '离场',
      handle: false,
      image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4211761867,1180506769&fm=26&gp=0.jpg"
    },
    {
      name: '欧阳雨',
      phone: '13889999999',
      sex: '男',
      degree: '15',
      time: '剩余70天',
      num: '剩余28次',
      how: '10',
      in: '2018-02-20  10:00',
      state: '离场',
      handle: false,
      image:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2252990155,3982827049&fm=26&gp=0.jpg"
    },
    {
      name: '诸葛雨',
      phone: '12229999999',
      sex: '男',
      degree: '15',
      time: '剩余70天',
      num: '剩余28次',
      how: '10',
      in: '2018-02-20  10:00',
      state: '离场',
      handle: false,
      image:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2935166841,1880939248&fm=26&gp=0.jpg"
    },
    {
      name: '夏侯雨',
      phone: '13099998769',
      sex: '男',
      degree: '15',
      time: '剩余70天',
      num: '剩余28次',
      how: '10',
      in: '2018-02-20  10:00',
      state: '离场',
      handle: false,
      image:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2419253953,862047000&fm=26&gp=0.jpg"
    },
    {
      name: '东方雨',
      phone: '15099999999',
      sex: '男',
      degree: '15',
      time: '剩余70天',
      num: '剩余28次',
      how: '10',
      in: '2018-02-20  10:00',
      state: '离场',
      handle: false,
      image:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2518382028,3837494011&fm=26&gp=0.jpg"
    },
  ],
  bill:['00001111','00001112','00001113','00001114','00001115','00001116','00001117','00001118','00001119','00001110','00001120','000011121','000011122','000011123','000011124','000011125','000011126','000011127','000011128','000011129','000011130','000011131'],
  user:'',
  num:'',
}

const actions = {
  downBill({commit,state},jie){
    const index = state.bill.indexOf(jie)
    if(index===-1){
      commit(DOWN_BILL,jie)
    }else{
      alert('该手牌已借出')
    }
  },
  upBill({commit,state},huan){
    let {bill} = state
    // window.console.log(bill.length)
    const index = bill.indexOf(huan)
    // window.console.log(bill.length)
    // window.console.log(index)
    
    if(index!==-1){
      commit(UP_BILL,index)
      // row.handle=!row.handle
      state.isShow=true
    }else{
      alert('手环号码错误')
    }
    
  }
}

const mutations = {
  [DOWN_BILL](state,jie){
    state.bill= state.bill.concat(jie)
  },
  [UP_BILL](state,index){
    state.bill.splice(index,1)
    return state.bill
  }
}

const getters = {

}

export default {
  mutations,
  getters,
  actions,
  state
}