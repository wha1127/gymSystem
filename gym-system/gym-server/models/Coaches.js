const mongoose = require('mongoose');

// 2.字义Schema(描述文档结构)
const coachesSchema = new mongoose.Schema({
  name: String, // 角色名称
  avatar:String, // 头像
  rank:String, // 等级
  memberCount: String, // 会员数量
  sort:String, // 所有有权限操作的菜单path的数组
  sex:String, // 性别
  star:String, // 星级
  id:String
});

// 3. 定义Model(与集合对应, 可以操作集合)
const coaches = mongoose.model('coachesSchema', coachesSchema);

// 4. 向外暴露Model
module.exports = coaches;