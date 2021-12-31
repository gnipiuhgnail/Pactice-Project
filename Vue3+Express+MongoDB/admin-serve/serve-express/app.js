var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var token = require('./token/token');
// 2. 允许前端跨域请求 
// var cors = require('cors')

var app = express();

// view engine setup
// 2. 允许前端跨域请求
// app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//解析token获取用户信息
app.use(function(req, res, next) {
  var token = req.headers['authorization'];
  if(token == undefined){
      return next();
  }else{
      vertoken.getToken(token).then((data)=> {
          req.data = data;
          return next();
      }).catch((error)=>{
          return next();
      })
  }
});
// 将app传过去并执行users.js里面的函数
require('./routes/users')(app)
// 1. 允许前端跨域请求
// app.all('*', (req, res, next) => {
//   res.header("Access-Control-Allow-Origin",req.headers.origin)
//   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization,Accept,X-Requested-With")
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
//   res.header("Access-Control-Allow-Credentials", "true")
//   res.header("X-Powered-By",'3.2.1')
//   if(req.method === "OPTIONS"){
//     res.send(200)
//   }else{
//     next()
//   }
// })

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});


app.listen(3000,() => {
  console.log("connect host")
})
module.exports = app;
