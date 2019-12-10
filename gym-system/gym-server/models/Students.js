const mongoose = require('mongoose');
const md5 = require('blueimp-md5');

// 2.字义Schema(描述文档结构)
const studentSchema = new mongoose.Schema({
  name: {type: String, required: true}, // 用户名
  phone: String,
  sex: String,
  orderedTime: {type: Number, default: Date.now},
  roleId: String,
  avatar:String
});

// 3. 定义Model(与集合对应, 可以操作集合)
const Students = mongoose.model('student', studentSchema);

// 4. 向外暴露Model
module.exports = Students;