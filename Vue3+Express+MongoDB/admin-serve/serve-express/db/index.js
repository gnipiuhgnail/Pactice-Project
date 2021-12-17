// 连接数据库
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
},function(err){
  if (err) console.log("mongodb error")
  else console.log("mongodb connect")
})

module.exports.mongoose = mongoose