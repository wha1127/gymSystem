import {DOWN_BILL,UP_BILL} from './mutation-Types'


export default {
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