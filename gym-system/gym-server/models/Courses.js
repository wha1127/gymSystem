const mongoose = require('mongoose');

// 2.字义Schema(描述文档结构)
const courseSchema = new mongoose.Schema({
  title:String, // 用户名
  price: String,
  salePrice: String,
  saleMessage: String,
  sign: [String],
  avatar:String,
  introduce:String,
  influence:String,
  attention:String
});

// 3. 定义Model(与集合对应, 可以操作集合)
const Courses = mongoose.model('course', courseSchema);

// 4. 向外暴露Model
module.exports = Courses;