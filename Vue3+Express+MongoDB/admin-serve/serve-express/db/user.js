// 用户数据模型和文档
var {mongoose} = require('./index')
var UserSchema = mongoose.Schema({
  name: String,
  password: String
})
var UserModel = mongoose.model('User', UserSchema)

// var user = new UserModel({name: 'zhangsan',password: '123456'}).save()
// UserModel.find((err, res) => {
//   if(err) console.log("error")
//   else console.log(res)
// })
// UserModel.updateOne({"_id":"61b8460ba0d907f1ab2801e8"},{"name":"1111111"},(err,res) => {
//   if(err) console.log(err)
//   else console.log(res)
// })
// UserModel.deleteOne({"_id":"61bbe660b8f06c0ba2779c96"},(err, result) => {
//   if(err) console.log(err)
//   else console.log(result)
// })
// UserModel.findById({"_id":"61b8460ba0d907f1ab2801e8"},(err,res) => {
//   if(err) console.log("Not Find")
//   else console.log(res)
// })
// 增删查改
var user = {}
// 查找某一个
user.updateOne = (data,req,res) => { 
  console.log(req.body)
  return UserModel.findByIdAndUpdate(data,req.body, (err, result) => {
    if(err) console.log(err)    res.send(result)
    
  })
}
user.findByName = (data, res) => {
  return UserModel.findOne({name:data},(err,result)=>{
    if(result) res.send(true)
    else res.send(false)
  })
}
user.findAll = (res) => {
  return UserModel.find((err, result) => {
    if (err) send("finderr")
    res.send(result)
  })
}
user.findAndCreate = (req,res) => {
  return UserModel.findOne({
    name: req.body.name
  }, (err, findResult) => {
    if (err) console.log(err)
    else {
      console.log("findResult", findResult)
      if (findResult) {
        res.send("已存在")
      } else {
        new UserModel({
          "name": req.body.name,
          "password": req.body.password
        }).save(function (err, result) {
          if (err) console.log("err:")
          else {
            console.log(result)
            res.send("添加"+result+"成功")
          }
        })
      }

    }
  })
}
user.findAndDelete = (data,res) => {
  return UserModel.findByIdAndDelete(data,(err,result) => {
    if(err) console.log(err)
    res.send(result)
  })
}




module.exports.user = user
