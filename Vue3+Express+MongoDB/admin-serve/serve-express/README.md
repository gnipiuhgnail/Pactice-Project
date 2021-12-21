中间件：
express().[HTTP方法]('路由', 中间件函数)
中间件函数：function(req,res,next){
  next()
}
var Fun = function(req,res,next){
  next()
}
加载中间件函数：app.use(Fun);这个会在上一个请求到下一个请求之间加载。
调用该next()函数将请求传递给堆栈中的下一个中间件函数。