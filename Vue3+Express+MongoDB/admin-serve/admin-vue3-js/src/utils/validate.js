// 参考：https://blog.csdn.net/qq_42941302/article/details/112799014
// 在这里放对象，定义函数{this可以指向对象内部的内容}；在vue文件引用时：validator：xxx.bind(对象名称)
// 这个自定义的 validator 由于无法传参，复用性极差。
// 采用另一个思路 bind
// 参考：https://blog.csdn.net/qlwangcong518/article/details/86261597
// f.bind(obj)，实际上可以理解为obj.f()，这时，f函数体内的this自然指向的是obj
// 普通函数中的this指向函数被调用的对象，而箭头函数中this是固定指向定义该函数时所在的对象。

// console.log("this", this);
// const test0 = () => {
//   console.log("this0", this);
// };
// test0();
// const obj = {
//   name: "test",
// };
// test0.bind(obj)(); // 是因为箭头函数的this是固定的，所以使用bind都无法改变this的指向吗？
function checkName(rule, value, callback) {
  if (value == "" || value == undefined || value == null) {
    callback(new Error(`${this.nameEMessage}`));
  } else {
    callback();
  }
}

function checkPass(rule, value, callback) {
  if (value == "" || value == undefined || value == null) {
    callback(new Error("请输入密码"));
  } else if (value.length<6) {
    callback(new Error("密码必须大于等于6位"));
  }else {
    callback();
  }
}

function checkRePass(rule, value, callback) {
  if (value == "" || value == undefined || value == null) {
    callback(new Error("请再次输入密码"));
  } else if (value !== this.ruleFormDate.password) {
    callback(new Error("两次输入密码不一致!"));
  } else {
    callback();
  }
}

export { checkPass, checkRePass, checkName };
