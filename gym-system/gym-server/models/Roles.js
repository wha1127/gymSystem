const mongoose = require('mongoose');

// 2.字义Schema(描述文档结构)
const rolesSchema = new mongoose.Schema({
  name:String, // 角色名称
  phone:String, // 手机号
  pwd:String, // 密码
  status: String, // 创建状态
  menus: {type: []} // 所有有权限操作的菜单path的数组
});

// 3. 定义Model(与集合对应, 可以操作集合)
const Roles = mongoose.model('roles', rolesSchema);

// 4. 向外暴露Model
module.exports = Roles;