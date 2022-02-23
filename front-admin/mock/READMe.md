##### 动态生成数据

./main.js
```
import '/mock/index'
```
./mock/index.js
```
Mock.mock(模板)，返回动态生成的数据
Mock.mock(url, type, function(){})， 请求后返回数据
前端通过axios跨域，匹配地址后，即可获得对应的响应
```