const mongoose = require('mongoose');

// 2.字义Schema(描述文档结构)
const rolesSchema = new mongoose.Schema({
  name: {type: String, required: true}, // 角色名称
  phone: {type: String}, // 手机号
  pwd: {type: String}, // 密码
  status: {type: Boolean, default: true}, // 创建状态
  menus: {type: [String], default: ['/']} // 所有有权限操作的菜单path的数组
});

// 3. 定义Model(与集合对应, 可以操作集合)
const Roles = mongoose.model('roles', rolesSchema);

// 4. 向外暴露Model
module.exports = Roles;