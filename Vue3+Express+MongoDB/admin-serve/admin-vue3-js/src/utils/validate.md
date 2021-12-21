### validate.js 提取表单校验函数
```
element 自定义的 validator 由于无法传参，复用性极差，可以采用bind。
1. 定义函数{this可以指向对象内部的内容}；
2. 在vue文件引用时：定义对象；validator：函数.bind(对象名称)
```
### bind
```
1. f.bind(obj)，实际上可以理解为obj.f()，这时，f函数体内的this自然指向的是obj
2. 普通函数中的this指向函数被调用的对象，而箭头函数中this是固定指向定义该函数时所在的对象。所以对于bind来说只是简单的传参。
```