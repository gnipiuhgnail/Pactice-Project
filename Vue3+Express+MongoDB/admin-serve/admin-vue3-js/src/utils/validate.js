// 参考：https://blog.csdn.net/qq_42941302/article/details/112799014
// 在这里放对象，定义函数{this可以指向对象内部的内容}；在vue文件引用时：validator：xxx.bind(对象名称)
// 这个自定义的 validator 由于无法传参，复用性极差。
// 采用另一个思路 bind
// 参考：https://blog.csdn.net/qlwangcong518/article/details/86261597
// f.bind(obj)，实际上可以理解为obj.f()，这时，f函数体内的this自然指向的是obj
export var checkName = (rule, value, callback) => {
  if (value == "" || value == undefined || value == null) {
    console.log(this)
    callback(new Error(`${this.nameEMessage}`));
  } else {
    callback();
  }
};
// var checkPass = (rule, value, callback) => {
//   if (value === "") {
//     callback(new Error("请输入密码"));
//   } else {
//     if (ruleFormDate.value.checkPass !== "") {
//       ruleForm.value.validateField("checkPass");
//     }
//     callback();
//   }
// };
// var checkRePass = (rule, value, callback) => {
//   if (value === "") {
//     callback(new Error("请再次输入密码"));
//   } else if (value !== ruleFormDate.value.password) {
//     callback(new Error("两次输入密码不一致!"));
//   } else {
//     callback();
//   }
// };

// exports = {
//   // checkPass,
//   // checkRePass,
//   checkName
// }