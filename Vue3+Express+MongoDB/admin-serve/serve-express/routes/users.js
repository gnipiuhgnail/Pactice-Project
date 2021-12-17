// 接受一个参数，并将模块导出
module.exports = (app) => {
  const {user} = require('../db/user')
  // express 无法直接获取Post请求的参数，需要设置body解析中间件express.urlencoded
  // 创建用户
  app.use('/createuser', (req, res, next) => {
    user.findAndCreate(req,res)
  });
  // 更新用户信息
  app.use('/updateuser/:id', (req, res, next) => {
    user.updateOne(req.params.id,req,res)
  });
  // 查询某个用户信息
  app.use('/getuser/:name',(req, res, next)=>{
    user.findByName(req.params.name,res)
  })
  // 查询所有用户
  app.use('/getallusers', (req, res, next) => {
    user.findAll(res)
  });
  // 删除用户信息
  app.use('/deleteuser/:id',(req, res, next)=>{
    user.findAndDelete(req.params.id,res)
  })
}


