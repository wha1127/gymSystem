import Admission from '../pages/Admission/Admission.vue'
import Member from '../pages/Member/Member.vue'
import Bianji from '../pages/Member/Bianji/Bianji.vue'

export default [
  {
    path: '/Admission',
    component: Admission,
  },
  {
    path: '/Member',
    component: Member,
  },
  {
    path: '/Bianji',
    component: Bianji
  },
  {
    path: '/',
    redirect: '/Admission'
  },
  

]