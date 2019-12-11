import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)

/* var dict = {
  zh_CN: {
   messages: {
    required: function(field){
      return '请输入' + field 
    },
    confirmed: function(field) {
      return '两次输入的密码不一致'
    }
  },
  attributes: {
    OldPassword: '旧密码',
    NewPassword: '新密码',
    ConfirmNewPassword: '确认密码',
  }
  }
 } */
VeeValidate.Validator.localize('zh_CN', {
  //中文的提示信息
  messages: zh_CN.messages,
  //属性的提示
  attributes: {
    input: '课程名称',
    input1: '报名人数',
    input2: '价格',
    input3: '优惠',
    input4: '标签'
  }

});
//密码登录的账号验证
/* VeeValidate.Validator.extend('changePhone', {
  getMessage: (field) => `请输入正确的` + field,
  validate: (value) => {

    return /[1]\d{10}/.test(value)
  }
}); */
/* //短信登录的账号验证
VeeValidate.Validator.extend('changeName', {
  getMessage: (field) => `请输入正确的` + field,
  validate: (value) => {

    return /[1]\d{10}/.test(value)
  }
});
//登录密码
VeeValidate.Validator.extend('pwd', {
  getMessage: (field) => field + `只能是字母,数字,下划线`,
  validate: (value) => {
    return /\w{6}/.test(value)
  }
}); */
//验证码
/* VeeValidate.Validator.extend('authCode', {
  getMessage: (field) => field + `只能是字母,数字`,
  validate: (value) => {
    return /[A-Za-z0-9]{6}/.test(value)
  }
});
//图形验证码
VeeValidate.Validator.extend('cap', {
  getMessage: (field) => field + `只能是字母,数字`,
  validate: (value) => {
    return /[A-Za-z0-9]{4}/.test(value)
  }
}); */