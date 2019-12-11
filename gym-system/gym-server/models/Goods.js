const mongoose = require('mongoose');

// 2.字义Schema(描述文档结构)
const goodsSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: String,
  points: String,
  saled:String
});

// 3. 定义Model(与集合对应, 可以操作集合)
const Goods = mongoose.model('goods', goodsSchema);

// 4. 向外暴露Model
module.exports = Goods;