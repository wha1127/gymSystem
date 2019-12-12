import {DOWN_BILL,UP_BILL} from './mutation-Types'
export default{
  [DOWN_BILL](state,jie){
    state.bill= state.bill.concat(jie)
  },
  [UP_BILL](state,index){
    state.bill.splice(index,1)
    return state.bill
  }
}