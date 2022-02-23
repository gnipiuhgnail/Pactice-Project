// 验证是否是[1-100]的小数,即不可以等于0
export function isBtnOneToHundred(rule, value, callback) {
  if (!value) {
    return callback(new Error("需要输入值呀"));
  }
  setTimeout(() => {
    if (!Number(value)) {
      callback(new Error("请输入数值，并且范围在0-100"));
    } else {
      if (value < 1 || value > 100) {
        callback(new Error("请输入数值，并且范围在0-100"));
      } else {
        callback();
      }
    }
  }, 100);
}
