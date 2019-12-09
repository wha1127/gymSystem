const mongoose = require('mongoose');

// 2.字义Schema(描述文档结构)
const coachesSchema = new mongoose.Schema({
  name: {type: String, required: true}, // 角色名称
  avatar: {type: String}, // 头像
  rank: {type: String}, // 等级
  memberCount: {type: String}, // 会员数量
  sort: {type: String}, // 所有有权限操作的菜单path的数组
  sex:{type:String}, // 性别
  star:{type:String}, // 星级
  id:{type:String}
});

// 3. 定义Model(与集合对应, 可以操作集合)
const coaches = mongoose.model('coachesSchema', coachesSchema);

// 4. 向外暴露Model
module.exports = coaches;