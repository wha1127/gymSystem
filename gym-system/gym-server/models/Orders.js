// 1.引入mongoose
const mongoose = require('mongoose');

// 2.字义Schema(描述文档结构)
const orderSchema = new mongoose.Schema({
  avatar: String, // 用户名
  name:String, // 密码
  phone: String,
  class: String,
  orderedClass: String,
  orderedTime: Date,
  status:Boolean
});

// 3. 定义Model(与集合对应, 可以操作集合)
const Orders = mongoose.model('orders', orderSchema);

// 4. 向外暴露Model
module.exports = Orders;